import "./employee.css";
function Employee({
  employeeName,
  employeeSalary,
  increase,
  like,
  increaseEmployee,
  id,
  fireEmployee,
  likeEmployee,
}) {
  const setLiked = (classNames) => classNames + (like ? " like" : "");
  const setIncreased = (classNames) =>
    classNames + (increase ? " text-warning" : "");
  return (
    <li
      className={setLiked(
        "list-group-item d-flex justify-content-between align-items-center "
      )}
    >
      <span
        onClick={() => likeEmployee(id)}
        className={setIncreased("list-group-item-label")}
      >
        {employeeName}
      </span>
      <input
        type="text"
        className={setIncreased("border-0 text-center")}
        defaultValue={employeeSalary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => increaseEmployee(id)}
          type="button"
          className="btn-cookie btn-light text-warning btn-sm btn me-3"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-light text-danger btn-sm btn me-3"
          onClick={() => fireEmployee(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <button className="btn btn-star btn-sm ">
          <i className="fas fa-star text-warning"></i>
        </button>
      </div>
    </li>
  );
}

export default Employee;
