import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbilityScoresData, fetchAbilityScoresDetails } from "../../Store/Thunks/Character Data/fetchAbilityScoresData";
import { setShowPopup, setPopupContent, setHoveredSkill } from "../../Store/Slices/Site Functions/popupSlice";

const DisplayAbilityScores = () => {
    const dispatch = useDispatch();
    const { data, selectedAbilityScores, loading, error } = useSelector(
        (state) => state.abilityScores
    );

    const handleMouseOver = async (skill) => {
        try {
            // Fetch the skill details using the URL provided in the skill object
            const response = await axios.get(`https://www.dnd5eapi.co${skill.url}`);


            // Get the detailed description from the API response
            const detailedDescription = response.data.desc && response.data.desc[0]
                ? response.data.desc[0]
                : "Detailed description not available";

            // When hovering over a skill button, update the popup content with detailed description
            setPopupContent({
                title: skill.name,
                description: detailedDescription,
            });
            setShowPopup(true);
            setHoveredSkill(skill);
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

    const showPopup = useSelector((state) => state.popup.showPopup);

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
                    {showPopup && (
                        <div>
                            <h2>{popupContent.title}</h2>
                            <p>{popupContent.description}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayAbilityScores;
