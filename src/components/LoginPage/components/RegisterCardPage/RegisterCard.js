import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { shape } from 'prop-types';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import { useFormik } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';

import formatMessage from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
import messages from '../../messages';

const RegisterCard = ({ intl }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      password: '',
    },
    onSubmit: () => {},
  });

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    formik.handleChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Card className="register-card">
      <CardBody>
        <CardTitle className="title">
          <Link to="/" className="link-text">
            {formatMessage(messages.registerTitle)}
          </Link>
        </CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="firstName" id="firstName" />
                <span className="floating-label">
                  {intl.formatMessage(messages.firstName)}
                </span>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="lastName" id="lastName" />
                <span className="floating-label">
                  {intl.formatMessage(messages.lastName)}
                </span>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.emailPlaceHolder)}
            </span>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="mobilePhone"
              id="mobilePhone"
              {...formik.getFieldProps('mobilePhone')}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.mobileOrLandLine)}
            </span>
          </FormGroup>
          <FormGroup>
            <Input
              className="pwd-input"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              onChange={onPasswordChange}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.passwordPlaceHolder)}
            </span>
            {!isPasswordVisible && (
              <button
                className="pwd-btn"
                onClick={togglePasswordVisibility}
                type="button"
              >
                <Icon className="pwd-icon" name="eye" />
              </button>
            )}
            {isPasswordVisible && (
              <button
                className="pwd-btn"
                onClick={togglePasswordVisibility}
                type="button"
              >
                <Icon className="pwd-icon" name="eye-slash" />
              </button>
            )}
          </FormGroup>
          <div className="pwd-bar-wrapper">
            <PasswordStrengthBar password={password} scoreWordClassName="score-word-style" />
          </div>
          <FormGroup>
            <Button type="submit" color="primary" className="login-btn">
              {formatMessage(messages.register)}
            </Button>
          </FormGroup>
        </Form>
        <div className="outer-link">
          <Link to="/auth/login">
            {formatMessage(messages.alreadyHaveAnAccount)}
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

RegisterCard.propTypes = {
  intl: shape.isRequired,
};

export default injectIntl(connect(null, {})(RegisterCard));
