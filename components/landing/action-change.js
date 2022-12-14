import React from 'react';
import styled from 'styled-components';
import { ActionChangeInfo } from '../../constants/action-change';

const ListContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  text-align: center;

  a {
    text-decoration: underline;
    color: #979797;
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: 0.855px;
    color: #979797;
    max-width: 70%;
    margin: auto;
  }

  ${({ theme }) => theme.breakpoint.md} {
    text-align: right;

    p {
      max-width: none;
    }
  }
`;

const ListWrap = styled.div`
  width: 100%;
  margin-bottom: 50px;

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ActionList = styled.div`
  width: 300px;
  margin: auto auto 50px auto;
  text-align: center;

  .amount {
    font-weight: 700;
    font-size: 100px;
    line-height: 100%;
    text-align: center;
    color: #fa6b62;
    font-family: 'Noto Sans CJK TC';
    margin: 15px auto;
  }

  > p {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.855px;
    color: #333333;
  }

  ${({ theme }) => theme.breakpoint.md} {
    margin: 0px 20px;
  }
`;

const actionList = ActionChangeInfo.map((item) => {
  return (
    <ActionList key={item.id}>
      <img src={item.image} alt=''></img>
      <h2 className='amount'>{item.amount}</h2>
      <p className='notion'>{item.notion}</p>
    </ActionList>
  );
});

export default function ActionChange() {
  return (
    <ListContainer id='action-change'>
      <ListWrap>{actionList}</ListWrap>
      <p>
        資料來源｜總工廠數：
        <a href='https://map.coa.gov.tw/farmland/survey.html' target='_blank'>
          農委會農業及農地資源盤查結果
        </a>
        ；檢舉數、參與人次：
        <a
          href='https://disfactory.tw/#map=14.00/120.48504632216294/24.088258816482295'
          target='_blank'
        >
          本回報系統
        </a>
      </p>
    </ListContainer>
  );
}
