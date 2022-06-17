import { Component } from "react";

// Components
import AppControls from "../app-controls/app-controls";
import AppForm from "../app-form/app-form";
import AppStats from "../app-stats/app-stats";
import Employees from "../employees/employees";
import SearchPanel from "../search-panel/search-panel";
import AppModal from "../app-modal/app-modal";
import filters from "../../data/filters";
import sorts from "../../data/sort";
import { filterBtns } from "../../data/filters";
import { sortBtns } from "../../data/sort";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            modal: {
                opened: false,
                title: "",
                content: "",
            },
            filter: "All",
            searching: "",
            sort: "SalaryINC",
        };
    }

    createEmployee = (employeeName, employeeSalary) => {
        if (
            this.state.employees.findIndex(
                (employee) => employee.employeeName === employeeName
            ) === -1
        ) {
            const employee = {
                employeeName,
                employeeSalary,
                increase: false,
                like: false,
                id: employeeName + +new Date(),
            };
            this.setState(({ employees }) => ({
                employees: [...employees, employee],
            }));
        } else {
            this.handleModal(
                true,
                "Ошибка!",
                "Такой пользователь уже есть в списке!"
            );
        }
    };

    handleModal = (opened, title, content) => {
        this.setState({ modal: { opened, title, content } });
    };

    toggleEmployeeBooleanData = (booleanDataName, id) => {
        // this.setState(({ employees }) => {
        // const employeeIndex = employees.findIndex(
        //     (employee) => employee.id === id
        // );

        // const prevEmployeeData = employees[employeeIndex];
        // const nextEmployeeData = {
        //     ...prevEmployeeData,
        //     [booleanDataName]: !prevEmployeeData[booleanDataName],
        // };
        // const nextEmployees = [
        //     ...employees.slice(0, employeeIndex),
        //     nextEmployeeData,
        //     ...employees.slice(employeeIndex + 1),
        // ];

        //     return { employees: nextEmployees };
        // });
        this.setState(({ employees }) => ({
            employees: employees.map((employee) =>
                employee.id === id
                    ? {
                          ...employee,
                          [booleanDataName]: !employee[booleanDataName],
                      }
                    : employee
            ),
        }));
    };

    fireEmployee = (id) => {
        this.setState(({ employees }) => {
            return {
                employees: employees.filter((employee) => employee.id !== id),
            };
        });
    };

    countIncreasedEmployees() {
        return this.state.employees.filter((employee) => employee.increase)
            .length;
    }

    controlEmployeesBy = (controlName, controlType) => {
        this.setState({
            [controlName]: controlType,
        });
    };

    setSearchingLetters = (searching) => {
        this.setState({ searching });
    };

    showCorrectEmployees = () => {
        const { sort, searching, employees, filter } = this.state;
        return this.sortEmployees(
            this.searchEmployees(
                this.filterEmployees(employees, filter),
                searching
            ),
            sort
        );
    };
    sortEmployees = (employees, sort) => {
        let correctEmployees;
        switch (sort) {
            case sorts.SORT_BY_SALARYDEC:
                correctEmployees = employees.sort(function (
                    employee,
                    employeeNext
                ) {
                    if (employee.employeeSalary > employeeNext.employeeSalary) {
                        return -1;
                    }
                    if (employee.employeeSalary < employeeNext.employeeSalary) {
                        return 1;
                    }
                    return 0;
                });
                break;
            default:
                correctEmployees = employees.sort(function (
                    employee,
                    employeeNext
                ) {
                    if (employee.employeeSalary > employeeNext.employeeSalary) {
                        return 1;
                    }
                    if (employee.employeeSalary < employeeNext.employeeSalary) {
                        return -1;
                    }
                    return 0;
                });
                break;
        }
        return correctEmployees;
    };
    filterEmployees = (employees, filter) => {
        let correctEmployees;
        switch (filter) {
            case filters.FILTER_BY_INCREASED:
                correctEmployees = employees.filter(
                    (employee) => employee.increase
                );
                break;
            case filters.FILTER_BY_SALARY_MORE_1000:
                correctEmployees = employees.filter(
                    (employee) => employee.employeeSalary > 1000
                );
                break;
            case filters.FILTER_BY_LIKED:
                correctEmployees = employees.filter(
                    (employee) => employee.like
                );
                break;
            default:
                correctEmployees = employees;
                break;
        }
        return correctEmployees;
    };
    searchEmployees = (employees, searchLetters) => {
        if (searchLetters.length === 0) return employees;
        return employees.filter(
            (employee) =>
                employee.employeeName
                    .toLowerCase()
                    .indexOf(searchLetters.toLowerCase()) !== -1
        );
    };
    render() {
        const { employees, modal, filter, sort } = this.state;
        const correctEmployees = this.showCorrectEmployees();
        return (
            <div className="container-lg">
                <header role="banner" className="mt-3">
                    <AppStats
                        employeesToIncrease={this.countIncreasedEmployees()}
                        employeesTotalCount={employees.length}
                    />
                </header>
                <main role="contentinfo">
                    <section className="bg-secondary mt-3 p-3 shadow rounded-3 text-white">
                        <SearchPanel
                            setSearchingLetters={this.setSearchingLetters}
                        />
                        <div className="d-flex justify-content-between">
                            <AppControls
                                controlFunction={(filter) =>
                                    this.controlEmployeesBy("filter", filter)
                                }
                                controlType={filter}
                                controlBtns={filterBtns}
                            />
                            <AppControls
                                controlFunction={(sorting) =>
                                    this.controlEmployeesBy("sort", sorting)
                                }
                                controlType={sort}
                                controlBtns={sortBtns}
                            />
                        </div>
                    </section>
                    <section className="shadow">
                        <Employees
                            employees={correctEmployees}
                            toggleEmployeeBooleanData={
                                this.toggleEmployeeBooleanData
                            }
                            fireEmployee={this.fireEmployee}
                        />
                    </section>
                </main>
                <footer>
                    <AppForm
                        createEmployee={this.createEmployee}
                        handleModal={this.handleModal}
                    />
                </footer>
                {modal.opened && (
                    <AppModal {...modal} handleModal={this.handleModal} />
                )}
            </div>
        );
    }
}

export default App;
