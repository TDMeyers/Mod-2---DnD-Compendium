import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguagesData, fetchLanguageDetails } from "../../Store/Thunks/Character Data/fetchLanguagesData";

const DisplayLanguages = () => {
    const dispatch = useDispatch();
    const { data, selectedLanguage, loading, error } = useSelector((state) => state.languages);

    useEffect(() => {
        dispatch(fetchLanguagesData("/api/languages"));
    }, [dispatch]);

    const handleFetchLanguageDetails = (languageURL) => {
        dispatch(fetchLanguageDetails(languageURL));
    }

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
                            <button key={language.index}
                                onClick={() => handleFetchLanguageDetails(language.url)}
                            >
                                {language.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedLanguage && (
                        <>
                            <h3>{selectedLanguage.type}</h3>
                            <p>{selectedLanguage.script}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayLanguages;
