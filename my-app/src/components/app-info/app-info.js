import "./app-info.css";

const AppInfo = ({employers, increased, risePerson}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании "Амогус"</h1>
      <h2>Общее число сотрудников: {employers}</h2>
      <h2>Премию получат: {increased}</h2>
      <h2>На повышение идут: {risePerson}</h2>
    </div>
  );
};
export default AppInfo;
