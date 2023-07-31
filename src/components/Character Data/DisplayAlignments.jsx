import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAlignmentsData,
  fetchAlignmentDetails,
} from "../../Store/Thunks/Character Data/fetchAlignmentsData";

const DisplayAlignments = () => {
  const dispatch = useDispatch();
  const { data, selectedAlignment, loading, error } = useSelector(
    (state) => state.alignments
  );

  useEffect(() => {
    dispatch(fetchAlignmentsData("/api/alignments"));
  }, [dispatch]);

  const handleFetchWithAlignment = (alignmentUrl) => {
    dispatch(fetchAlignmentDetails(alignmentUrl));
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
            data.map((alignment) => (
              <button
                key={alignment.index}
                onClick={() => handleFetchWithAlignment(alignment.url)}
              >
                {alignment.name}
              </button>
            ))
          ) : (
            <p>No data available</p>
          )}

          {selectedAlignment && (
            <>
              <h2>{selectedAlignment.name}</h2>
              <p>Abbreviation: {selectedAlignment.abbreviation}</p>
              <p>Description: {selectedAlignment.description}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayAlignments;
