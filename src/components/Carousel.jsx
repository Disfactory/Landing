import React, { useRef } from "react";
import '../styles/carousel.scss';

import arrow_left from '../imgs/arrow_left.svg';
import arrow_right from '../imgs/arrow_right.svg';

function Carousel () {

  var nowPage = 0 ; 
  // const arrow_right = document.querySelector('.arrow-right')
  // const arrow_left = document.querySelector('.arrow-left')

  const nowPagePlus=()=>{
    nowPage++
    if(nowPage>4){
      nowPage = 4
    }

  }

  const nowPageMinus=()=>{
    nowPage--
    if(nowPage<0){
      nowPage = 0
    }
  }

  const move = () => {
      const carousel_train = document.querySelector('.carousel-train')
      const moveX = (nowPage) * -297 + "px";
      carousel_train.style = `transition: .5s ease ; transform:translateX(${moveX})`;

  }

  
    return(
    
      <div className="carousel-container">

          <div className="carousel-arrow arrow-left">
            <img src={arrow_left} alt=""  onClick={()=>{
                nowPageMinus()
                move()
            }}></img>
          </div>

        <div className="carousel-list-wrap">
          <div className="carousel-train">
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
          </div>
        </div>

          <div className="carousel-arrow arrow-right">
            <img src={arrow_right} alt="" 
              onClick={()=>{
                nowPagePlus()
                move()
            }}></img>
          </div>

      </div>

    )
}


export default Carousel; 