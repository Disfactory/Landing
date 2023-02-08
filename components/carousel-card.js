import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: justify;
  line-height: 1.5;

  > p {
    margin-bottom: 10px;
  }
`;

const FigureBox = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 16px;

  .avatar {
    width: 120px;
    height: 120px;
    background: #d9d9d9;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

export default function SwiperCard() {
  return (
    <Card>
      <FigureBox>
        <div className='avatar'></div>
        <p>林口陳先生</p>
      </FigureBox>
      <p>哇！你們好棒！我家附近的違章工廠真的被斷水斷電了！</p>
      <p>
        至2022，已經促使全台837見農地違章鐵皮屋，100%被查處、勒令停工或開罰。
      </p>
    </Card>
  );
}
