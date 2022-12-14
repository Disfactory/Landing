import styled from 'styled-components'
import React from 'react'

const FooterContainer = styled.div``

const ContactInfo = styled.div`
  width: 100%;
  padding: 15px 0px;
  text-align: center;
  line-height: 1.8rem;
`
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

`
export default function Nav() {

  return (
   <FooterContainer>
      <ContactInfo>
        <p>聯繫地球公民基金會</p>
        <p>Email: cet@cet-taiwan.org</p>
        <p>電話：02-23920371</p>
        <p>網站：https://www.cet-taiwan.org</p>
      </ContactInfo>

      <Credit>
        <p>
            全站由使用者回報之資料及設計圖以CC BY姓名標示4.0釋出，標註「農地違章工廠回報系統貢獻者」，
            原始碼以MIT開放授權公開在GitHub上。使用者回報資料未涉及個人資訊部分已整理成開放資料與API。貢獻者名單
        </p>
      </Credit>
   </FooterContainer>
  )
}
