import './app-filter.css';
function AppFilter() {
    return (
        <div className="btn-group mt-3">
            <button type="button" className="btn btn-light">
                Все сотрудники
            </button>
            <button type="button" className="btn btn-outline-light">
                Сотрудники на повышение
            </button>
            <button type="button" className="btn btn-outline-light">
                З/п больше 1000$
            </button>
        </div>
    )
}


export default AppFilter;