import { useState } from 'react';

// Components
import AppFilter from '../app-filter/app-filter';
import AppForm from '../app-form/app-form';
import AppStats from '../app-stats/app-stats'
import Employees from '../employees/employees';
import SearchPanel from '../search-panel/search-panel';
import AppModal from '../app-modal/app-modal';


function App() {
    const [employees, setEmployees] = useState([])
    const [modal, setModal] = useState({
        opened: false, 
        title: "",
        content: ""
    });

    function createEmployee(employeeName, employeeSalary) {
        if (employees.findIndex(employee => employee.employeeName === employeeName) === -1) {
            const employee = {
                employeeName: employeeName,
                employeeSalary: employeeSalary,
                increase: false
            }
            setEmployees((employees) => ([...employees, employee]));    
        } else {
            openModal("Ошибка!", "Такой пользователь уже есть в списке!")
        }
        
    }

    function closeModal() {
        setModal({opened: false, title:"", content: ""})
    }

    function openModal(title, content) {
        setModal({opened: true, title, content})
    }

    function increaseEmployee(index, increase) {
        const employeeToIncrease = employees[index]
        employeeToIncrease.increase = increase
        setEmployees([...employees])
    }

    function fireEmployee(index) {
        employees.splice(index, 1);
        setEmployees([...employees])
    }
    return (
        <div className='container-lg'> 
            <header className='mt-3'>
                <AppStats employeesToIncrease={0} employeesTotalCount={employees.length} /> 
            </header>
            <main>
                <section className='bg-secondary mt-3 p-3 shadow rounded-3 text-white'>
                    <SearchPanel />
                    <AppFilter />
                </section>
                <section className='shadow'>
                    <Employees 
                        employees={employees} 
                        fireEmployee={fireEmployee}
                        increaseEmployee={increaseEmployee}/>
                </section>
            </main>
            <footer>
                <AppForm createEmployee={createEmployee} openModal={openModal} />
            </footer>
            {modal.opened && <AppModal title={modal.title} closeModal={closeModal} content={modal.content}/>}
        </div>
    )
};


export default App;