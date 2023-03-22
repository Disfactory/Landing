import React from 'react';
import styled from 'styled-components';
import { HowToUseInfo, HowToUseStepInfo } from '../constants/how-to-use';

const InfoContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 75px 60px 100px;
  outline: 1px solid #000000;

  .info-list-group {
    margin-bottom: 50px;
  }

  .step-list-group {
    margin: auto;
  }

  ${({ theme }) => theme.breakpoint.md} {
    .step-list-group {
      display: flex;
    }
  }
`;

const InfoBox = styled.div`
  padding: 20px 25px;
  background: #eaf3bf;
  border-radius: 18px;
  margin-bottom: 45px;
  max-width: 600px;

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.855px;
    color: #2b4754;
    text-align: left;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.855px;
    color: #000000;
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
  margin: 10px auto;
  padding: 0px 30px;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.855px;
    color: #000000;
    margin-bottom: 30px;
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
  display: flex;
  align-items: center;
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
