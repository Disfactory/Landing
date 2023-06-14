import React, { useState } from 'react';
import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Container = styled.div`
  .noShow {
    display: none;
  }

  .question-mark {
    display: none;

    ${({ theme }) => theme.breakpoint.sm} {
      display: block;
      align-items: center;
      background-color: #eaf3bf;
      border-radius: 50%;
      display: flex;
      flex-shrink: 0;
      height: 45px;
      justify-content: center;
      margin-right: 24px;
      width: 45px;
      font-weight: 700;
      color: #697f01;
      font-size: 20px;
    }
  }

  .question-content {
    padding-top: 10px;
  }
`;

const BodyItem = styled.div`
  width: 90%;
  background: #fff9e6;
  border-radius: 8px;
  padding: 22px 30px;
  display: flex;
  margin: 0 auto 15px auto;
  letter-spacing: 0.1ch;

  ${({ theme }) => theme.breakpoint.md} {
    margin: 0 auto 15px auto;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 600;
    line-height: 1.5;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: 10px;
  }

  a {
    color: #457287;
    border-bottom: 1px solid #457287;
    font-weight: 600;
    padding-bottom: 2px;
    margin: 0px 1px;

    &:hover {
      color: #2b4754;
      border-bottom: 1px solid #2b4754;
      font-weight: 600;
    }
  }

  button {
    outline: 1px solid #457287;
    color: #457287;
    background: white;
    padding: 10px 20px;
    display: block;
    margin: 20px 0 20px 0;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;

    &:hover {
      color: white;
      background: #457287;
      cursor: pointer;
    }
  }
`;

const AddDataLightBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.showLightBox ? 'flex' : 'none')};
`;

const LightBox = styled.div`
  position: relative;
  width: 70%;
  height: 82%;
  background-color: white;
  border-radius: 20px;
  padding: 20px;

  img {
    max-height: 65vh;
    max-width: 350px;
  }

  .swiper-slide {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #697f01;
  }

  .swiper-pagination {
    font-size: 20px;
    font-weight: 500;
    color: #697f01;
    bottom: auto;
    top: 10px;
  }
`;

const CloseIcon = styled.div`
  width: 100%;
  height: 25px;
  cursor: pointer;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
  user-select: none;

  img {
    width: 25px;
    height: 25px;
  }

  img:hover {
    opacity: 0.6;
  }
`;

export default function QA01({ style }) {
  const [addData, setAddData] = useState(false);
  const [supplyData, setSupplyData] = useState(false);

  const lightBox01 = (
    <AddDataLightBox showLightBox={addData}>
      <LightBox>
        <CloseIcon
          onClick={() => {
            setAddData(false);
          }}
        >
          <img src='/images/qa/close.svg'></img>
        </CloseIcon>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='/images/qa/add-data/add-01.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-02.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-03.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-04.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-05.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-06.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/add-data/add-07.jpg' />
          </SwiperSlide>
        </Swiper>
      </LightBox>
    </AddDataLightBox>
  );

  const lightBox02 = (
    <AddDataLightBox showLightBox={supplyData}>
      <LightBox>
        <CloseIcon
          onClick={() => {
            setSupplyData(false);
          }}
        >
          <img src='/images/qa/close.svg'></img>
        </CloseIcon>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src='/images/qa/supply-data/supply-01.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/supply-data/supply-02.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/supply-data/supply-03.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/qa/supply-data/supply-04.jpeg' />
          </SwiperSlide>
        </Swiper>
      </LightBox>
    </AddDataLightBox>
  );

  return (
    <>
      <Container>
        <div className={style}>
          <BodyItem>
            <div className='question-mark'>Ｑ</div>
            <div className='question-content'>
              <h4>使用教學</h4>
              <div>
                <br />
                <p>
                  前往
                  <a
                    href='https://disfactory.tw/#map=13.33/120.48045837182302/24.082781532625603'
                    target='_blank'
                    rel='noopener'
                  >
                    農地違章工廠回報系統
                  </a>
                  進行回報：
                </p>
                <button
                  onClick={() => {
                    setAddData(true);
                  }}
                >
                  如何新增一筆違章工廠的資料？
                </button>
                <button
                  onClick={() => {
                    setSupplyData(true);
                  }}
                >
                  如何在一筆資料裡補充更多資訊？
                </button>
                <p>
                  如有其他問題，請電洽
                  <a href='https://www.cet-taiwan.org/' target='_blank'>
                    地球公民基金會
                  </a>
                  （02-23920371） 。
                </p>
              </div>
            </div>
          </BodyItem>
          <BodyItem>
            <div className='question-mark'>Ｑ</div>
            <div className='question-content'>
              <h4>不在工廠附近也可以回報嗎？</h4>
              <div>
                <p>是的，即使不在工廠附近，仍然可以透過輸入經緯度來回報。</p>
                <p>
                  按下「我想新增可疑工廠」-「顯示經緯度」-「搜尋經緯度」後就可以輸入該工廠的經緯度，並進入到「新增可疑工廠」的頁面來回報資料
                </p>
              </div>
            </div>
          </BodyItem>
          <BodyItem>
            <div className='question-mark'>Ｑ</div>
            <div className='question-content'>
              <h4>我的回報是否匿名？</h4>
              <div>
                <p>
                  傳統的檢舉需要留下個人資料，且程序複雜。在
                  <a
                    href='https://disfactory.tw/#map=13.33/120.48045837182302/24.082781532625603'
                    target='_blank'
                  >
                    違章工廠回報系統
                  </a>
                  中，民眾可以選擇不填寫真實姓名，或不留下個人資訊，即可回報！
                </p>
                <p>
                  <a
                    href='https://disfactory.tw/#map=13.33/120.48045837182302/24.082781532625603'
                    target='_blank'
                  >
                    違章工廠回報系統
                  </a>
                  會保障報案民眾的個人資訊，不必擔心個人資料被洩露。
                </p>
              </div>
            </div>
          </BodyItem>
        </div>
      </Container>
      {lightBox01}
      {lightBox02}
    </>
  );
}
