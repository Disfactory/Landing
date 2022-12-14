import React, { Fragment } from 'react';
import styled from 'styled-components';

import Nav from '~/components/nav';
import Footer from '~/components/footer';
import SectionBody from '~/components/landing/section-body';
import ActionChange from '~/components/landing/action-change';
import InfoUse from '~/components/landing/info-use';
// import Carousel from './landing/carousel';
import ToggleList from '~/components/landing/toggle-list';
import Tool from '~/components/landing/tool';
import Forehead from '~/components/landing/forehead';
import Header from '~/components/header';

import { QAtoggleInfo } from '../constants/QA-toggle';

const ContentContainer = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const toggleLists = QAtoggleInfo.map((item, index) => {
  return <ToggleList data={item} order={index} key={item.id} />;
});

export default function Main() {
  return (
    <Fragment>
      <Nav />
      <ContentContainer>
        <Header
          title={'農地違章工廠回報系統'}
          subtitle={'by一群想用科技工具改變政府的下班族'}
        />
        <Forehead
          title={'對的事，再難也要做！'}
          subtitle={'我們不是沒有恐懼， 但我們知道比恐懼更重要的事。'}
        />
        <SectionBody title={'於是，我們製作了這些工具！'} color='#FBFDF0'>
          <Tool />
        </SectionBody>

        <SectionBody
          title={'你的資料如何被運用？'}
          subtitle={
            '您在系統上的每個微小行動，都將成為維護農地環境的重要資訊！'
          }
        >
          <InfoUse />
        </SectionBody>

        <SectionBody
          title={'小小行動，大大改變'}
          subtitle={'這幾年我們使用工具，讓違章工廠無所遁形！'}
        >
          <ActionChange />
        </SectionBody>

        <SectionBody
          title={'我們是誰？'}
          subtitle={'既然你誠心誠意的發問了那我就大發慈悲的告訴你'}
        ></SectionBody>

        <SectionBody
          title={'目前成果'}
          subtitle={'我們不是沒有恐懼，但我們知道比恐懼更重要的事。'}
        >
          {/* <Carousel /> */}
        </SectionBody>

        <SectionBody
          title={'常見問題'}
          subtitle={'既然你誠心誠意的發問了那我就大發慈悲的告訴你'}
        >
          {toggleLists}
        </SectionBody>

        <SectionBody
          title={'了解更多'}
          subtitle={'既然你誠心誠意的發問了，那我就大發慈悲的告訴你'}
        >
          {/* <Carousel /> */}
        </SectionBody>
      </ContentContainer>
      <Footer />
    </Fragment>
  );
}
