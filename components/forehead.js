import React from 'react';
import styled from 'styled-components';
import { ForeheadInfo } from '../constants/forehead';

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
  margin-bottom: 80px;

  .title {
    max-width: 200px;
    ${({ theme }) => theme.fontSize['title-main-sm']};
    color: ${({ theme }) => theme.textColor.darkGreen};
    margin: auto;
    margin-bottom: 15px;
  }

  .subtitle {
    ${({ theme }) => theme.fontSize['subtitle-sm']};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textColor.gray};
    margin: 0px auto 30px;
    max-width: 270px;
  }

  ${({ theme }) => theme.breakpoint.sm} {
    margin-bottom: 180px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    width: 50%;

    .title {
      max-width: none;
      ${({ theme }) => theme.fontSize['title-main-md']};
    }
  }

  ${({ theme }) => theme.breakpoint.xl} {
    width: 50%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: -45%;
  left: 0%;
  width: 80%;
  z-index: -1;
  min-width: 300px;
  max-width: 350px;

  ${({ theme }) => theme.breakpoint.sm} {
    top: -55%;
    left: 8%;
    width: 80%;
    min-width: 300px;
    max-width: 450px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    left: -10%;
    top: -45%;
    width: 100%;
    max-width: 500px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    top: -75%;
    max-width: none;
  }
`;

const Description = styled.div`
  ${({ theme }) => theme.fontSize['normal']};
  color: ${({ theme }) => theme.textColor.gray};
  text-align: left;
  line-height: 1.8;

  p {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    width: 50%;

    p {
      margin-bottom: 80px;
    }
  }

  ${({ theme }) => theme.breakpoint.xl} {
    ${({ theme }) => theme.fontSize['normal-xl']};
  }
`;

const foreheadItems = ForeheadInfo.map((foreheadItem) => {
  return <p key={foreheadItem.id}>{foreheadItem.paragraph}</p>;
});

export default function Forehead({ title = '', subtitle = '' }) {
  return (
    <Container id='forehead'>
      <TitleContainer>
        <h2 className='title'>{title}</h2>
        <div className='subtitle'>{subtitle}</div>
        <Image alt='對的事，再難也要做！' src='/images/do-you-know-bg.svg' />
      </TitleContainer>
      <Description>{foreheadItems}</Description>
    </Container>
  );
}
