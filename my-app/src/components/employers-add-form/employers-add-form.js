import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.surname, this.state.salary);
    this.props.onAdd(this.state.name, this.state.surname, this.state.salary);
    this.setState({
      name: "",
      surname: "",
      salary: "",
    });
  };

  render() {
    const { name, surname, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Додайте нового працівника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Яке його прізвище?"
            name="surname"
            value={surname}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
