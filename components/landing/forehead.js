import React from 'react';
import styled from 'styled-components';
import { ForeheadInfo } from '../../constants/forehead';

const Container = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
  padding: 130px 30px 20px 30px;

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 150px;

  .title {
    font-weight: 700;
    ${({ theme }) => theme.fontSize['title-main-md']};
    color: #2b4754;
    margin-bottom: 15px;
  }
  .subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    margin: 0px auto 30px;
    max-width: 270px;
  }

  img {
    position: absolute;
    top: -30%;
    left: 0%;
    width: 80%;
    z-index: -1;
  }
  ${({ theme }) => theme.breakpoint.md} {
    width: 50%;

    img {
      left: -10%;
      top: -110%;
      width: 100%;
    }
  }
`;

const Description = styled.div`
  font-weight: 400;
  ${({ theme }) => theme.fontSize['title-sub-md']};
  color: ${({ theme }) => theme.textColor.gray};
  text-align: left;
  line-height: 1.8;

  p {
    margin-bottom: 80px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    width: 50%;
  }
`;

const foreheadItems = ForeheadInfo.map((foreheadItem) => {
  return <p key={foreheadItem.id}>{foreheadItem.paragraph}</p>;
});

export default function Forehead({ title = '', subtitle = '' }) {
  return (
    <Container id='forehead'>
      <TitleContainer>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
        <div className='forehead-image'>
          <img alt='對的事，再難也要做！' src='/images/do-you-know-bg.svg' />
        </div>
      </TitleContainer>
      <Description>{foreheadItems}</Description>
    </Container>
  );
}
