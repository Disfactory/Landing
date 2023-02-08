import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '~/components/carousel-card';

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
  margin: auto;
  position: relative;
  max-width: 550px;

  ${({ theme }) => theme.breakpoint.md} {
    max-width: 900px;
  }
  ${({ theme }) => theme.breakpoint.xl} {
    max-width: 1200px;
  }

  .swiperWrap {
    padding: 20px 100px 50px 100px;
    position: relative;
    overflow: hidden;
  }

  .swiperItem {
    min-height: 240px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 35px 22px 10px 22px;

    ${({ theme }) => theme.breakpoint.xl} {
      min-width: 260px;
    }
  }

  .swiperPrev {
    cursor: pointer;
    z-index: 100;
    margin-top: 0px;
    position: absolute;
    top: 50%;
    left: 0px;
    width: 35px;
    height: 100%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: left;
    background: white;

    ${({ theme }) => theme.breakpoint.xl} {
      width: 70px;
    }
  }

  .swiperNext {
    width: 35px;
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

    ${({ theme }) => theme.breakpoint.xl} {
      width: 70px;
    }
  }
`;

export default function Carousel() {
  return (
    <>
      <SwiperContainer>
        <Swiper
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={'auto'}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}
          className='swiperWrap'
          navigation={{
            prevEl: '.swiperPrev',
            nextEl: '.swiperNext',
          }}
        >
          <SwiperSlide className='swiperItem' key={1}>
            <Card />
          </SwiperSlide>
          <SwiperSlide className='swiperItem' key={2}>
            <Card />
          </SwiperSlide>
          <SwiperSlide className='swiperItem' key={3}>
            <Card />
          </SwiperSlide>
          <SwiperSlide className='swiperItem' key={4}>
            <Card />
          </SwiperSlide>
          <SwiperSlide className='swiperItem' key={5}>
            <Card />
          </SwiperSlide>
          <SwiperSlide className='swiperItem' key={6}>
            <Card />
          </SwiperSlide>

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
