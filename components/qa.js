import React from 'react';
import { QAtoggleInfo } from '../constants/QA-toggle';
import ToggleList from '~/components/toggle-list';
import styled from 'styled-components';

export default function QA() {
  return (
    <>
      {QAtoggleInfo.map((item, index) => {
        return <ToggleList data={item} order={index} key={item.id} />;
      })}
    </>
  );
}
