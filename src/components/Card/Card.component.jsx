import { useState,useEffect} from "react"
import "./Card.styles.css"
import { EachCharacterCard } from "../EachChar.component/EachChar"
import { fetchDragonBallAPI } from "../../service/dragonBall.API"

const Card=()=>{
    const[charactersData,updateCharData]=useState(null)
    useEffect(()=>{
         const fetchData=async()=>{
            try{
              const charData= await fetchDragonBallAPI()
              updateCharData(charData)
    
            }
            catch(e){
               console.log(
              "Error inside the useEffect",e.message
               )
            }
         }
    
         fetchData()
      },[])
      return (
            <div className="card">
                <div className="icon-card">
                  <img
                    src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
                    className="body-logo"
                    alt="bodyLogo"
                  />
                  <h1 className="body-text">The Dragon Ball API</h1>
                </div>
        
                <div className="images-container">
                  <div id="imagesBox">
                    {charactersData && charactersData.map((eachCharacter,index)=>{
                        return <EachCharacterCard key={index} data={eachCharacter}/>
                    })}
                  </div>
                </div>
              </div>
      )
}

export default Card;