import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSpellsData,
    fetchSpellData,
} from "../../Thunks/Spells/fetchSpellsData";

const DisplaySpells = () => {
    const dispatch = useDispatch();
    const { data, selectedSpell, loading, error } = useSelector(
        (state) => state.spells
    );

    useEffect(() => {
        dispatch(fetchSpellsData());
    }, [dispatch]);

    const handleFetchWithSpell = (spellIndex) => {
        dispatch(fetchSpellData(spellIndex));
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
                        data.map((spell) => (
                            <button
                                key={spell.index}
                                onClick={() => handleFetchWithSpell(spell.index)}
                            >
                                {spell.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedSpell && (
                        <>
                            <h3>{selectedSpell.name}</h3>
                            <p>Description: {selectedSpell.description}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplaySpells;
