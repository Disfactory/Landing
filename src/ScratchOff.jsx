import React from "react";
import ScratchCard from "react-scratchcard";

import cardImage from "./imgs/scratch_front.svg";
import cardImage2 from "./imgs/scratch_back.svg";
import './styles/scratch.css';

const settings = {
  width: 400, 
  height: 300,
  image: cardImage,
  finishPercent: 100, //complete percent
  // onComplete: () => console.log("The card is now clear!")
};
const ScratchCardComponent = () => (
  <ScratchCard {...settings}>
    <img src={cardImage2 } width="400" height="300" alt=""></img>
  </ScratchCard>
);

class Scratchcard extends React.Component {
  render() {
    return (
      <div>
        <ScratchCardComponent />
      </div>
    );
  }
}
export default Scratchcard;