import { Component } from "react";

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { createEmployee, handleModal } = this.props;
    const { name, salary } = this.state;
    if (name !== "" && salary !== "") {
      createEmployee(name, salary);
      this.setState({ name: "", salary: "" });
    } else {
      handleModal(true, "Ошибка", "Не все данные предоставлены!");
    }
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="shadow bg-secondary mt-3 rounded-3 p-3 text-white">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onValueChange}
            value={name}
            name="name"
            type="text"
            className="form-control"
            placeholder="Как его зовут?"
          />
          <input
            onChange={this.onValueChange}
            value={salary}
            name="salary"
            min="100"
            type="number"
            className="form-control"
            placeholder="З/П в $?"
          />
          <button className="btn btn-outline-light" type="submit">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default AppForm;
