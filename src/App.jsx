// components/App.js
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CharacterData from "./Pages/CharacterData";
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
          path="/CharacterData"
          element={<CharacterData />}
        />
      </Routes>
    </div>
  );
}
