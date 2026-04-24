// import { CharDetails } from "../CharDetails.component/CharDetails";
import "./EachChar.css";

export const EachCharacterCard = ({ data }) => {
  const { id, name, ki, maxKi, race, image, description, gender,affiliation } = data;
   let characterDetails = [
    {Affiliation:affiliation},
    {KI:ki},
    {"Total KI":maxKi}
   ];
  
  return (
    <div className="each-card">
      <img src={image} alt={name} className="each-image" />
      <div className="img-details">
        <h2 className="def-clr text-title">{name}</h2>
        <p className="def-clr custom-clr">{race} - {gender}</p>
         {characterDetails.map((eachInfo,index)=>{
            let charSpecs=Object.entries(eachInfo)
            return (
            <div className="each-info" key={index}>
                <p className="def-clr">{charSpecs[0][0]}:</p>
                <p className="def-clr custom-clr">{charSpecs[0][1]}</p>
            </div>
         )
         })}
    
      </div>
    </div>
  );
};
