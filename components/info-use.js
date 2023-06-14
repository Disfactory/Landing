import React from 'react';
import styled from 'styled-components';
import { HowToUseInfo, HowToUseStepInfo } from '../constants/how-to-use';

const InfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background: #fffee4;

  .info-list-group {
    margin-bottom: 50px;
  }

  .step-list-group {
    margin: auto;
    padding-bottom: 10px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    width: 90%;
    padding: 45px 25px 100px;

    .step-list-group {
      display: flex;
      padding-bottom: 10px;
      justify-content: center;
    }
  }
`;

const InfoBox = styled.div`
  padding: 20px;
  background: #eaf3bf;
  border-radius: 18px;
  max-width: 600px;
  text-align: left;
  margin: 0px 20px 45px 20px;

  ${({ theme }) => theme.breakpoint.xl} {
    margin: 0px 15px auto 15px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.855px;
    color: #2b4754;
    text-align: center;
    margin-bottom: 10px;

    ${({ theme }) => theme.breakpoint.md} {
      text-align: left;
    }
  }

  span {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.855px;
    color: #000000;
    text-align: left;

    ${({ theme }) => theme.breakpoint.sm} {
      font-size: 20px;
      letter-spacing: 0.5px;
      text-align: left;
      line-height: 33px;
    }
  }
`;

const StepList = styled.div`
  width: 80%;
  max-width: 300px;
  height: 240px;
  background: #eaf3bf;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  padding: 0px 20px;

  ${({ theme }) => theme.breakpoint.md} {
    margin: 10px;
  }

  .title {
    letter-spacing: 0.855px;
    color: #000000;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  .desc {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.14px;
    color: #000000;
    margin: auto;
  }
`;

const InfoList = styled.li`
  display: block;
  list-style: none;
  margin-bottom: 15px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    > div {
      background: #e2ebf4;
    }
  }

  > div:nth-child(odd) {
    background: #e2ebf4;
  }

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    padding: 0px 50px;
  }

  picture {
    margin-bottom: 15px;
    display: inline-block;
  }
`;

const infoLists = HowToUseInfo.map((item) => {
  return (
    <InfoList key={item.id}>
      <picture>
        <img src={`/images/${item.image}`} alt={item.title} />
      </picture>
      <InfoBox className='info-box'>
        <p>{item.title}</p>
        <span>{item.description}</span>
      </InfoBox>
    </InfoList>
  );
});

const stepLists = HowToUseStepInfo.map((item, index) => {
  return (
    <StepList key={index}>
      <div>
        <p className='title'> {item.title}</p>
        <p className='desc'> {item.desc}</p>
      </div>
    </StepList>
  );
});

export default function InfoUse() {
  return (
    <InfoContainer id='info'>
      <div className='info-list-group'>{infoLists}</div>
      <div className='step-list-group'>{stepLists}</div>
    </InfoContainer>
  );
}
