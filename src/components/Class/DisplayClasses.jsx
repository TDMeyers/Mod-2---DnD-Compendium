import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchClassesData,
    fetchClassSpellcasting,
    fetchClassMultiClassing,
} from "../../Thunks/Class/fetchClassesData";

const DisplayClasses = () => {
    const dispatch = useDispatch();
    const { data, spellcasting, multiClassing, loading, error } = useSelector(
        (state) => state.classes
    );

    useEffect(() => {
        dispatch(fetchClassesData("/api/classes"));
    }, [dispatch]);

    const handleFetchClassSpellcasting = (spellcastingUrl) => {
        dispatch(fetchClassSpellcasting(spellcastingUrl));
    };

    const handleFetchClassMultiClassing = (multiClassingUrl) => {
        dispatch(fetchClassMultiClassing(multiClassingUrl));
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
                        data.map((classItem) => (
                            <div key={classItem.index}>
                                <h3>{classItem.name}</h3>
                                <button
                                    onClick={() =>
                                        handleFetchClassSpellcasting(classItem.spellcasting)
                                    }
                                >
                                    Spellcasting
                                </button>
                                <button
                                    onClick={() =>
                                        handleFetchClassMultiClassing(classItem.multiClassing)
                                    }
                                >
                                    Multi-Classing
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {spellcasting && (
                        <>
                            <h4>Spellcasting:</h4>
                            <p>Information about spellcasting</p>
                            {/* Render spellcasting data here */}
                        </>
                    )}

                    {multiClassing && (
                        <>
                            <h4>Multi-Classing:</h4>
                            <p>Information about multi-classing</p>
                            {/* Render multi-classing data here */}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayClasses;
