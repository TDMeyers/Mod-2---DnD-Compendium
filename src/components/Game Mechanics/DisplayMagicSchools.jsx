import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMagicSchoolsData, fetchMagicSchoolData } from "../../Thunks/Game Mechanics/fetchMagicSchoolsData";

const DisplayMagicSchools = () => {
    const dispatch = useDispatch();
    const { data, selectedMagicSchool, loading, error } = useSelector(
        (state) => state.magicSchools
    );

    useEffect(() => {
        dispatch(fetchMagicSchoolsData());
    }, [dispatch]);

    const handleFetchWithMagicSchool = (magicSchoolIndex) => {
        dispatch(fetchMagicSchoolData(magicSchoolIndex));
    };

    return (
        <div>
            <h2>Magic Schools:</h2>
            {loading ? (
                <p>Loading magic schools...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((magicSchool) => (
                            <button
                                key={magicSchool.index}
                                onClick={() => handleFetchWithMagicSchool(magicSchool.index)}
                            >
                                {magicSchool.name}
                            </button>
                        ))
                    ) : (
                        <p>No magic school data available</p>
                    )}

                    {selectedMagicSchool && (
                        <>
                            <h3>{selectedMagicSchool.name}</h3>
                            <p>Description: {selectedMagicSchool.desc}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayMagicSchools;
