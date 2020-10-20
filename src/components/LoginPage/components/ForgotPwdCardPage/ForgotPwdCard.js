import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardTitle, Input,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
import messages from '../../messages';

const ForgotPwdCard = () => (
  <Card>
    <CardBody>
      <CardTitle className="title">
        <Link to="/" className="link-text">
          {formatMessage(messages.loginTitle)}
        </Link>
      </CardTitle>
      <div className="forgot-pwd-body">
        <p className="sub-title">
          {formatMessage(messages.forgotPwdCardTitle)}
        </p>
        <p className="pwd-description">
          {formatMessage(messages.forgotPwdCardDescription)}
        </p>
        <div className="form-group">
          <Input />
          <span className="floating-label">
            {formatMessage(messages.emailPlaceHolder)}
          </span>
        </div>
        <Button className="login-btn">
          {formatMessage(messages.resetBtnText)}
        </Button>
      </div>
    </CardBody>
  </Card>
);

ForgotPwdCard.propTypes = {};

export default ForgotPwdCard;
