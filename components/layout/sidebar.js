import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MenuItems } from '~/constants/nav';

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fbfdf0;
  font-size: 16px;
  letter-spacing: 0.6px;
  font-weight: 500;
  /* transition: transform 0.5s ease-out, width 0.5s ease-out;
  transform: translateX(0%); */

  .sidebar-menuItem {
    text-decoration: none;
    color: #2b4754;
  }

  ul {
    margin: 50px auto auto;
    width: 80%;
  }

  .sidebar-bg {
    width: 130px;
    height: auto;
    margin: 20px;
  }
`;

const SidebarList = styled.li`
  margin: 20px auto;
  cursor: pointer;
  position: relative;
  width: 100px;
  font-size: 18px;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -4px;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const SidebarButton = styled(Link)`
  border-radius: 55px;
  padding: 5px 10px;
  margin: 20px auto;
  display: block;
  width: 110px;
  font-weight: 500;
  height: 36.5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(even) {
    border: 2px solid #697f01;
    color: #697f01;

    &:hover {
      background: #eaf3bf;
    }
  }
  &:nth-child(odd) {
    border: 2px solid #2b4754;
    color: #2b4754;

    &:hover {
      background: #e5f3f3;
    }
  }
`;

const SidebarLists = styled.div`
  margin-bottom: 35px;
`;

const CrossButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: auto;
  display: inline-block;
  cursor: pointer;
`;

/**
 * @param {Function} setShowMenu - A function that toggles the display of the menu.
 * @return {JSX.Element} The sidebar component.
 */
export default function Sidebar({ setShowMenu }) {
  return (
    <MenuContainer>
      <CrossButton
        src='/images/sidebar-cross.svg'
        onClick={() => setShowMenu(false)}
      />
      <ul onClick={() => setShowMenu(false)}>
        <SidebarLists>
          {MenuItems.map((item) => {
            return (
              <SidebarList key={item.id}>
                <a href={`/#${item.linkId}`} className='sidebar-menuItem'>
                  {item.name}
                </a>
              </SidebarList>
            );
          })}
        </SidebarLists>
        <SidebarButton
          href='https://disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#map=14.00/120.48504632216294/24.088258816482295'
          target='_blank'
        >
          拍照回報
        </SidebarButton>
        <SidebarButton
          href='https://spot.disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#/'
          target='_blank'
        >
          鍵盤參與
        </SidebarButton>
        <SidebarButton href='/en' target='_blank'>
          English
        </SidebarButton>
      </ul>
      <img src='/images/sidebar-food.svg' className='sidebar-bg'></img>
    </MenuContainer>
  );
}
