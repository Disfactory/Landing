import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  padding: 55px 20px 10px;
  text-align: center;
  background: ${(props) => (props.color ? props.color : '#ffffff')};
  .title {
    font-weight: 700;
    line-height: 1.5;
    ${({ theme }) => theme.fontSize['title-main-xs']};
    color: ${({ theme }) => theme.textColor.darkGreen};
    margin-bottom: 15px;
  }
  .subtitle {
    font-size: 18px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textColor.gray};
    margin: 0px auto 30px;
    max-width: 480px;
  }

  ${({ theme }) => theme.breakpoint.md} {
    .title {
      ${({ theme }) => theme.fontSize['title-main-sm']};
    }

    .subtitle {
      ${({ theme }) => theme.fontSize['subtitle-sm']};
    }
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
      <h2 className='title'>{title}</h2>
      <div className='subtitle'>{subtitle}</div>
      {children}
    </BodyContainer>
  );
}
