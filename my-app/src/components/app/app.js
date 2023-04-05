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
        {
          name: "Oleg",
          surname: "Rabota",
          salary: 800,
          increase: true,
          rise: true,
          id: 1,
        },
        {
          name: "Yan",
          surname: "Egey",
          salary: 350,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Bogdan",
          surname: "Nadeviat",
          salary: 1200,
          increase: true,
          rise: false,
          id: 3,
        },
        {
          name: "Sergey",
          surname: "Pirat",
          salary: 950,
          increase: false,
          rise: false,
          id: 4,
        },
      ],
      term: "",
      filter: "all",
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
    if (name.length >= 3 && surname.length >= 3 && salary.length > 0) {
      const newItem = {
        name,
        surname,
        salary,
        increase: false,
        rise: false,
        id: this.maxId++,
      };

      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    } else {
      alert("Error");
    }
    return;
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  onSlaryChange = (id, prop) => {
    this.setState(({ data }) => ({}));
  };
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1 || item.surname.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case "first":
        return items.filter((item) => item.rise);
      case "second":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const emp = this.state.data.length;
    const prem = this.state.data.filter((item) => item.increase).length;
    const rise = this.state.data.filter((item) => item.rise).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employers={emp} increased={prem} risePerson={rise} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
