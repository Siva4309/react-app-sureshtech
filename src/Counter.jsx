import { useState } from "react";
import "./counter.css";
import ScoreCard from "./components/scorecard/ScoreCard.jsx";
import ScoreCardOperations from "./components/scoreCardOperations/ScoreCardOperations.jsx";

function Counter(props) {
  const { initialScore } = props;
  let [counter, SetCounter] = useState(initialScore);

  function incrementCounter(value) {
    //counter = counter + value;
    SetCounter((currentValue) => currentValue + value);
  }
  return (
    <div>
      <ScoreCard counter={counter} />
      <ScoreCardOperations incrementScore={incrementCounter} />
    </div>
  );
}

export default Counter;
