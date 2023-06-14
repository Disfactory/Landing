import React, { Fragment } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ToolInfo } from '~/constants/tool';

const ToolContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  ${({ theme }) => theme.breakpoint.xl} {
    display: flex;
    justify-content: space-between;
  }
`;
const ToolBox = styled.div`
  margin-bottom: 80px;

  .tool-box-image {
    width: 100%;
    height: 195px;
    max-width: 305px;
    position: relative;
    margin: auto;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    width: 50%;
    margin-bottom: 100px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 15px;
  color: ${(props) => props.color || '#ffffff'};
  background: ${(props) => props.bgColor || '#ffffff'};
  width: 100%;
  margin: auto auto 35px auto;
  max-width: 500px;

  ${({ theme }) => theme.breakpoint.md} {
    ${({ theme }) => theme.fontSize['title-main-sm']};
    padding: 10px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    padding: 20px;
    margin: auto auto 45px auto;
  }
`;

const Description = styled.div`
  ${({ theme }) => theme.fontSize['normal']};
  color: ${({ theme }) => theme.textColor.gray};
  margin: 20px auto 30px auto;
  text-align: left;
  max-width: 500px;
  ${({ theme }) => theme.breakpoint.xl} {
    height: 120px;
    width: 75%;
    margin: 35px auto 40px auto;
    ${({ theme }) => theme.fontSize['normal-xl']};
  }
`;

const ToolList = styled.ul`
  margin: auto;
  margin-bottom: 40px;
  width: 280px;

  li {
    color: ${(props) => props.color || '#ffffff'};
    ${({ theme }) => theme.fontSize['normal']};
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    text-align: left;
    max-width: 300px;
  }

  .num-circle {
    background: ${(props) => props.bgColor || '#ffffff'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 45px;
    height: 45px;
    margin-right: 20px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    width: 360px;

    li {
      ${({ theme }) => theme.fontSize['normal-xl']};
      max-width: none;
      font-weight: 700;
    }
  }
`;

const ToolButton = styled.a`
  background: ${(props) => props.buttonColor || '#ffffff'};
  border-radius: 34px;
  padding: 15px 30px;
  color: ${({ theme }) => theme.textColor.white};
  ${({ theme }) => theme.fontSize['title-sub']};
  cursor: pointer;
  display: inline-block;
  ${({ theme }) => theme.breakpoint.xl} {
    font-size: 20px;
  }
`;

export default function Tool() {
  return (
    <ToolContainer>
      {ToolInfo.map((toolItem) => {
        return (
          <ToolBox key={toolItem.id}>
            <Title color={toolItem.color} bgColor={toolItem.bgColor}>
              {toolItem.title}
            </Title>
            <div className='tool-box-image'>
              <Image
                src={toolItem.image}
                alt={toolItem.title}
                fill
                sizes='100%'
              />
            </div>
            <Description>{toolItem.description}</Description>
            <ToolList color={toolItem.color} bgColor={toolItem.bgColor}>
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
            <ToolButton href={toolItem.link} buttonColor={toolItem.buttonColor}>
              {toolItem.button}
            </ToolButton>
          </ToolBox>
        );
      })}
    </ToolContainer>
  );
}
