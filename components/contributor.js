import styled from 'styled-components';
import React from 'react';
import { ContributorInfo } from '~/constants/contributor';

const Test = styled.div`
  .invisible {
    opacity: 0;
    z-index: -1;
  }

  .visible {
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -ms-transition: opacity 0.2s ease-in-out;
    -o-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2 ease-in-out;
    z-index: 5000;
  }
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Content = styled.div`
  max-width: 776px;
  width: 80%;
  background: ${({ theme }) => theme.backgroundColor.white};
  height: 85%;
  padding: 20px;
  box-shadow: -11px 14px 0px 3px #697f01;
  ${({ theme }) => theme.fontSize['normal']};
  position: relative;

  img {
    width: 27px;
    height: 27px;
    cursor: pointer;
    margin-right: 0px;
  }

  .cross-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

const ScrollBar = styled.div`
  overflow-y: scroll;
  height: 90%;
  padding: 0px 20px;

  h4 {
    font-size: 32px;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 15px;
    font-weight: 400;
  }
`;

const Introduce = styled.div`
  padding: 30px 50px 10px 30px;
  border-bottom: 1px solid black;

  img {
    display: none;
  }

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      width: 80%;
      margin: auto auto 25px 0px;
    }

    img {
      display: block;
      width: 200px;
      height: 200px;
      margin-bottom: 25px;
    }
  }
`;

const ListItem = styled.div`
  padding: 25px 20px 0px 25px;
  font-size: 16px;
  .title {
    color: #107393;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 700;
  }

  p {
    line-height: 1.6;
    text-align: center;
  }

  > div {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.breakpoint.xl} {
    padding: 35px 20px 20px 25px;
    > div {
      display: flex;
      align-items: center;
    }

    p {
      margin: 0px;
      text-align: left;
    }

    .title {
      margin: 0px;
      margin-right: 20px;
      min-width: 120px;
      text-align: left;
    }
  }
`;

const lists = ContributorInfo.map((item) => {
  return (
    <div key={item.id}>
      <p className='title'>{item.type}</p>
      <p>{item.name}</p>
    </div>
  );
});

export default function Contributor({ visible, setVisible }) {
  return (
    <Test>
      <Container className={visible}>
        <Content>
          <div
            className='cross-icon'
            onClick={() => {
              setVisible('invisible');
            }}
          >
            <img src='/images/cross_button.svg' alt='cross-button' />
          </div>

          <ScrollBar>
            <h4>貢獻者</h4>
            <Introduce>
              <div>
                <p>Disfactory.tw 為農地違章工廠的回報平台。 </p>
                <p>
                  project is run by volunteers in the g0v.tw civic hacker
                  network.
                </p>
                <p>Don't ask why nobody is doing this. Become that nobody.</p>
              </div>
              <img src='/images/action3.svg' alt='disfactory'></img>
            </Introduce>
            <ListItem>{lists}</ListItem>
          </ScrollBar>
        </Content>
      </Container>
    </Test>
  );
}
