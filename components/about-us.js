import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 20px 5px 50px;
  text-align: justify;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.7;
    letter-spacing: 0.855px;
    margin-bottom: 40px;
    color: #2b4754;
  }

  ${({ theme }) => theme.breakpoint.md} {
    padding: 20px 45px 50px;
  }
`;

export default function AboutUs() {
  return (
    <AboutUsContainer>
      <p>
        地球公民是一個本土環保非營利組織，主要以制度改革作為方式，希望環境與世代正義能成為這座島嶼上被珍視的價值。近二十年來促成不少友善環境的法案誕生，組織名中有「地球」也有「公民」，因為深信公民參與是守護環境的基礎。
      </p>

      <p>
        開源社群是一處讓無限可能發生的交際場合，開源譯自 Open
        Source，不僅說明技術上的開放原始碼，也代表透明、參與的精神。以g0v台灣零時政府為例，擁抱開源的人們在此相遇後交流專長與觀點，嘗試以科技解決公共議題。
      </p>

      <p>
        地球公民與開源社群一起面對台灣農地工廠的難題，從 2019.07
        開始定期聚會，當社群活力遇上組織任務，新的協作模式與不同以往的政治影響力在這裡萌發。「一個人做夢，就只是夢；一群人一起做夢，就是真實。」A
        dream you dream alone is only a dream. A dream you dream together is
        reality.
      </p>

      <p>
        我們是誰？是夢想著用科技工具改變政府的下班族，我們的夢已經成為真實，你的呢？
      </p>
    </AboutUsContainer>
  );
}
