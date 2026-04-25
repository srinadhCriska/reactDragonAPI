import { useState, useEffect,useNavigate } from "react";
import "./Planet.styles.css";
// import { EachCharacterCard } from "../EachChar.component/EachChar";
import { fetchPlanetsAPI } from "../../service/dragonBall.API";
import { EachPlanetCard } from "../EachPlanet/EachPlanet.component";

const PlanetCard = () => {
  const [planetsData, updatePlanetsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charData = await fetchPlanetsAPI();
        updatePlanetsData(charData);
      } catch (e) {
        console.log("Error inside the useEffect", e.message);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="planets-container">
      {planetsData &&
        planetsData.map((eachCharacter, index) => {
          return <EachPlanetCard key={index} data={eachCharacter}/>;
        })}
    </div>
  );
};

export default PlanetCard;
