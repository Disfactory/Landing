import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .noShow {
    display: none;
  }

  .question-mark {
    align-items: center;
    background-color: #eaf3bf;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    height: 45px;
    justify-content: center;
    margin-right: 24px;
    width: 45px;
    font-weight: 700;
    color: #697f01;
    font-size: 20px;
  }

  .question-content {
    padding-top: 10px;
  }
`;

const BodyItem = styled.div`
  width: 90%;
  background: #fff9e6;
  border-radius: 8px;
  padding: 22px 30px;
  display: flex;
  margin: 0 auto 15px auto;
  letter-spacing: 0.1ch;

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: 10px;
  }

  a {
    color: #457287;
    border-bottom: 1px solid #457287;
    font-weight: 600;
    padding-bottom: 2px;

    &:hover {
      color: #2b4754;
      border-bottom: 1px solid #2b4754;
      font-weight: 600;
    }
  }

  li {
    font-weight: 800;
    margin: 30px 0px 15px 0px;
  }

  button {
    outline: 1px solid #457287;
    color: #457287;
    background: white;
    padding: 10px 20px;
    display: block;
    margin: 0 0 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;

    &:hover {
      color: white;
      background: #457287;
      cursor: pointer;
    }
  }
`;

export default function QA04({ style }) {
  return (
    <Container>
      <div className={style}>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>請求撤銷照片</h4>
            <div>
              <p>
                如有誤上傳含有個人資料的照片，請記住您回報的工廠編號，並電洽地球公民基金會（02-23920371），請求撤下照片。
              </p>
            </div>
          </div>
        </BodyItem>
      </div>
    </Container>
  );
}
