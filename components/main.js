import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Nav from '~/components/layout/nav';
import Footer from '~/components/layout/footer';
import SectionBody from '~/components/section-body';
import ActionChange from '~/components/action-change';
import InfoUse from '~/components/info-use';
import Carousel from '~/components/carousel';
import ToggleList from '~/components/toggle-list';
import Tool from '~/components/tool';
import Forehead from '~/components/forehead';
import Header from '~/components/header';
import Canvas from './canvas';
import { PublicShare } from '~/constants/public-share';
import { NewsShare } from '~/constants/news-share';
import { QAtoggleInfo } from '../constants/QA-toggle';

const ContentContainer = styled.div`
  width: 100%;
  padding-top: 60px;

  p {
    font-family: var(--raleway-font);
  }

  .scratch-canvas {
    display: none;

    ${({ theme }) => theme.breakpoint.md} {
      display: block;
    }
  }
`;

const toggleLists = QAtoggleInfo.map((item, index) => {
  return <ToggleList data={item} order={index} key={item.id} />;
});

export default function Main() {
  // const [data, setData] = useState('');
  // const fetchData = async () => {
  //   const response = await axios(
  //     'https://about.disfactory.tw/api/statistics/total'
  //     // '/api/statistics/total' //好奇這個在dev階段要怎麼測XD
  //   );

  //   setData(response?.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log('data', data);

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
        <span id='tool'></span>
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

        <span id='result'></span>
        <SectionBody
          title={'小小行動，大大改變'}
          subtitle={'這幾年我們使用工具，讓違章工廠無所遁形！'}
        >
          <ActionChange />
        </SectionBody>

        {/* 文字資料尚未補齊，先暫時註解 */}
        {/* <SectionBody
          title={'我們是誰？'}
          subtitle={'來自四面八方，卻有著同樣使命'}
        ></SectionBody> */}

        <SectionBody title={'聽聽他們怎麼說'}>
          <Carousel data={PublicShare} type='public' />
        </SectionBody>

        <span id='question'></span>
        <SectionBody title={'常見問題'}>{toggleLists}</SectionBody>

        <span id='news'></span>
        <SectionBody title={'想深入農地工廠議題，或瀏覽專案相關報導嗎？'}>
          <Carousel data={NewsShare} type='news' />
        </SectionBody>
        <div className='scratch-canvas'>
          <Canvas />
        </div>
      </ContentContainer>
      <Footer />
    </Fragment>
  );
}
