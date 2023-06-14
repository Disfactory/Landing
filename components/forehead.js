import React from 'react';
import styled from 'styled-components';
import { ForeheadInfo } from '../constants/forehead';

const Container = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
  padding: 130px 30px 20px 30px;
  overflow: hidden;

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 10px 20px 10px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    padding: 80px 10px 20px 10px;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 70px;

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
    margin-bottom: 0px;

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

  .intro {
    margin-bottom: 30px;

    &:nth-child(even) {
      flex-direction: row;
    }

    img {
      margin: 0 auto 15px auto;
      width: 180px;
      display: block;
    }

    ${({ theme }) => theme.breakpoint.sm} {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;

      img {
        margin: 0 20px 15px 20px;
        width: 120px;
      }
    }

    ${({ theme }) => theme.breakpoint.md} {
      img {
        margin: 0 10px 0 10px;
      }
    }

    ${({ theme }) => theme.breakpoint.lg} {
      img {
        width: 180px;
      }
    }
  }

  ${({ theme }) => theme.breakpoint.md} {
    padding: 0px 15px;
    width: 70%;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    font-size: 18px;
  }
`;

const foreheadItems = ForeheadInfo.map((foreheadItem) => {
  return (
    <div key={foreheadItem.id} className='intro'>
      <img src={`/images/${foreheadItem.image}`}></img>
      <p key={foreheadItem.id}>{foreheadItem.paragraph}</p>
    </div>
  );
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
