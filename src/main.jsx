import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Store/store";
import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

function displaySkillDetails(skill) {
  const popupContainer = document.getElementById('popup-container');
  const popupContent = document.getElementById('popup-content');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

  popupTitle.textContent = skill.name;
  popupDescription.textContent = skill.desc[0];

  // Position the popup next to the button that was clicked
  popupContainer.style.top = `${event.clientY}px`;
  popupContainer.style.left = `${event.clientX}px`;
  popupContainer.style.display = 'block';
}

// Function to hide the skill details popup
function hideSkillDetails() {
  const popupContainer = document.getElementById('popup-container');
  popupContainer.style.display = 'none';
}

// Add event listeners for showing and hiding the popup
document.addEventListener('mouseover', function (event) {
  const target = event.target;
  if (target.classList.contains('skill-btn')) {
    displaySkillDetails(target.dataset.skill);
  }
});

document.addEventListener('mouseout', function (event) {
  const relatedTarget = event.relatedTarget;
  if (!relatedTarget || !relatedTarget.classList.contains('skill-btn')) {
    hideSkillDetails();
  }
});