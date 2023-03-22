import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
  .noShow {
    display: none;
  }

  .question-mark {
    align-items: center;
    background-color: #eaf3bf;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    height: 45px;
    justify-content: center;
    margin-right: 24px;
    width: 45px;
    font-weight: 700;
    color: #697f01;
    font-size: 20px;
  }

  .question-content {
    padding-top: 10px;
  }
`;

const BodyItem = styled.div`
  width: 90%;
  background: #fff9e6;
  border-radius: 8px;
  padding: 22px 30px;
  display: flex;
  margin: 0 auto 15px auto;
  letter-spacing: 0.1ch;

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 300;
  }
`;

export default function ToggleTitle(props) {
  const style = classNames({ noShow: !props.show });

  const answerLists = props.data.answer.map((item) => {
    return (
      <BodyItem key={item.id}>
        <div className='question-mark'>Ｑ</div>
        <div className='question-content'>
          <h4> {item.title} </h4>
          <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
        </div>
      </BodyItem>
    );
  });
  return (
    <Container>
      <div className={style}>{answerLists}</div>
    </Container>
  );
}
