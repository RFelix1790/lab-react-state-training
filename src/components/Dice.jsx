import { useState } from "react";
import empty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [dice, setDice] = useState(dice1);
  const roll = () => {
    setDice(empty);
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6);
      setDice(diceArray[random]);
    }, 1000);
  };
  return (
    <>
      <img
        src={dice}
        alt="dice"
        onClick={roll}
        style={{ width: "100px", height: "auto" }}
      ></img>
    </>
  );
}
export default Dice;
