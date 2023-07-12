import React from 'react';
import styled from 'styled-components';
import PublicCard from '~/components/carousel-card-public';
import NewsCard from '~/components/carousel-card-news';

// Swiper React components & Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Container = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoint.sm} {
    display: none;
  }
`;

const Cardlist = styled.div`
  min-height: 240px;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 35px 22px 10px 22px;
  margin: 40px auto;
  max-width: 350px;
`;

export default function MobileCarousel({ data = [], type = 'public' }) {
  return (
    <Container>
      {type === 'public' &&
        data.map((item) => {
          return (
            <Cardlist className='swiperItem' key={item.id}>
              <PublicCard data={item} />
            </Cardlist>
          );
        })}

      {type === 'news' &&
        data.map((item) => {
          return (
            <Cardlist className='swiperItem' key={item.id}>
              <NewsCard data={item} />
            </Cardlist>
          );
        })}
    </Container>
  );
}
