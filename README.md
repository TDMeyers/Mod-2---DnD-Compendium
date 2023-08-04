# A D&D Compendium - deployed and hosted at: https://wondrous-crostata-157ac4.netlify.app/ 
[![Netlify Status](https://api.netlify.com/api/v1/badges/d1eeb56e-f20d-472b-991a-856539f74b86/deploy-status)](https://app.netlify.com/sites/wondrous-crostata-157ac4/deploys)
------------------------------------------------------------------
- Project 2 for Activate Work and Per Scholas
------------------------------------------------------------------
----------------- Motivations ------------------------------------

I really enjoy TTRPG's, especially D&D and Pathfinder. Given that there are a few very solid API's available for D&D, I decided to make an encyclopedia type website to display the available information. I picked this format to challenge myself to utilize many of the features available with React. Including and focused on Router and Redux. This website will also be a good chance to expand my CSS styling capabilities. I will be learning how to create pop-up lists and display cards for multiple elements. 

--------------------------- Build Status -------------------------

Added more Material UI styling. Still working on fleshing out full design concept and fixing layered api calls. 

----------------------- Current Bugs/Challenges -------------------

API changes address format frequently as you dig through the data. Does not return much information with single call, expanding call functionality with each click into sub-category. API fetch occasionally fails and triggers blank page that cannot be resolved except for page reload. 
Netlify hosting will not display image on homepage despite localhost importing and linking image correctly. 

---------------------------- Code Style --------------------------

Built using vite.js template, utilizing React for stying with Material UI templates. 
Utilized React for passing functionality and state, will be further expanded to handle varying page calls to the api as format changes. 

--------------------------- Screenshots? ------------------------

Find one linked here, maybe: 


--------------------------- Tech / Framework --------------------


    react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@fontsource/roboto": "^5.0.7",
    "@mui/icons-material": "^5.14.3",
    "@mui/material": "^5.14.3",
    "@mui/styled-engine-sc": "^5.12.0",
    "@reduxjs/toolkit": "^1.9.5",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-router-dom": "^6.14.2",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2",
    "styled-components": "^5.3.11"
  
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"

    
--------------------------- Features -----------------------------

Styled with Material UI
Pop-up card on mouse hover with 

-------------------------- Code Ex: -------------------------------

Snapshot from the DisplayAbilityScoers.jsx
-------------------------------------------------------------------

import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbilityScoresData, fetchAbilityScoresDetails } from "../../Store/Thunks/Character Data/fetchAbilityScoresData";
import { setShowPopup, setPopupContent, setHoveredSkill } from "../../Store/Slices/Site Functions/popupSlice";
import Button from '@mui/material/Button';
import "../../Styles/popup.css"

const DisplayAbilityScores = () => {
    const dispatch = useDispatch();
    const { data, selectedAbilityScores, loading, error } = useSelector(
        (state) => state.abilityScores
    );
    const showPopup = useSelector((state) => state.popup.showPopup);
    const popupContent = useSelector((state) => state.popup.popupContent);

    const handleMouseOver = async (skill) => {
        try {
            // Fetch the skill details using the URL provided in the skill object
            const response = await axios.get(`https://www.dnd5eapi.co${skill.url}`);

            // Get the detailed description from the API response
            const detailedDescription = response.data.desc && response.data.desc[0]
                ? response.data.desc[0]
                : "Detailed description not available";

            // When hovering over a skill button, update the popup content with detailed description
            dispatch(setPopupContent({
                title: skill.name,
                description: detailedDescription,
            }));
            dispatch(setShowPopup(true));
            dispatch(setHoveredSkill(skill));
        } catch (error) {
            console.error("Error fetching skill details:", error);
        }
    };

    const handleMouseOut = () => {
        // When moving the cursor away from the skill button, hide the popup
        dispatch(setShowPopup(false));
    };

    useEffect(() => {
        dispatch(fetchAbilityScoresData("/api/ability-scores"));
    }, [dispatch]);

    const handleFetchWithAbilityScores = (abilityScoreUrl) => {
        dispatch(fetchAbilityScoresDetails(abilityScoreUrl));
    };

    console.log("showPopup:", showPopup);
    console.log("popupContent:", popupContent);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((abilityScore) => (
                            <button
                                variant="contained"
                                key={abilityScore.index}
                                onClick={() => handleFetchWithAbilityScores(abilityScore.url)}
                            >
                                {abilityScore.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedAbilityScores && (
                        <>
                            <h2>{selectedAbilityScores.name}</h2>
                            <p>Full Name: {selectedAbilityScores.full_name}</p>
                            <p>Description: {selectedAbilityScores.desc[0]}</p>
                            <h3>Skills:</h3>
                            <ul>
                                {selectedAbilityScores.skills.map((skill) => (
                                    <li
                                        key={skill.index}
                                        onMouseOver={() => handleMouseOver(skill)}
                                        onMouseOut={handleMouseOut}
                                    >
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Render the popup if showPopup is true */}
                    <div className={`hover-container ${showPopup ? "visible" : ""}`} id="popup-container">
                        <div className="popup-content" id="popup-content">
                            <h3 id="popup-title">{popupContent.title}</h3>
                            <p id="popup-description">{popupContent.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayAbilityScores;

--------------------------------------------------------------------

---------------------- Want to Contribute? -------------------------

Any insight would be greatly appreciated! Pull requests are welcome, current development focus is on finishing the components to reach all data and categories within the API. 

--------------------- Licensing -----------------------------------

This is created under the GNU Affero General Public License v3.0

Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.

----------------------- API's Consumed -----------------------------

(https://www.dnd5eapi.co/)
