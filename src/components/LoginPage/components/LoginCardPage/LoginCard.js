import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { func, shape } from 'prop-types';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import formatMessage from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
import messages from '../../messages';

import { loginUser } from '../../actions';

const LoginForm = ({ intl, loginUser: loginUserAction }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: object({
      email: string().email('Invalid email address').required('Required'),
      password: string().required('No password provided.'),
    }),
    onSubmit: (values) => {
      loginUserAction(values);
    },
  });

  const onPasswordInputChange = (e) => {
    setPassword(e.target.value);
    formik.handleChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle className="title">
          <Link to="/" className="link-text">
            {formatMessage(messages.loginTitle)}
          </Link>
        </CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              {...formik.getFieldProps('email')}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.emailPlaceHolder)}
            </span>
          </FormGroup>
          <FormGroup>
            <Input
              className="pwd-input"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              onBlur={formik.handleBlur}
              onChange={onPasswordInputChange}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.passwordPlaceHolder)}
            </span>
            {!password && (
            <div className="inner-link">
              <Link to="/auth/forgot-pwd">
                {formatMessage(messages.forgotPwdBtnText)}
              </Link>
            </div>
            )}
            {
              password && !isPasswordVisible && (
              <button className="pwd-btn" onClick={togglePasswordVisibility} type="button">
                <Icon className="pwd-icon" name="eye" />
              </button>
              )
            }
            {
              password && isPasswordVisible && (
              <button className="pwd-btn" onClick={togglePasswordVisibility} type="button">
                <Icon className="pwd-icon" name="eye-slash" />
              </button>
              )
            }

          </FormGroup>
          <FormGroup>
            <Button className="login-btn" type="submit" color="warning">
              {formatMessage(messages.loginBtnText)}
            </Button>
          </FormGroup>
        </Form>
        <div className="outer-link">
          <Link to="/auth/register">
            {formatMessage(messages.registerBtnText)}
          </Link>
        </div>

      </CardBody>
    </Card>
  );
};

LoginForm.propTypes = {
  intl: shape.isRequired,
  loginUser: func.isRequired,
};

export default injectIntl(connect(null, { loginUser })(LoginForm));
