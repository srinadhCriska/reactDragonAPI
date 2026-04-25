import { useLocation } from "react-router-dom";
import "./Character.styles.css";

export const PlanetCharCard = () => {
  const location = useLocation();
  const charData = location.state;
  const { name, isDestroyed, image, description, ki, maxKi, race, gender } =
    charData;

  let prefix = Object.keys(charData).length > 6 ? "Character" : "Planet";
  return (
    <div className="planet-char-details-container">
      <h1 className="title">{name} - Details</h1>
      <div className="details-container">
        <div className="img-box">
          <img src={image} alt={name} className="char-planet-image" />
        </div>
        <div className="text-card">
          {prefix === "Planet" ? (
            <>
              <p className="text-content">
                <span className="text-name">{prefix} Name: </span>
                {name}
              </p>
              <p className="text-content">
                <span className="text-name">Description: </span>
                {description.slice(0,400)}
              </p>
              <p className="text-content">
                <span className="text-name">Planet destroyed: </span>
                {isDestroyed ? "Yes" : "No"}
              </p>
            </>
          ) : (
            <>
              <p className="text-content">
                <span className="text-name">{prefix} Name: </span>
                {name}
              </p>
              <p className="text-content">
                <span className="text-name">Gender: </span>
                {gender}
              </p>
              <p className="text-content">
                <span className="text-name">Race: </span>
                {race}
              </p>
              <p className="text-content">
                <span className="text-name">Ki: </span>
                {ki}
              </p>
              <p className="text-content">
                <span className="text-name">MaxKI: </span>
                {maxKi}
              </p>
              <p className="text-content">
                <span className="text-name">Description: </span>
                {description.slice(0,400)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
