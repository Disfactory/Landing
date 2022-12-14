import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const BodyContainer = styled.div`
  > div {
    width: 90%;
    background: #fff9e6;
    border-radius: 8px;
    padding: 22px 45px;
    display: block;
    margin: auto;
  }

  .noShow {
    display: none;
  }
`;

export default function ToggleTitle(props) {
  const style = classNames({ noShow: !props.show });
  return (
    <BodyContainer>
      <div className={style}>{props.data.answer}</div>
    </BodyContainer>
  );
}
