import Employee from '../employee/employee';
import './employees.css';
function Employees({employees, increaseEmployee, fireEmployee}) {
    return (
        <ul className='list-group employees-list mt-3'>
            {employees.map((employee, index)=> (
                <Employee 
                    {...employee} 
                    index={index} 
                    increaseEmployee={increaseEmployee} 
                    fireEmployee={fireEmployee}
                    key={index}
                />
            ))}

        </ul>
    )
}


export default Employees;