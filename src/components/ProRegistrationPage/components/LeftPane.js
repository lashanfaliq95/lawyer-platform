import React from 'react';

import formatMessages from 'components/formatMessages';
import headerImage from 'assets/images/header-home.png';
import messages from '../messages';

import '../styles.scss';

function LeftPane() {
  return (
    <div className='left-pane-root'>
      <h1>{formatMessages(messages.title)}</h1>
      <h5>{formatMessages(messages.description)}</h5>
      <div>
        <img src={headerImage} alt='Avoplan Pro' />
      </div>
    </div>
  );
}

export default LeftPane;
