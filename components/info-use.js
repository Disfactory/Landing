import React from 'react';
import styled from 'styled-components';
import { HowToUseInfo, HowToUseStepInfo } from '../constants/how-to-use';

const InfoContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 75px 60px 180px;
  outline: 1px solid #000000;

  .step-list-group {
    margin: auto;
  }

  ${({ theme }) => theme.breakpoint.md} {
    .step-list-group {
      display: flex;
    }
  }
`;

const InfoList = styled.div`
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
`;

const infoLists = HowToUseInfo.map((item) => {
  return (
    <InfoList key={item.id}>
      <p>{item.title}</p>
      <span>{item.description}</span>
    </InfoList>
  );
});

const stepLists = HowToUseStepInfo.map((item, index) => {
  return <StepList key={index}>{item}</StepList>;
});

export default function InfoUse() {
  return (
    <InfoContainer id='info'>
      <div className='info-list-group'>{infoLists}</div>
      <div className='step-list-group'>{stepLists}</div>
    </InfoContainer>
  );
}
