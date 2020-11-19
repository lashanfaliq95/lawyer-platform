import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import {
  func, string, shape, bool,
} from 'prop-types';
import { Input } from 'reactstrap';
import PasswordStrengthBar from 'react-password-strength-bar';

import './styles.scss';
import Icon from 'components/Shared/Icon';

const FloatingLabelPwdInput = (props) => {
  const {
    onChange, label, forgotPwdBtnText, showForgotPwdBtn, showPwdStrength, intl, invalid, ...rest
  } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
    onChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="floating-label-input">
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={onPasswordInputChange}
          className={`pwd-input ${password ? 'has-input' : ''}`}
          invalid={!!invalid}
          {...rest}
        />
        <span className="floating-label">
          {intl.formatMessage(label) }
        </span>
        {showForgotPwdBtn && !password && (
          <div className="inner-link">
            <Link to="/auth/forgot-pwd">
              {intl.formatMessage(forgotPwdBtnText)}
            </Link>
          </div>
        )}
        {password && !isPasswordVisible && (
          <button
            className="pwd-btn"
            onClick={togglePasswordVisibility}
            type="button"
          >
            <Icon className="pwd-icon" name="eye" />
          </button>
        )}
        {password && isPasswordVisible && (
          <button
            className="pwd-btn"
            onClick={togglePasswordVisibility}
            type="button"
          >
            <Icon className="pwd-icon" name="eye-slash" />
          </button>
        )}
      </div>
      {showPwdStrength && (
        <div className="pwd-bar-wrapper">
          <PasswordStrengthBar
            password={password}
            scoreWordClassName="score-word-style"
            scoreWords={['Sicherheit', 'Sicherheit: sehr schlecht', 'Sicherheit: schlecht', 'Sicherheit: gut', 'Sicherheit: sehr gut']}
            shortScoreWord="Sicherheit"
          />
        </div>
      )}
    </>
  );
};

FloatingLabelPwdInput.propTypes = {
  onChange: func.isRequired,
  label: shape({}).isRequired,
  intl: shape({}).isRequired,
  forgotPwdBtnText: string,
  showForgotPwdBtn: bool,
  showPwdStrength: bool,
  invalid: bool,
};

FloatingLabelPwdInput.defaultProps = {
  forgotPwdBtnText: '',
  showForgotPwdBtn: false,
  showPwdStrength: false,
  invalid: false,
};

export default injectIntl(FloatingLabelPwdInput);
