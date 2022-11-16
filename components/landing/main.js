import React, { Fragment } from 'react'
import styled from 'styled-components'

//components
import Nav from '../nav'
import Footer from '../footer'
import SectionBody from './section-body'
// import ActionChange from './action-change'
import InfoUse from './info-use'

const ContentContainer = styled.div`
   width: 100%;
   padding-top: 100px;
`

export default function Main() {
  return (
    <Fragment>
      {/* TODO: Nav styled component尚未處理完，暫時先註解 */}
      {/* <Nav /> */}
      <ContentContainer>
          <SectionBody title={'你的資料如何被運用？'} subtitle={'您在系統上的每個微小行動，都將成為維護農地環境的重要資訊！'}>
          </SectionBody>

          <SectionBody title={'小小行動，大大改變'} subtitle={'這幾年我們使用工具，讓違章工廠無所遁形！'}>
            <InfoUse />
          </SectionBody>

          <SectionBody title={'我們是誰？'} subtitle={'既然你誠心誠意的發問了那我就大發慈悲的告訴你'}>
          </SectionBody>

          <SectionBody title={'目前成果'} subtitle={'我們不是沒有恐懼，但我們知道比恐懼更重要的事。'}>
          </SectionBody>

      </ContentContainer>
      <Footer />
    </Fragment>
  )
}
