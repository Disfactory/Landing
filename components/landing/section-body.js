import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const BodyContainer = styled.div`
  padding: 55px 0px;
  text-align: center;
  .title {
    font-weight: 700;
    font-size: 38px;
    line-height: 1.3;
    color: #2b4754;
    margin-bottom: 15px;
  }
  .subtitle {
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    margin: 0px auto 30px;
    max-width: 270px;
  }
`

export default function SectionBody({ children, title, subtitle }) {

  return (
   <BodyContainer>
      <div className='title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
      {children}
   </BodyContainer>
  )
}
