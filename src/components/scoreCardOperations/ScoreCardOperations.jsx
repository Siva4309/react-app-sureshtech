import "./scoreCardOperations.css";

function ScoreCardOperations(props) {
  const { incrementScore } = props;
  return (
    <div className="flex-center">
      <button className="score-button" onClick={() => incrementScore(1)}>
        +1
      </button>
      <button className="score-button" onClick={() => incrementScore(5)}>
        +5
      </button>
      <button className="score-button" onClick={() => incrementScore(-5)}>
        -5
      </button>
    </div>
  );
}

export default ScoreCardOperations;
