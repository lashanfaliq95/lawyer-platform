import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { func, string, shape, bool, oneOfType } from 'prop-types';
import { Input } from 'reactstrap';
import styled from 'styled-components';

import PasswordStrengthBar from 'react-password-strength-bar';
import Icon from 'components/Shared/Icon';

import './styles.scss';

const SecurityTitle = styled.span`
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const FloatingLabelPwdInput = (props) => {
  const {
    onChange,
    label,
    forgotPwdBtnText,
    showForgotPwdBtn,
    showPwdStrength,
    hideScoreWord,
    securityTitle,
    intl,
    invalid,
    error,
    ...rest
  } = props;
  const { value: propValue } = rest;
  if (propValue === '') {
    delete rest.value;
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
    onChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    if (password !== propValue) {
      setPassword(propValue);
    }
    //  eslint-disable-next-line
  }, [propValue]);

  return (
    <div className='floating-input-parent'>
      <div className='floating-label-input'>
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={onPasswordInputChange}
          className={`pwd-input ${password || propValue ? 'has-input' : ''}`}
          invalid={!!invalid}
          {...rest}
        />
        <span className='floating-label'>{intl.formatMessage(label)}</span>
        {showForgotPwdBtn && !password && (
          <div className='inner-link'>
            <Link to='/auth/forgot-pwd'>
              {intl.formatMessage(forgotPwdBtnText)}
            </Link>
          </div>
        )}
        {password && !isPasswordVisible && (
          <button
            className='pwd-btn'
            onClick={togglePasswordVisibility}
            type='button'
          >
            <Icon className='pwd-icon' name='eye' />
          </button>
        )}
        {password && isPasswordVisible && (
          <button
            className='pwd-btn'
            onClick={togglePasswordVisibility}
            type='button'
          >
            <Icon className='pwd-icon' name='eye-slash' />
          </button>
        )}
      </div>
      {error && <ErrorMessage>{intl.formatMessage(error)}</ErrorMessage>}
      {showPwdStrength && (
        <div
          className={[
            'pwd-bar-wrapper',
            hideScoreWord ? 'hide-score-word' : '',
          ].join(' ')}
        >
          {securityTitle && (
            <SecurityTitle>{intl.formatMessage(securityTitle)}</SecurityTitle>
          )}
          <PasswordStrengthBar
            password={password}
            scoreWordClassName='score-word-style'
            scoreWords={
              securityTitle
                ? [
                  'sehr schlecht',
                  'sehr schlecht',
                  'schlecht',
                  'gut',
                  'sehr gut',
                ]
                : [
                  'Sicherheit',
                  'Sicherheit: sehr schlecht',
                  'Sicherheit: schlecht',
                  'Sicherheit: gut',
                  'Sicherheit: sehr gut',
                ]
            }
            shortScoreWord={
              securityTitle ? 'Merken Sie sich das Passwort' : 'Sicherheit'
            }
          />
        </div>
      )}
    </div>
  );
};

FloatingLabelPwdInput.propTypes = {
  onChange: func.isRequired,
  label: shape({}).isRequired,
  intl: shape({}).isRequired,
  forgotPwdBtnText: string,
  showForgotPwdBtn: bool,
  showPwdStrength: bool,
  hideScoreWord: bool,
  securityTitle: shape({}),
  invalid: bool,
  value: string,
  error: oneOfType([string, shape({})]),
};

FloatingLabelPwdInput.defaultProps = {
  forgotPwdBtnText: '',
  showForgotPwdBtn: false,
  showPwdStrength: false,
  hideScoreWord: false,
  securityTitle: null,
  invalid: false,
  value: '',
  error: null,
};

export default injectIntl(FloatingLabelPwdInput);
