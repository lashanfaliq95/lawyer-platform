import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import SuccessImage from 'assets/images/email.svg';
import messages from '../../messages';

const SuccessCard = () => (
  <CardBody>
    <CardTitle className='title'>
      <Link to='/' className='link-text'>
        {formatMessage(messages.loginTitle)}
      </Link>
    </CardTitle>
    <div className='forgot-pwd-body'>
      <p className='sub-title'>{formatMessage(messages.successCardTitle)}</p>
      <img
        src={SuccessImage}
        alt='Email delivered successFully'
        className='success-image'
      />
      <p className='pwd-description'>
        {formatMessage(messages.successCardDescription)}
      </p>
      <p className='link-text'>{formatMessage(messages.noMailReceivedText)}</p>
      <Link to='/' className='success-card-link'>
        {formatMessage(messages.switchToHelp)}
      </Link>
    </div>
  </CardBody>
);

export default SuccessCard;
