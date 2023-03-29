import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App() {
  const data = [
    { name: "Oleg", surname: "Rabota", salary: 800, increase: true, id: 1 },
    { name: "Yan", surname: "Egey", salary: 350, increase: false, id: 2 },
    { name: "Bogdan", surname: "Nadeviat", salary: 1200, increase: true, id: 3 },
    { name: "Sergey", surname: "Pirat", salary: 950, increase: false, id: 4 },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
