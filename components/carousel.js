import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Swiper React components & Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  position: relative;

  .swiperWrap {
    padding: 0px 100px 50px 100px;
    position: relative;
  }

  .swiperItem {
    height: 240px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    outline: 1px solid red;
    min-width: 280px;
  }

  .swiperPrev {
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

  .swiperNext {
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

export default function Carousel() {
  return (
    // <SwiperContainer>
    //   <p>測試用</p>
    //   {/* <Swiper
    //     slidesPerView={3}
    //     spaceBetween={40}
    //     slidesPerGroup={3}
    //     loop={true}
    //     loopFillGroupWithBlank={true}
    //     modules={[Navigation]}
    //     className='swiperWrap'
    //     navigation={{
    //       prevEl: '.swiperPrev',
    //       nextEl: '.swiperNext',
    //     }}
    //   >
    //     <SwiperSlide className='swiperItem'>Slide 1</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 2</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 3</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 4</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 5</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 6</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 7</SwiperSlide>
    //     <SwiperSlide className='swiperItem'>Slide 8</SwiperSlide>

    //     <div className='swiperPrev'>
    //       <ArrowLeft />
    //     </div>
    //     <div className='swiperNext'>
    //       <ArrowRight />
    //     </div>
    //   </Swiper> */}
    // </SwiperContainer>

    <>
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
          <SwiperSlide className='swiperItem'>Slide 9</SwiperSlide>
          <div className='swiperPrev'>
            <img src='/images/icons/arrow_left.svg' alt='arrow_left' />
          </div>
          <div className='swiperNext'>
            <img src='/images/icons/arrow_right.svg' alt='arrow_right' />
          </div>
        </Swiper>
      </SwiperContainer>
    </>
  );
}
