import "./App.css";
import CharCard from "./components/CharacterCard/Chars.component";
import PlanetCard from "./components/PlanetCard/Planet.component";
import Layout from "./Layout/layout";
import { PlanetCharCard } from "./pages/Character/Character.page";
import Home from "./pages/Home/Home.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/planets" element={<PlanetCard/>} />
        <Route path="/characters" element={<CharCard/>} />
        <Route path="/eachCharPlanetPage" element={<PlanetCharCard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
