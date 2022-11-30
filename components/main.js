import React, { Fragment } from 'react';
import styled from 'styled-components';

import Nav from './nav';
import Footer from './footer';
import SectionBody from './landing/section-body';
import ActionChange from './landing/action-change';
import InfoUse from './landing/info-use';
import Carousel from './landing/carousel';
import ToggleList from './landing/toggle-list';

const ContentContainer = styled.div`
  width: 100%;
  padding-top: 100px;
`;

const toggleInfo = [
  {
    id: '001',
    question: '回報前，你需要知道這些～',
    answer: '問題1回答',
  },
  {
    id: '002',
    question: '回報時，這些注意事項必看！',
    answer: '問題2回答',
  },
  {
    id: '003',
    question: '回報後，怎麼了解成效？ ',
    answer: '問題3回答',
  },
  {
    id: '004',
    question: '想更加了解這個系統看這邊！',
    answer: '問題4回答',
  },
  {
    id: '005',
    question: '我想知道我家附近有沒有農地違章工廠！',
    answer: '問題5回答',
  },
];

const toggleLists = toggleInfo.map((item, index) => {
  return <ToggleList data={item} order={index} key={item.id} />;
});

export default function Main() {
  return (
    <Fragment>
      {/* TODO: Nav styled component尚未處理完，暫時先註解 */}
      {/* <Nav /> */}
      <ContentContainer>
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
