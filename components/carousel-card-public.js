import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: justify;
  line-height: 1.5;

  > p {
    margin-bottom: 10px;
  }

  .name {
    color: #2b4754;
    font-weight: 900;
    font-size: 22px;
  }

  .intro {
    color: #858585;
    font-weight: 700;
    font-size: 14px;
  }
`;

const FigureBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;

  /* .avatar {
    width: 120px;
    height: 120px;
    background: #d9d9d9;
    border-radius: 10px;
    margin-right: 10px;
  } */
`;

export default function SwiperCard({ data }) {
  return (
    <Card>
      <FigureBox>
        <p className='name'>{data.name}</p>
      </FigureBox>
      <p className='quote'>{data.quote}</p>
      <p className='intro'>{data.intro}</p>
    </Card>
  );
}
