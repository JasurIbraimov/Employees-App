import Employee from '../employee/employee';
import './employees.css';
function Employees({employees, toggleEmployeeBooleanData, fireEmployee}) {
    const likeEmployee = (index) => toggleEmployeeBooleanData("like", index)
    const increaseEmployee = (index) => toggleEmployeeBooleanData("increase", index)
    const generateUniqueKey = (employeeName) => employeeName + +new Date() 
    return (
        <ul className='list-group employees-list mt-3'>
            {employees.map((employee, index)=> {
                const key = generateUniqueKey(employee.employeeName);
                return <Employee 
                    {...employee} 
                    index={index} 
                    likeEmployee={likeEmployee}
                    increaseEmployee={increaseEmployee}
                    fireEmployee={fireEmployee}
                    key={key}
                />
            })}

        </ul>
    )
}


export default Employees;