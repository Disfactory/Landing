import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  padding: 55px 0px;
  text-align: center;
  background: ${(props) => (props.color ? props.color : '#ffffff')};
  .title {
    font-weight: 700;
    ${({ theme }) => theme.fontSize['title-main-md']};
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
`;

export default function SectionBody({
  children = null,
  title = '',
  subtitle = '',
  color = '',
}) {
  return (
    <BodyContainer color={color}>
      <div className='title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
      {children}
    </BodyContainer>
  );
}
