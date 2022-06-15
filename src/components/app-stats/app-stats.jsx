import "./app-stats.css";

function AppStats({ employeesTotalCount, employeesToIncrease }) {
    return (
        <section className="bg-primary p-3 shadow rounded-3 text-white">
            <h1 className="fs-1">Учет сотрудников в компании HWS</h1>
            <h2 className="fs-3">
                Общее число сотрудников: {employeesTotalCount}
            </h2>
            <h2 className="fs-3">Премию получат: {employeesToIncrease}</h2>
        </section>
    );
}

export default AppStats;
