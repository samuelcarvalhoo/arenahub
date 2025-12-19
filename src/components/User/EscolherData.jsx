import Callendar from "./Callendar.jsx";
import "./EscolherData.css";
const EscolherData = ({ data, updateFieldHandler }) => {
  return (
    <div className="escolher-data-container">
      <div className="calendario">
        <Callendar 
        className="callendar"
          value={data.dia} 
          onChange={(newValue) => updateFieldHandler("dia", newValue ? newValue.format("YYYY-MM-DD") : "")} 
        />
      </div>
      
      
    </div>
  );
};

export default EscolherData;