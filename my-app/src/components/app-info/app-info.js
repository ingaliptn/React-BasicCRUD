import "./app-info.css";

const AppInfo = ({employers, increased, risePerson}) => {
  return (
    <div className="app-info">
      <h1>Бухгалтерський облік працівників у компанії "Амогус"</h1>
      <h2>Загальна кількість працівників: {employers}</h2>
      <h2>Вони отримають приз: {increased}</h2>
      <h2>Вони йдуть на збільшення: {risePerson}</h2>
    </div>
  );
};
export default AppInfo;
