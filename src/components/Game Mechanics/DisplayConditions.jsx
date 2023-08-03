import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConditionsData, fetchConditionData } from "../../Store/Thunks/Game Mechanics/fetchConditionsData";

const DisplayConditions = () => {
    const dispatch = useDispatch();
    const { data, selectedCondition, loading, error } = useSelector(
        (state) => state.conditions
    );

    useEffect(() => {
        dispatch(fetchConditionsData("/api/conditions"));
    }, [dispatch]);

    const handleFetchWithCondition = (conditionIndex) => {
        dispatch(fetchConditionData(conditionIndex));
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
                        data.map((condition) => (
                            <button
                                key={condition.index}
                                onClick={() => handleFetchWithCondition(condition.index)}
                            >
                                {condition.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedCondition && (
                        <>
                            <h2>{selectedCondition.name}</h2>
                            <p>Description: {selectedCondition.desc}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayConditions;
