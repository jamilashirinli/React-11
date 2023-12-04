import React, { useState } from 'react';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import fourth from './fourth.jpg';
import fifth from './fifth.jpg';
import sixth from './sixth.jpg';

const Dice = () => {
  const [diceFirst, setDiceFirst] = useState(first);
  const changeDice = () => {
    const diceArr = [first, second, third, fourth, fifth, sixth];
    setDiceFirst(diceArr[Math.floor(Math.random() * diceArr.length)]);
  };
  return (
    <div>
      <img src={diceFirst} alt="" onClick={changeDice} className="dice"/>
      
    </div>
  );
};

export default Dice;