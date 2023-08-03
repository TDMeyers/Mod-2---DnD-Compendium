import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDamageTypesData, fetchDamageTypeData } from "../../Store/Thunks/Game Mechanics/fetchDamageTypesData";


const DisplayDamageTypes = () => {
    const dispatch = useDispatch();
    const { data, selectedDamageType, loading, error } = useSelector(
        (state) => state.damageTypes
    );

    useEffect(() => {
        dispatch(fetchDamageTypesData());
    }, [dispatch]);

    const handleFetchWithDamageType = (damageTypeIndex) => {
        dispatch(fetchDamageTypeData(damageTypeIndex));
    };

    return (
        <div>
            <h2>Damage Types:</h2>
            {loading ? (
                <p>Loading damage types...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    {data && data.length > 0 ? (
                        data.map((damageType) => (
                            <button
                                key={damageType.index}
                                onClick={() => handleFetchWithDamageType(damageType.index)}
                            >
                                {damageType.name}
                            </button>
                        ))
                    ) : (
                        <p>No damage type data available</p>
                    )}

                    {selectedDamageType && (
                        <>
                            <h3>{selectedDamageType.name}</h3>
                            <p>Description: {selectedDamageType.desc}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayDamageTypes;
