import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProficienciesData } from "../../Thunks/Character Data/fetchProficienciesData";

const DisplayProficiencies = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.proficiencies);

    useEffect(() => {
        dispatch(fetchProficienciesData("/api/proficiencies"));
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
                        data.map((proficiency) => (
                            <div key={proficiency.index}>
                                <h3>{proficiency.name}</h3>
                                <p>Type: {proficiency.type}</p>
                                <p>Description: {proficiency.desc}</p>
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

export default DisplayProficiencies;
