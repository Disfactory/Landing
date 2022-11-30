import React from 'react';
import styled from 'styled-components';

// Import Swiper React components & Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

//icons
import ArrowLeft from '../icons/arrow-left';
import ArrowRight from '../icons/arrow-right';

const SwiperContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  position: relative;

  .swiperWrap {
    padding: 0px 100px 50px 100px;
    position: relative;
  }

  .swiper-item {
    height: 240px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  .swiper-prev {
    cursor: pointer;
    z-index: 100;
    margin-top: 0px;
    position: absolute;
    top: 50%;
    left: 0px;
    width: 70px;
    height: 100%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: left;
    background: white;
  }

  .swiper-next {
    width: 70px;
    height: 100%;
    position: absolute;
    z-index: 100;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;
    background: white;
  }
`;

export default function SwiperCarousel() {
  return (
    <SwiperContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Navigation]}
        className='swiperWrap'
        navigation={{
          prevEl: '.swiperPrev',
          nextEl: '.swiperNext',
        }}
      >
        <SwiperSlide className='swiperItem'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 5</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 6</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 7</SwiperSlide>
        <SwiperSlide className='swiperItem'>Slide 8</SwiperSlide>

        <div className='swiperPrev'>
          <ArrowLeft />
        </div>
        <div className='swiperNext'>
          <ArrowRight />
        </div>
      </Swiper>
    </SwiperContainer>
  );
}
