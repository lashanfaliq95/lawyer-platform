import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import {
  Button, Card, CardBody, CardTitle,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import messages from '../../messages';
import SuccessCard from './SuccessCard';

import { forgotPassword } from '../../actions';

const ForgotPwdCard = ({ forgotPassword: forgotPasswordAction, isForgotPasswordSuccess }) => {
  const [email, setEmail] = useState('');

  const onPwdResetClick = () => {
    forgotPasswordAction({ email });
  };

  return (
    <Card className="forgot-pwd-card">
      {!isForgotPasswordSuccess && (
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
            <FloatingInputLabel
              label={messages.emailPlaceHolder}
              onChange={(e) => { setEmail(e.target.value); }}
              value={email}
            />
          </div>
          <Button className="login-btn" onClick={onPwdResetClick}>
            {formatMessage(messages.resetBtnText)}
          </Button>
        </div>
      </CardBody>
      )}
      {isForgotPasswordSuccess && <SuccessCard />}
    </Card>
  );
};

ForgotPwdCard.propTypes = {
  forgotPassword: func.isRequired,
  isForgotPasswordSuccess: bool.isRequired,
};

const mapStateToProps = (state) => (
  { isForgotPasswordSuccess: state.login.isForgotPasswordSuccess }
);
export default connect(mapStateToProps, { forgotPassword })(ForgotPwdCard);
