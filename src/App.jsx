// components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayAlignments from "./Pages/DisplayAlignments";
import Homepage from "./Pages/Homepage";

export default function App() {
  const api = "https://www.dnd5eapi.co/api/alignments/";

  const [alignments, setAlignments] = useState([]);

  useEffect(() => {
    const fetchAlignmentsData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setAlignments(data.results);
    };
    fetchAlignmentsData();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
      </Routes>
    </div>
  );
}
