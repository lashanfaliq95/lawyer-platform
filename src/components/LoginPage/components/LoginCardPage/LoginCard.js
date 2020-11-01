import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import {
  Form,
  FormGroup,
  Button,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useFormik } from 'formik';

import formatMessage from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import messages from '../../messages';

import { loginUser } from '../../actions';

const LoginForm = ({ loginUser: loginUserAction }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      loginUserAction(values);
    },
  });

  return (
    <Card className="login-card">
      <CardBody>
        <CardTitle className="title">
          <Link to="/" className="link-text">
            {formatMessage(messages.loginTitle)}
          </Link>
        </CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FloatingInputLabel
              label={messages.emailPlaceHolder}
              type="email"
              name="email"
              id="exampleEmail"
              required
              {...formik.getFieldProps('email')}
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelPwdInput
              name="password"
              label={messages.passwordPlaceHolder}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              forgotPwdBtnText={messages.forgotPwdBtnText}
              required
              showForgotPwdBtn
            />
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

export default connect(null, { loginUser })(LoginForm);
