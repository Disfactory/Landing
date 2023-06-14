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
    font-size: 28px;
    line-height: 59px;
    text-align: center;
    color: #2b4754;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    color: #2b4754;
    margin-bottom: 15px;
  }

  .bg-camera {
    width: 100px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 100;

    @media screen and (min-width: 720px) {
      width: 140px;
    }

    ${({ theme }) => theme.breakpoint.xl} {
      width: 170px;
    }
  }

  .bg-mobile-light {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 85%;
    max-width: 300px;
    display: block;

    @media screen and (min-width: 420px) {
      display: none;
    }
  }

  .bg-laptop-light {
    display: none;

    @media screen and (min-width: 420px) and (max-width: 520px) {
      position: absolute;
      top: 0px;
      right: 0px;
      height: 90%;
      display: block;
    }
  }

  .bg-tablet-light {
    display: none;

    @media screen and (min-width: 520px) and (max-width: 768px) {
      position: absolute;
      top: 0px;
      right: 0px;
      height: 85%;
      display: block;
    }
  }

  .bg-desktop-light {
    display: none;

    ${({ theme }) => theme.breakpoint.md} {
      position: absolute;
      top: 0px;
      right: 0px;
      height: 85%;
      display: block;
      transform: rotate(-8deg);
    }

    ${({ theme }) => theme.breakpoint.xl} {
      transform: rotate(0deg);
      height: 110%;
      left: 50px;
    }
  }

  /* 建築物 */
  .bg-building {
    width: 90%;
    position: absolute;
    right: 0px;
    bottom: 0px;
    max-width: 500px;
  }

  ${({ theme }) => theme.breakpoint.sm} {
    h1 {
      font-weight: 600;
      font-size: 42px;
    }

    p {
      font-weight: 500;
      font-size: 26px;
    }
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
      <img src='/images/camera.svg' className='bg-camera' />
      <img src='/images/mobile-camera-light.svg' className='bg-mobile-light' />
      <img src='/images/laptop-camera-light.svg' className='bg-laptop-light' />
      <img src='/images/tablet-camera-light.svg' className='bg-tablet-light' />
      <img
        src='/images/desktop-camera-light.svg'
        className='bg-desktop-light'
      />
      <img src='/images/forehead-bg-right.svg' className='bg-building' />
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
