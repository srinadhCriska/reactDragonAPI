
import "./EachPlanet.css";
import { useNavigate } from "react-router-dom";
export const EachPlanetCard = ({ data }) => {
  const { id, name,isDestroyed,image,description} = data; 
    const navigate=useNavigate()
    
      const onClickPlanet=()=>{
      navigate("/eachCharPlanetPage",{state:data}
      )
  }
  
  return (
    <div className="each-planet-container" onClick={onClickPlanet}>
      <img src={image} alt={name} className="each-planet-image" />
      <div className="img-details">
        <h2 className="def-clr text-title">Planet - {name}</h2>
        <p className="def-clr custom-clr">Destroyed: {isDestroyed?"Yes":"No"}</p>    
      </div>
    </div>
  );
};