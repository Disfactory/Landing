import React from 'react';
import classNames from 'classnames';
import QA01 from '~/components/QA/qa_01';
import QA02 from '~/components/QA/qa_02';
import QA03 from '~/components/QA/qa_03';
import QA04 from '~/components/QA/qa_04';

export default function ToggleBody(props) {
  const style = classNames({ noShow: !props.show });

  let toggleBody = null;

  switch (props?.data?.id) {
    case '01':
      toggleBody = <QA01 style={style} />;
      break;
    case '02':
      toggleBody = <QA02 style={style} />;
      break;
    case '03':
      toggleBody = <QA03 style={style} />;
      break;
    case '04':
      toggleBody = <QA04 style={style} />;
      break;
    default:
      toggleBody = null;
      break;
  }

  return <>{toggleBody}</>;
}
