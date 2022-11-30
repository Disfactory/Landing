import React from 'react';
import styled from 'styled-components';

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
  width: 300px;
  height: 240px;
  background: #eaf3bf;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

const infoList = [
  {
    id: '01',
    title: '公民（就是你！）',
    description: '在回報系統上標記違章工廠 遊玩大家來找廠',
  },
  {
    id: '02',
    title: '地球公民基金會',
    description:
      '利用空拍圖、土地使用分區確認工廠是否在農地上違規生產、違規增建 製作公文寄送給地方政府',
  },
  {
    id: '03',
    title: '地方政府',
    description:
      '到現場檢查違規實情 依法進行斷水斷電、勒令停工等處置 遊玩大家來找廠',
  },
];

const infoLists = infoList.map((item) => {
  return (
    <InfoList key={item.id}>
      <p>{item.title}</p>
      <span>{item.description}</span>
    </InfoList>
  );
});

const stepInfo = ['充實通報成果！', '與政府溝通的依據！', '請想第三個'];
const stepLists = stepInfo.map((item, index) => {
  return <StepList key={index}>{item}</StepList>;
});

export default function InfoUse() {
  return (
    <InfoContainer>
      <div className='info-list-group'>{infoLists}</div>
      <div className='step-list-group'>{stepLists}</div>
    </InfoContainer>
  );
}
