import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkillsData, fetchSkillDetails } from "../../Thunks/Character Data/fetchSkillsData";

const DisplaySkills = () => {
    const dispatch = useDispatch();
    const { data, selectedSkill, loading, error } = useSelector((state) => state.skills);

    useEffect(() => {
        dispatch(fetchSkillsData());
    }, [dispatch]);

    const handleFetchSkillDetails = (skillIndex) => {
        dispatch(fetchSkillDetails(skillIndex));
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((skill) => (
                            <button
                                key={skill.index}
                                onClick={() => handleFetchSkillDetails(skill.index)}
                            >
                                {skill.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedSkill && (
                        <>
                            <h3>{selectedSkill.name}</h3>
                            <p>Description: {selectedSkill.description}</p>
                            {/* Render other skill data here */}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplaySkills;
