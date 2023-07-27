export default function DisplayAlignments({ alignments }) {
    return (
      <>
        {alignments.map((alignment, index) => (
          <div
            className="card"
            key={index}
          >
            <h3>{alignment.name}</h3>
            <p>{alignment.url}</p>
          </div>
        ))}
      </>
    );
  }
  