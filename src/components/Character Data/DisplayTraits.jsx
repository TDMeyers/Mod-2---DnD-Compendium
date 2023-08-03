import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraitsData, fetchTraitData } from "../../Store/Thunks/Character Data/fetchTraitsData";

const DisplayTraits = () => {
    const dispatch = useDispatch();
    const { data, selectedTrait, loading, error } = useSelector((state) => state.traits);

    useEffect(() => {
        dispatch(fetchTraitsData("/api/traits/"));
    }, [dispatch]);

    const handleFetchTraitData = (traitIndex) => {
        dispatch(fetchTraitData(traitIndex));
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
                        data.map((trait) => (
                            <button
                                key={trait.index}
                                onClick={() => handleFetchTraitData(trait.index)}
                            >
                                {trait.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedTrait && (
                        <>
                            <h3>{selectedTrait.name}</h3>
                            <p>Description: {selectedTrait.desc}</p>
                            {/* Render other trait data here */}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayTraits;
