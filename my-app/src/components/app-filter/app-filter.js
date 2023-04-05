import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Всі працівники" },
    { name: "first", label: "Співробітники для підвищення" },
    { name: "second", label: "Працівники З/П 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        type="button"
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};
export default AppFilter;
