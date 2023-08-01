import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRuleData, fetchRuleSectionData } from "../../Store/Thunks/Rules/fetchRulesData";

const DisplayRules = () => {
    const dispatch = useDispatch();
    const { selectedRule, selectedRuleSection, loading, error } = useSelector(
        (state) => state.rules
    );

    useEffect(() => {
        dispatch(fetchRuleData("/api/rules"));
    }, [dispatch])

    const handleFetchWithRuleSection = (sectionIndex) => {
        // Dispatch an action to fetch rule section details with the given sectionIndex
        dispatch(fetchRuleSectionData(sectionIndex));
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {selectedRule && selectedRule.length > 0 ? (
                        selectedRule.map((rule) => (
                            <button
                                key={rule.index}
                                onClick={() => handleFetchWithRuleSection(rule.url)}
                            >
                                {rule.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedRuleSection && (
                        <>
                            <h2>{selectedRuleSection.name}</h2>
                            <p>Abbreviation: {selectedRuleSection.abbreviation}</p>
                            <p>Description: {selectedRuleSection.description}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayRules;