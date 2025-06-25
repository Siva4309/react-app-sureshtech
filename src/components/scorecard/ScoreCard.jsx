import "./score.css";

function ScoreCard(props) {
  const { counter } = props;
  return (
    <div className="scoreboard-container flex-center">
      <h1 className="score">{counter}</h1>
    </div>
  );
}

export default ScoreCard;
