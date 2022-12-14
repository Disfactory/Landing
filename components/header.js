import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.div`
  background: #e5f3f3;
  height: 356px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 59px;
    text-align: center;
    color: #2b4754;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    font-size: 26px;
    line-height: 38px;
    color: #2b4754;
    margin-bottom: 15px;
  }
  .bg-left {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  .bg-right {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    background: #cde9e4;
    border: 2px solid #2b4754;
    border-radius: 55px;
    padding: 12px 30px;
    color: #2b4754;
    margin: auto 10px;

    &:hover {
      background: #107393;
      color: #ffffff;
    }
  }
`;

const HeaderInfo = styled.div`
  z-index: 100;
`;
export default function Header({ title = '', subtitle = '' }) {
  return (
    <HeaderContainer>
      <img src='/images/forehead-bg-left.svg' className='bg-left' />
      <img src='/images/forehead-bg-right.svg' className='bg-right' />
      <HeaderInfo>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <ButtonGroup>
          <a
            href='https://disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#map=14.00/120.48504632216294/24.088258816482295'
            target='_blank'
          >
            拍照回報
          </a>
          <a
            href='https://spot.disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#/'
            target='_blank'
          >
            鍵盤參與
          </a>
        </ButtonGroup>
      </HeaderInfo>
    </HeaderContainer>
  );
}
