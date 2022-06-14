import Employee from '../employee/employee';
import './employees.css';
function Employees({employees, toggleEmployeeBooleanData, fireEmployee}) {
    const likeEmployee = (id) => toggleEmployeeBooleanData("like", id)
    const increaseEmployee = (id) => toggleEmployeeBooleanData("increase", id)
    return (
        <ul className='list-group employees-list mt-3'>
            {employees.map(({id, ...employeeData}) => (
                <Employee 
                    {...employeeData} 
                    id={id} 
                    likeEmployee={likeEmployee}
                    increaseEmployee={increaseEmployee}
                    fireEmployee={fireEmployee}
                    key={id}
                />
            ))}

        </ul>
    )
}


export default Employees;