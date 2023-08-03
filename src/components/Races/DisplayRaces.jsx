import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRacesData,
    fetchRaceSubracesData,
    fetchRaceProficienciesData,
    fetchRaceTraitsData,
} from "../../Store/Thunks/Races/fetchRacesData";

const DisplayRaces = () => {
    const dispatch = useDispatch();
    const { data, subraces, proficiencies, traits, loading, error } = useSelector(
        (state) => state.races
    );

    useEffect(() => {
        dispatch(fetchRacesData());
    }, [dispatch]);

    const handleFetchWithRace = (raceUrl) => {
        dispatch(fetchRaceSubracesData(raceUrl));
        dispatch(fetchRaceProficienciesData(raceUrl));
        dispatch(fetchRaceTraitsData(raceUrl));
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
                        data.map((race) => (
                            <button
                                key={race.index}
                                onClick={() => handleFetchWithRace(race.url)}
                            >
                                {race.name}
                            </button>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}

                    {subraces.length > 0 && (
                        <div>
                            <h3>Subraces:</h3>
                            <ul>
                                {subraces.map((subrace) => (
                                    <li key={subrace.index}>{subrace.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {proficiencies.length > 0 && (
                        <div>
                            <h3>Proficiencies:</h3>
                            <ul>
                                {proficiencies.map((proficiency) => (
                                    <li key={proficiency.index}>{proficiency.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {traits.length > 0 && (
                        <div>
                            <h3>Traits:</h3>
                            <ul>
                                {traits.map((trait) => (
                                    <li key={trait.index}>{trait.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DisplayRaces;
