import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Oleg", surname: "Rabota", salary: 800, increase: true, id: 1 },
        { name: "Yan", surname: "Egey", salary: 350, increase: false, id: 2 },
        {
          name: "Bogdan",
          surname: "Nadeviat",
          salary: 1200,
          increase: true,
          id: 3,
        },
        {
          name: "Sergey",
          surname: "Pirat",
          salary: 950,
          increase: false,
          id: 4,
        },
      ],
    };
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, surname, salary) => {
    const newItem = {
      name,
      surname,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
    return;
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList data={this.state.data} onDelete={this.deleteItem} />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
