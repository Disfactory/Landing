import React from "react";
import ScratchCard from "react-scratchcard";

import cardImage from "./imgs/01.png";
import cardImage2 from "./imgs/02.png";
import './scratch.css';

const settings = {
  width: 400, 
  height: 300,
  image: cardImage,
  finishPercent: 100, //這邊是完成比率
  // onComplete: () => console.log("The card is now clear!")
};
const ScratchCardComponent = () => (
  <ScratchCard {...settings}>
    <img src={cardImage2 } width="400" height="300"></img>
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