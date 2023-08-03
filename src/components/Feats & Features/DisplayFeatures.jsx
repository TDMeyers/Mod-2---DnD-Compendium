import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchFeaturesData,
    fetchFeatureData,
} from "../../Store/Thunks/FeatsAndFeatures/fetchFeaturesData";

const DisplayFeatures = () => {
    const dispatch = useDispatch();
    const { data, selectedFeature, loading, error } = useSelector(
        (state) => state.features
    );

    useEffect(() => {
        dispatch(fetchFeaturesData("/api/features/"));
    }, [dispatch]);

    const handleFetchWithFeature = (featureIndex) => {
        dispatch(fetchFeatureData(featureIndex));
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
                        data.map((feature) => (
                            <button
                                key={feature.index}
                                onClick={() => handleFetchWithFeature(feature.index)}
                            >
                                {feature.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedFeature && (
                        <>
                            <h3>{selectedFeature.name}</h3>
                            <p>Description: {selectedFeature.description}</p>
                            {/* Render other feature data here */}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayFeatures;
