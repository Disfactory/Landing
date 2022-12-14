import React from 'react';
import styled from 'styled-components';
import { MenuItems } from '~/constants/nav';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  height: 60px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 23px;
    line-height: 34px;
    letter-spacing: 1.86px;
    color: #2b4754;
  }

  img {
    margin-right: 15px;
  }
`;

const MenuBar = styled.ul`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.855px;
  color: #2b4754;
  display: none;

  .menuItem {
    text-decoration: none;
    color: #2b4754;
  }

  li {
    margin: 10px;
    cursor: pointer;
  }
  > a:nth-child(even) {
    border: 2px solid #697f01;
    border-radius: 55px;
    padding: 4px 20px;
    color: #697f01;
    margin: auto 5px;

    &:hover {
      background: #eaf3bf;
    }
  }
  > a:nth-child(odd) {
    border: 2px solid #2b4754;
    border-radius: 55px;
    padding: 4px 20px;
    color: #2b4754;
    margin: auto 5px;

    &:hover {
      background: #e5f3f3;
    }
  }

  ${({ theme }) => theme.breakpoint.xl} {
    display: flex;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <Logo>
        <img src='/images/icons/logo.svg' alt='LOGO' />
        <p>農地工廠</p>
      </Logo>
      <MenuBar>
        {MenuItems.map((item) => {
          return (
            <li key={item.id}>
              <a href={`/#${item.linkId}`} className='menuItem'>
                {item.name}
              </a>
            </li>
          );
        })}
        <a
          href='https://disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#map=14.00/120.48504632216294/24.088258816482295'
          target='_blank'
        >
          拍照回報
        </a>
        <a
          href='https://spot.disfactory.tw/?utm_source=lp&utm_medium=intro&utm_campaign=default#/'
          target='_blank'
        >
          鍵盤參與
        </a>
      </MenuBar>
    </NavContainer>
  );
}
