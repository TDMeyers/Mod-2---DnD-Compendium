// components/App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Homepage from "./Pages/Homepage";
import CharacterData from "./Pages/CharacterData";
import Class from "./Pages/Class";
import Equipment from "./Pages/Equipment";
import GameMechanics from "./Pages/GameMechanics";
import Monsters from "./Pages/Monsters";
import Races from "./Pages/Races";
import Rules from "./Pages/Rules";
import Spells from "./Pages/Spells";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/CharacterData"
          element={<CharacterData />}
        />
        <Route
          path="/Class"
          element={<Class />}
        />
        <Route
          path="/Equipment"
          element={<Equipment />}
        />
        <Route
          path="/GameMechanics"
          element={<GameMechanics />}
        />
        <Route
          path="/Monsters"
          element={<Monsters />}
        />
        <Route
          path="/Races"
          element={<Races />}
        />
        <Route
          path="/Rules"
          element={<Rules />}
        />
        <Route
          path="/Spells"
          element={<Spells />}
        />
      </Routes>
    </div>
  );
}
