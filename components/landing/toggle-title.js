import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #eaf3bf;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.855px;
  color: #697f01;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default function ToggleTitle(props) {
  const toggleClass = props.isActive ? '#eaf3bf' : '#eaf3bf';

  function toggle() {
    if (props.isActive) {
      props.setActive();
    } else {
      props.setActive();
    }
  }

  return (
    <TitleContainer>
      <div className={toggleClass} onClick={toggle}>
        {props.data.question}
      </div>
    </TitleContainer>
  );
}
