import React from "react";
import './styles/carousel.scss';

import arrow_left from './imgs/arrow_left.svg';
import arrow_right from './imgs/arrow_right.svg';

function Carousel () {
    return(
    
      <div className="carousel-wrap">

          <div className="arrow">
            <img src={arrow_left} alt=""></img>
          </div>

          <div className="carousel-list">

            <div className="carousel-infor">
              <div className="carousel-photo"></div>
              <div>
                <p>工廠老闆</p>
                <p>林口 林先生</p>
              </div>
            </div>

            <div className="carousel-word">
              <p>“哇！你們好棒！我家附近的工廠真的被斷水斷電了！”</p>
            </div>

          </div>

          <div className="carousel-list">

            <div className="carousel-infor">
              <div className="carousel-photo"></div>
              <div>
                <p>被困擾的住戶</p>
                <p>東石陳媽媽</p>
              </div>
            </div>

            <div className="carousel-word">
              <p>“以前檢舉都很害怕個資外流被查水表，現在不用擔心了！”</p>
            </div>

          </div>

          <div className="carousel-list">

            <div className="carousel-infor">
              <div className="carousel-photo"></div>
              <div>
                <p>辛苦的公務員</p>
                <p>大安吳先生</p>
              </div>
            </div>

            <div className="carousel-word">
              <p>“現在總算有確切的資訊來源，每次的違章工廠現場勘查都很有效率！”</p>
            </div>

          </div>

          <div className="arrow">
            <img src={arrow_right} alt=""></img>
          </div>

      </div>

    )
}


export default Carousel; 