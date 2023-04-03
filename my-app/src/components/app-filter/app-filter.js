import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Всі працівники
      </button>
      <button className="btn btn-outline-light" type="button">
        Співробітники для підвищення
      </button>
      <button className="btn btn-outline-light" type="button">
        Працівники З/П 1000$
      </button>
    </div>
  );
};
export default AppFilter;
