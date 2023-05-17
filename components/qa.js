import React from 'react';
import { QAtoggleInfo } from '../constants/QA-toggle';
import ToggleList from '~/components/toggle-list';

export default function QA() {
  return (
    <>
      {QAtoggleInfo.map((item, index) => {
        return <ToggleList data={item} order={index} key={item.id} />;
      })}
    </>
  );
}
