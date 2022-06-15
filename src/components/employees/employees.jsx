import Employee from "../employee/employee";
import "./employees.css";
function Employees({ employees, toggleEmployeeBooleanData, fireEmployee }) {
    const visibleEmployees = () => {
        if (employees.length) {
            return employees.map(({ id, ...employeeData }) => (
                <Employee
                    {...employeeData}
                    likeEmployee={(e) =>
                        toggleEmployeeBooleanData(
                            e.currentTarget.getAttribute("data-toggle"),
                            id
                        )
                    }
                    increaseEmployee={(e) =>
                        toggleEmployeeBooleanData(
                            e.currentTarget.getAttribute("data-toggle"),
                            id
                        )
                    }
                    fireEmployee={() => fireEmployee(id)}
                    key={id}
                />
            ));
        } else {
            return (
                <li className="fs-5 text-center p-2 text-primary text-opacity-50">
                    Список сотрудников пуст...
                </li>
            );
        }
    };
    return (
        <ul className="list-group employees-list mt-3">{visibleEmployees()}</ul>
    );
}

export default Employees;
