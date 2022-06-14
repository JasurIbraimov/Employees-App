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
        employeeName,
        employeeSalary,
        increase: false,
        like: false,
        id: employeeName + +new Date()
      };
      this.setState(({employees}) => ({employees: [...employees, employee]}));
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
    this.setState(({employees}) => {
      const employeeIndex = employees.findIndex(employee => employee.id === id);
      employees[employeeIndex][booleanDataName] = !employees[employeeIndex][booleanDataName]
      return {employees}
    })
    
  };

  fireEmployee = (id) => {
    this.setState(({employees}) => {
      return { employees: employees.filter(employee => employee.id !== id) }
    });
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
