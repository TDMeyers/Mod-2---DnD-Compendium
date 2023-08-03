import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRuleData, fetchRuleSectionData } from "../../Store/Thunks/Rules/fetchRulesData";

const DisplayRules = () => {
    const dispatch = useDispatch();
    const { selectedRule, selectedRuleSection, loading, error } = useSelector((state) => state.rules);

    useEffect(() => {
        dispatch(fetchRuleData("/api/rules/"));
    }, [dispatch]);

    const handleFetchWithRuleSection = (sectionIndex) => {
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
                            <button key={rule.index} onClick={() => handleFetchWithRuleSection(rule.url)}>
                                {rule.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedRuleSection && (
                        <>
                            {selectedRuleSection.map((nextRule) => (
                                <li><button
                                    key={nextRule.index}
                                    onClick={() => handleFetchWithRuleSection(nextRule.url)}
                                >
                                    {nextRule.name}
                                </button></li>
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayRules;
