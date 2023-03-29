import EmployersListItem from "../employers-list-item/employers-list-items";
import "./employers-list.css";

const EmployersList = ({ data }) => {
  const elemets = data.map((item) => {
    const { id, ...propsItem } = item;
    return (
      <EmployersListItem
        // name={item.name}
        // surname={item.surname}
        // salary={item.salary}
        key={id}
        {...propsItem}
      />
    );
  });

  return <ul className="app-list list-group">{elemets}</ul>;
};

export default EmployersList;
