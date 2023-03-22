import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  text-align: justify;
  line-height: 1.5;
  color: black;
  min-height: 262px;

  img {
    height: 30px;
    margin-bottom: 20px;
    display: block;
  }

  .name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    height: 60px;
  }

  .time {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .intro {
    font-size: 16px;
  }
`;

export default function SwiperCard({ data }) {
  return (
    <Card href={data.link} target='_blank'>
      <img src={`/images/${data.imageName}`}></img>
      <p className='name'>{data.title}</p>
      <p className='time'>{data.time}</p>
      <p className='intro'>{data.desc}</p>
    </Card>
  );
}
