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

export default function QA03({ style }) {
  return (
    <Container>
      <div className={style}>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>回報就會變檢舉嗎？</h4>
            <div>
              <p>
                Disfactory.tw
                是協助民眾回報違章工廠的平台，上傳回報並不代表已經完成舉報程序。
              </p>
              <p>
                我們會對回報案進行整理，並會優先處理新增建（2016.05.20後新增建的工廠）與高污染工廠，寄出檢舉公文給地方縣市政府。
              </p>
            </div>
          </div>
        </BodyItem>
        <BodyItem>
          <div className='question-mark'>Ｑ</div>
          <div className='question-content'>
            <h4>我想要參與更多</h4>
            <div>
              <li>想當地球公民的志工！</li>
              <p>
                地球公民收到回報資訊後，會正式寄送舉報公文至縣市政府，並電話追蹤公文的進度，以確保大家費力回報的農地違章工廠得以拆除。持續分享相關資訊，讓更多人知道這個系統就可以讓政府不敢怠慢。歡迎追蹤地球公民基金會的
                <a
                  href='https://www.facebook.com/CitizenoftheEarth'
                  target='_blank'
                  rel='noopener'
                >
                  臉書
                </a>
                、
                <a
                  href='https://www.instagram.com/cettw/'
                  target='_blank'
                  rel='noopener'
                >
                  IG
                </a>
                。
              </p>
              <p>
                另外，我們也需要志工們一起協助整理文件、檢查公文、電話追蹤與其他行動，歡迎您一起
                <a
                  href='https://www.cet-taiwan.org/civicrm/profile/create?gid=11&reset=1'
                  target='_blank'
                  rel='noopener'
                >
                  加入監督行列
                </a>
                。
              </p>
              <li>想加入下班族的行列！</li>
              <p>
                如果想加入我們的行列，一起探索社群協力的可能性，歡迎進入此
                <a
                  href='https://g0v.hackmd.io/Lk9KiihIS7qQU6iZUTptWQ'
                  target='_blank'
                  rel='noopener'
                >
                  協作入口
                </a>
                ，了解更多。
              </p>
            </div>
          </div>
        </BodyItem>
      </div>
    </Container>
  );
}
