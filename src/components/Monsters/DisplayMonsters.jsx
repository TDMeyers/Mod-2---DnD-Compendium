import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMonstersData,
    fetchMonsterData,
} from "../../Store/Thunks/Monsters/fetchMonstersData";

const DisplayMonsters = () => {
    const dispatch = useDispatch();
    const { data, selectedMonster, loading, error } = useSelector(
        (state) => state.Monsters
    );

    useEffect(() => {
        dispatch(fetchMonstersData("/api/monsters"));
    }, [dispatch]);

    const handleFetchWithMonster = (monsterIndex) => {
        dispatch(fetchMonsterData(monsterIndex));
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
                        data.map((monster) => (
                            <button
                                key={monster.index}
                                onClick={() => handleFetchWithMonster(monster.url)}
                            >
                                {monster.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {selectedMonster && (
                        <>
                            <h3>{selectedMonster.name}</h3>
                            <p>Abbreviation: {selectedMonster.abbreviation}</p>
                            <p>Type: {selectedMonster.type}</p>
                            <p>Description: {selectedMonster.description}</p>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayMonsters;
