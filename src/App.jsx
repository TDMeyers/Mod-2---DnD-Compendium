// components/App.js
import { useState, useEffect } from "react";
import DisplayAlignments from "./Pages/DisplayAlignments";


export default function App() {
const api = "https://www.dnd5eapi.co/api/alignments/"

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
  <><div className="title-bar">
    <h1>PLEASE WORK</h1>
    </div>
    <div className="display">
      <DisplayAlignments alignments={alignments} />
    </div>
  </>
);
}
