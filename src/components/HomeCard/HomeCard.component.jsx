import { useNavigate } from "react-router-dom"
import "./HomeCard.styles.css";

 export const HomeCard=()=>{

    const navigate=useNavigate();

     const displayCharsPage=()=>{
          navigate("/characters")

        }
      const displayPlanetsPage=()=>{
          navigate("/planets")
        }
    
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

         <div className="main-cards-container">
            <div className="home-cards" onClick={displayCharsPage} >
                <img src="https://dragonball-api.com/characters/goku_normal.webp" alt="characterImg"/>
                <h1 className="home-title">Characters</h1>
            </div>
            <div className="home-cards" onClick={displayPlanetsPage}>
                <img src="https://dragonball-api.com/planetas/Namek_U7.webp" alt="characterImg"/>
                <h1 className="home-title">Planets</h1>
            </div>
         </div>

        </div>       
    )
}