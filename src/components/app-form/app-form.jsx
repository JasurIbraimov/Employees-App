import { useRef } from "react";

function AppForm({createEmployee, openModal}) {
    const nameRef = useRef();
    const salaryRef = useRef();
    function onFormSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const salary = salaryRef.current.value;
        if (name !== "" && salary !== "") {
            createEmployee(name, salary);
            nameRef.current.value = "";
            salaryRef.current.value = "";
        } else {
            openModal("Ошибка", "Не все данные предоставлены!")
        }

    }
    return (
        <div className="shadow bg-secondary mt-3 rounded-3 p-3 text-white">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={onFormSubmit}>
                <input ref={nameRef} type="text" className="form-control" placeholder="Как его зовут?"/>
                <input min="100" ref={salaryRef} type="number" className="form-control" placeholder="З/П в $?"/>
                <button className="btn btn-outline-light" type="submit">Добавить</button>
            </form>
        </div>
    )
}


export default AppForm;