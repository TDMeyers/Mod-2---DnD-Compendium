import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchFeatsData,
    fetchFeatData,
} from "../../Thunks/FeatsAndFeatures/fetchFeatsData";

const DisplayFeats = () => {
    const dispatch = useDispatch();
    const { data, selectedFeat, loading, error } = useSelector(
        (state) => state.feats
    );

    useEffect(() => {
        dispatch(fetchFeatsData());
    }, [dispatch]);

    const handleFetchWithFeat = (featIndex) => {
        dispatch(fetchFeatData(featIndex));
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
                        data.map((feat) => (
                            <button
                                key={feat.index}
                                onClick={() => handleFetchWithFeat(feat.index)}
                            >
                                {feat.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedFeat && (
                        <>
                            <h3>{selectedFeat.name}</h3>
                            <p>Description: {selectedFeat.description}</p>
                            {/* Render other feat data here */}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayFeats;
