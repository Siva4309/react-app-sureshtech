import React, { useState } from "react";
import { Member } from "../../Member";
import "./Memberlist.css";
import Confetti from "react-confetti";
import StyledButton from "../StyledButton/StyledButton";

function Memberlist(props) {
  const { people } = props;
  const [luckperson, setLuckPerson] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  function pickPerson() {
    setLoading(true);
    const randomNumner = Math.floor(Math.random() * people.length);
    console.log(randomNumner);
    const person = people[randomNumner];
    const luckperson = `${person.name} from ${person.city}`;
    setTimeout(function () {
      setLoading(false);
      setLuckPerson(luckperson);
      setShowCelebration(true);
    }, 5000);
  }
  return (
    <>
      {/* <h2>Members</h2> */}
      {showCelebration && <Confetti numberOfPieces={300} />}
      <div class="members-container">
        {people.map(function (member) {
          return <Member name={member.name} city={member.city} />;
        })}
      </div>
      <div className="flex-center">
        {isLoading && <h3>Loading...</h3>}
        <h2>{luckperson}</h2>
        <StyledButton text="Lucky Draw" onClick={pickPerson} />
      </div>
    </>
  );
}

export default Memberlist;
