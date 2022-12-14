import React, { Fragment } from 'react';
import styled from 'styled-components';
// FIXME: 不知為何SVG不能當component使用 why???
// import disfactory from '~/public/images/disfactory-callout.svg';
import Image from 'next/image';
import { ToolInfo } from '../../constants/tool';

const ToolContainer = styled.div`
  max-width: 1050px;
  margin: auto;
  ${({ theme }) => theme.breakpoint.xl} {
    display: flex;
  }
`;
const ToolBox = styled.div`
  margin-bottom: 100px;
  ${({ theme }) => theme.breakpoint.xl} {
    width: 50%;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.fontSize['title-main-md']};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundColor.green};
  padding: 20px;
  color: ${({ theme }) => theme.textColor.green};
  width: 80%;
  margin: auto auto 45px auto;
  max-width: 500px;
`;

const Description = styled.div`
  ${({ theme }) => theme.fontSize['title-sub-md']};
  color: ${({ theme }) => theme.textColor.gray};
  width: 60%;
  margin: 35px auto 40px auto;
  font-weight: 400;
  line-height: 1.8;
  text-align: left;
  ${({ theme }) => theme.breakpoint.xl} {
    height: 140px;
    width: 75%;
  }
`;

const ToolList = styled.ul`
  margin: auto;
  width: 40%;
  margin-bottom: 40px;
  li {
    ${({ theme }) => theme.fontSize['title-sub-md']};
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.textColor.brownGreen};
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 25px;
    text-align: left;
  }

  .num-circle {
    background-color: ${({ theme }) => theme.backgroundColor.green};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin-right: 20px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    width: 70%;
  }
`;

const ToolButton = styled.a`
  background: #697f01;
  border-radius: 34px;
  padding: 12px 30px;
  color: white;
  ${({ theme }) => theme.fontSize['title-sub']};
  cursor: pointer;
  display: inline-block;
`;

export default function Tool() {
  return (
    <ToolContainer id='tool'>
      {ToolInfo.map(
        (
          // @ts-ignore
          toolItem
        ) => {
          return (
            <ToolBox key={toolItem.id}>
              <Title>{toolItem.title}</Title>
              <Image
                src={toolItem.image}
                alt={toolItem.title}
                width={300}
                height={200}
              ></Image>
              <Description>{toolItem.description}</Description>
              <ToolList>
                <li>
                  <div className='num-circle'>1</div>
                  {toolItem.list1}
                </li>
                <li>
                  <div className='num-circle'>2</div>
                  {toolItem.list2}
                </li>
                <li>
                  <div className='num-circle'>3</div>
                  {toolItem.list3}
                </li>
              </ToolList>
              <ToolButton href=''>{toolItem.button}</ToolButton>
            </ToolBox>
          );
        }
      )}
    </ToolContainer>
  );
}
