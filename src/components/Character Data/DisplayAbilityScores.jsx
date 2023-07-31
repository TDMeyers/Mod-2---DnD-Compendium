import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbilityScoresData, fetchAbilityScoresDetails } from "../../Store/Thunks/Character Data/fetchAbilityScoresData";
import { setShowPopup, setPopupContent } from "../../Store/Slices/Site Functions/popupSlice";

const DisplayAbilityScores = () => {
    const dispatch = useDispatch();
    const { data, selectedAbilityScores, loading, error } = useSelector(
        (state) => state.abilityScores
    );

    const handleMouseOver = (skill) => {
        // When hovering over a skill button, update the popup content and show the popup
        dispatch(setPopupContent({ title: skill.name, description: skill.desc[0] }));
        dispatch(setShowPopup(true));
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
