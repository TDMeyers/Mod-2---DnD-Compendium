// components/App.js
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
      </Routes>
    </div>
  );
}
