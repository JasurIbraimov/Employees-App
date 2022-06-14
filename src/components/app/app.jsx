import { Component } from "react";

// Components
import AppFilter from "../app-filter/app-filter";
import AppForm from "../app-form/app-form";
import AppStats from "../app-stats/app-stats";
import Employees from "../employees/employees";
import SearchPanel from "../search-panel/search-panel";
import AppModal from "../app-modal/app-modal";

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
    };
  }

  createEmployee = (employeeName, employeeSalary) => {
    if (
      this.state.employees.findIndex(
        (employee) => employee.employeeName === employeeName
      ) === -1
    ) {
      const employee = {
        employeeName: employeeName,
        employeeSalary: employeeSalary,
        increase: false,
        like: false,
      };
      this.setState({ employees: [...this.state.employees, employee] });
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

  toggleEmployeeBooleanData = (booleanDataName, index) => {
    const employeeToIncrease = this.state.employees[index];
    employeeToIncrease[booleanDataName] = !employeeToIncrease[booleanDataName];
    this.setState({ employees: [...this.state.employees] });
  };

  fireEmployee = (index) => {
    this.state.employees.splice(index, 1);
    this.setState({ employees: [...this.state.employees] });
  };

  render() {
    const { employees, modal } = this.state;
    return (
      <div className="container-lg">
        <header className="mt-3">
          <AppStats
            employeesToIncrease={0}
            employeesTotalCount={employees.length}
          />
        </header>
        <main>
          <section className="bg-secondary mt-3 p-3 shadow rounded-3 text-white">
            <SearchPanel />
            <AppFilter />
          </section>
          <section className="shadow">
            <Employees
              employees={employees}
              toggleEmployeeBooleanData={this.toggleEmployeeBooleanData}
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
        {modal.opened && <AppModal {...modal} handleModal={this.handleModal} />}
      </div>
    );
  }
}

export default App;
