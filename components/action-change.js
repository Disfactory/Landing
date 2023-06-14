import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  overflow: hidden;
  max-width: 900px;
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
  margin: 0px auto;
  overflow: hidden;
  gap: 20px;

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ActionList = styled.div`
  width: 100%;
  max-width: 250px;
  text-align: center;
  margin: 10px auto 60px;

  .amount {
    font-weight: 700;
    font-size: 100px;
    line-height: 100%;
    text-align: center;
    color: #fa6b62;
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

  /* ${({ theme }) => theme.breakpoint.md} {
    margin: 0px 20px;
  } */
`;

export default function ActionChange() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/action-change')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <ListContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListWrap>
          <ActionList>
            <img src='/images/action1.svg' alt=''></img>
            {data && <h2 className='amount'>{data.report_records}</h2>}
            <p className='notion'>累積回報人次</p>
          </ActionList>
          <ActionList>
            <img src='/images/action2.svg' alt=''></img>
            {data && <h2 className='amount'>{data.documents}</h2>}
            <p className='notion'>累積申訴公文</p>
          </ActionList>
          <ActionList>
            <img src='/images/action3.svg' alt=''></img>
            {data && <h2 className='amount'>{data.factories}</h2>}
            <p className='notion'>間被裁罰工廠</p>
          </ActionList>
        </ListWrap>
      )}
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
