import "./app-controls.css";

function AppControls({ controlFunction, controlType, controlBtns }) {
    const activeClassName = (control) =>
        "btn " + (control === controlType ? "btn-light" : "btn-outline-light");
    return (
        <div className="btn-group mt-3">
            {controlBtns.map(({ name, label }) => (
                <button
                    key={name}
                    type="button"
                    className={activeClassName(name)}
                    onClick={() => controlFunction(name)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default AppControls;
