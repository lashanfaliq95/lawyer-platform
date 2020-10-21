import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import {
  Button, Card, CardBody, CardTitle, Input,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
import messages from '../../messages';
import SuccessCard from './SuccessCard';

import { resetPassword } from '../../actions';

const ForgotPwdCard = ({ resetPassword: resetPasswordAction }) => {
  const [isPwdResetSuccess, setIsPwdResetSuccess] = useState(null);

  const onPwdResetClick = () => {
    setIsPwdResetSuccess(true);
    resetPasswordAction();
  };

  return (
    <Card className="forgot-pwd-card">
      {isPwdResetSuccess === null && (
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
          <Button className="login-btn" onClick={onPwdResetClick}>
            {formatMessage(messages.resetBtnText)}
          </Button>
        </div>
      </CardBody>
      )}
      {isPwdResetSuccess && <SuccessCard />}
    </Card>
  );
};

ForgotPwdCard.propTypes = {
  resetPassword: func.isRequired,
};

export default connect(null, { resetPassword })(ForgotPwdCard);
