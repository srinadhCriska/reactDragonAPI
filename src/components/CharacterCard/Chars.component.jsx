import { useState, useEffect } from "react";
import "./Chars.styles.css";
// import { EachCharacterCard } from "../EachChar.component/EachChar";

import { fetchDragonBallAPI } from "../../service/dragonBall.API";
import { EachCharacterCard } from "../EachChar.component/EachChar.component";

const CharCard = () => {
  const [charactersData, updateCharData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const charData = await fetchDragonBallAPI();
        updateCharData(charData);
      } catch (e) {
        console.log("Error inside the useEffect", e.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card-container">
      {charactersData &&
        charactersData.map((eachCharacter, index) => {
          return <EachCharacterCard key={index} data={eachCharacter} />;
        })}
    </div>
  );
};

export default CharCard;
