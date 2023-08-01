import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchBackgroundsData,
    fetchBackgroundsDetails,
} from "../../Store/Thunks/Character Data/fetchBackgroundsData";

const DisplayBackgrounds = () => {
    const dispatch = useDispatch();
    const { data, selectedBackgrounds, loading, error } = useSelector(
        (state) => state.backgrounds
    );

    useEffect(() => {
        dispatch(fetchBackgroundsData("/api/backgrounds"));
    }, [dispatch]);

    const handleFetchWithBackground = (backgroundUrl) => {
        dispatch(fetchBackgroundsDetails(backgroundUrl));
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
                        data.map((background) => (
                            <button
                                key={background.index}
                                onClick={() => handleFetchWithBackground(background.url)}
                            >
                                {background.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedBackgrounds && (
                        <>
                            <h2>{selectedBackgrounds.name}</h2>

                            <p>Proficiencies: {selectedBackgrounds.starting_proficiencies.map((item) => (
                                <li
                                    key={item.index}
                                >
                                    {item.name}
                                </li>
                            ))}</p>
                            <p>Languages: {selectedBackgrounds.language_options.map((item) => {
                                <li key={item.index}>
                                    
                                </li>
                            }
                            ) } </p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayBackgrounds;