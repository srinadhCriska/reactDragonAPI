
import "./App.css";
import { useState,useEffect } from "react";
import { fetchDragonBallAPI } from "./service/dragonBall.API";
import { EachCharacterCard } from "./components/EachChar.component/EachChar";

function App() {
  const[charactersData,updateCharData]=useState([])

  
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
    <div className="bg-container">
      <nav>
        <img
          className="nav-logo"
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
          alt="nav-logo"
        />
        <div className="nav-items">
          <a
            href="https://web.dragonball-api.com/documentation"
            target="_blank"
          >
            Docs
          </a>
          <a href="https://web.dragonball-api.com/about" target="_blank">
            About
          </a>
          <a
            className="a-button"
            href="https://web.dragonball-api.com/support"
            target="_blank"
          >
            Support Us
          </a>
        </div>
      </nav>
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
            {charactersData.map((eachCharacter,index)=>{
                return <EachCharacterCard key={index} data={eachCharacter}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
