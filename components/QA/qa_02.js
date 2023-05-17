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

export default function QA02({ style }) {
  return (
    <Container>
      <div className={style}>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>回報一定要有照片嗎？</h4>
            <div>
              <p>
                是的，回報工廠問題時必須提供相關照片，因為這樣可以更有效地向地方政府提出證據，以證明該地確實有違章工廠。
              </p>
              <p>
                照片可以是任何顯示工廠和問題的圖像，例如工廠外觀、工廠排放汙染物及棄置廢棄物等等。
              </p>
            </div>
          </div>
        </BodyItem>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>使用遇到問題怎麼辦？</h4>
            <div>
              <p>
                如果您遇到網站使用疑問、網站出現故障情形，請電洽地球公民基金會（02-23920371），或進入
                <a
                  href='https://airtable.com/shrUraKakZRpH52DO'
                  target='_blank'
                  rel='noopener'
                >
                  表單
                </a>
                填寫您的問題，我們會盡快協助處理。
              </p>
              <p>
                按下「我想新增可疑工廠」-「顯示經緯度」-「搜尋經緯度」後就可以輸入該工廠的經緯度，並進入到「新增可疑工廠」的頁面來回報資料
              </p>
            </div>
          </div>
        </BodyItem>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>我的回報是否匿名？</h4>
            <div>
              <p>
                傳統的檢舉需要留下個人資料，且程序複雜。在 Disfactory.tw
                中，民眾可以選擇不填寫真實姓名，或不留下個人資訊，即可回報！
              </p>
              <p>
                Disfactory.tw 會保障報案民眾的個人資訊，不必擔心個人資料被洩露。
              </p>
            </div>
          </div>
        </BodyItem>
      </div>
    </Container>
  );
}
