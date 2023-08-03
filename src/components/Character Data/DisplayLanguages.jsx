import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguagesData } from "../../Thunks/Character Data/fetchLanguagesData";

const DisplayLanguages = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.languages);

    useEffect(() => {
        dispatch(fetchLanguagesData("/api/languages"));
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((language) => (
                            <div key={language.index}>
                                <h3>{language.name}</h3>
                                <p>Typical Speakers: {language.typical_speakers}</p>
                                <p>Script: {language.script}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayLanguages;
