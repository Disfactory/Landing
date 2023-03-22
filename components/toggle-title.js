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
  display: flex;
  align-items: center;

  .circle {
    width: 34px;
    height: 34px;
    outline: 2px solid #697f01;
    border-radius: 50%;
    margin-right: 20px;
    text-align: center;
  }
`;

export default function ToggleTitle(props) {
  // toggle title想要有變化的話放這邊（ex: 底色改變 or icon改變）
  const toggleClass = props.isActive ? '#eaf3bf' : '#ffffff';
  const toggleIcon = props.isActive ? '-' : '+';

  function toggle() {
    if (props.isActive) {
      props.setActive();
    } else {
      props.setActive();
    }
  }

  return (
    <TitleContainer onClick={toggle}>
      <div className='circle'>{toggleIcon}</div>
      <div className={toggleClass}>{props.data.question}</div>
    </TitleContainer>
  );
}
