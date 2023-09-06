import styled from 'styled-components';
import React, { useState } from 'react';
import Contributor from '~/components/contributor';

const ContactInfo = styled.div`
  width: 100%;
  padding: 70px 0px 30px;
  text-align: center;
  line-height: 1.8rem;

  a {
    color: ${({ theme }) => theme.textColor.black};
    text-decoration: underline;
  }
`;

const Credit = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #555555;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  line-height: 1.7rem;
  p {
    max-width: 890px;
    margin: auto;
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function Footer() {
  const [visible, setVisible] = useState('invisible');
  return (
    <>
      <ContactInfo>
        <p>聯繫地球公民基金會</p>
        <p>
          Email：
          <a
            href='https://github.com/Disfactory'
            target='_blank'
            rel='noreferrer noopenner'
          >
            cet@cet-taiwan.org
          </a>
        </p>
        <p>電話：02-23920371</p>
        <p>
          網站：
          <a
            href='https://www.cet-taiwan.org'
            target='_blank'
            rel='noreferrer noopenner'
          >
            https://www.cet-taiwan.org
          </a>
        </p>
      </ContactInfo>

      <Credit>
        <p>
          全站由使用者回報之資料及設計圖以CC
          BY姓名標示4.0釋出，標註「農地違章工廠回報系統貢獻者」，
          原始碼以MIT開放授權公開在GitHub上。使用者回報資料未涉及個人資訊部分已整理成開放資料與API。
          <span
            onClick={() => {
              setVisible('visible');
            }}
          >
            貢獻者名單
          </span>
        </p>
      </Credit>
      <Contributor visible={visible} setVisible={setVisible} />
    </>
  );
}
