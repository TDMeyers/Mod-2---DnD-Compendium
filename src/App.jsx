// components/App.js
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import GameMechanics from "./Pages/GameMechanics"
import CharacterData from "./Pages/CharacterData";
import Monsters from "./Pages/Monsters"
import Spells from "./Pages/Spells"
import Navbar from "./components/NavBar";

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
          path="/GameMechanics"
          element={<GameMechanics />}
        />
        <Route
          path="/CharacterData"
          element={<CharacterData />}
        />
        <Route
          path="/Monsters"
          element={<Monsters />}
        />
        <Route
          path="/Spells"
          element={<Spells />}
        />
      </Routes>
    </div>
  );
}
