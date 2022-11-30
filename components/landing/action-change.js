import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ListContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: auto;
  text-align: center;

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

const Sources = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  text-align: right;
  letter-spacing: 0.855px;
  color: #979797;
`;

// TODO: 為何有些可以直接辨識檔案為js?
const dataList = [
  {
    id: 1,
    image: '/images/action1.svg',
    amount: '513',
    notion: '累積回報人次',
  },
  {
    id: 2,
    image: '/images/action2.svg',
    amount: '9999',
    notion: '累積申訴公文',
  },
  {
    id: 3,
    image: '/images/action3.svg',
    amount: '888',
    notion: '間被裁罰工廠',
  },
];

const actionList = dataList.map((item) => {
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
    <ListContainer>
      <ListWrap>{actionList}</ListWrap>
      <p>
        資料來源｜總工廠數：農委會農業及農地資源盤查結果；檢舉數、參與人次：本回報系統
      </p>
    </ListContainer>
  );
}
