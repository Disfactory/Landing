import React, { useState } from 'react';
import styled from 'styled-components';

import ToggleTitle from './toggle-title';
import ToggleBody from './toggle-body';

const ToggleContainer = styled.div`
  width: 100%;
  margin: auto;
  text-align: left;

  > div {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    width: 80%;
    max-width: 800px;
  }
`;

export default function ToggleItem(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <ToggleContainer>
      <ToggleTitle
        data={props.data}
        isActive={isActive}
        setActive={() => setIsActive(!isActive)}
      />
      <ToggleBody data={props.data} show={isActive} />
    </ToggleContainer>
  );
}
