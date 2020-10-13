import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { bool, func, shape } from 'prop-types';
import {
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Button,
  Col,
  Card,
  CardBody,
  CardTitle,
  Collapse,
} from 'reactstrap';
import { useFormik } from 'formik';
import {
  object, string,
} from 'yup';

import formatMessage from 'components/formatMessages';
import messages from './messages';

import { loginUser } from './actions';

const LoginForm = ({
  isLoginVisible, collapseLogin, expandLogin, intl, loginUser: loginUserAction,
}) => {
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
  return (
    <Col md={{ size: 5, offset: 3 }}>
      <Card>
        <CardBody>
          <CardTitle className="title">
            {formatMessage(messages.loginTitle)}
            {!isLoginVisible && (
            <Button color="link" className="register-btn" onClick={() => expandLogin()}>
              {formatMessage(messages.loginBtnText)}
            </Button>
            )}
          </CardTitle>
          <Collapse isOpen={isLoginVisible}>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder={intl.formatMessage(messages.emailPlaceHolder)}
                  invalid={formik.touched.email && formik.errors.email}
                  {...formik.getFieldProps('email')}
                />
                <FormFeedback>{formik.errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder={intl.formatMessage(messages.passwordPlaceHolder)}
                  invalid={formik.touched.password && formik.errors.password}
                  {...formik.getFieldProps('password')}
                />
                <FormFeedback>{formik.errors.password}</FormFeedback>
              </FormGroup>
              <FormGroup className="form-button">
                <Button className="login-btn" type="submit" color="warning">
                  {formatMessage(messages.loginBtnText)}
                </Button>
              </FormGroup>
              <FormGroup className="form-button forgot-your-password">
                <Button type="submit" color="link">
                  {formatMessage(messages.forgotPwdBtnText)}
                </Button>
              </FormGroup>
            </Form>
          </Collapse>
        </CardBody>
      </Card>
      {isLoginVisible && (
      <Card>
        <CardBody>
          <div className="login-footer">
            <h3 className="title">
              {formatMessage(messages.loginBtnText)}
            </h3>
            <Button color="link" className="register-btn" onClick={() => collapseLogin()}>
              {formatMessage(messages.registerBtnText)}
            </Button>
          </div>
        </CardBody>
      </Card>
      )}
    </Col>
  );
};

LoginForm.propTypes = {
  isLoginVisible: bool.isRequired,
  collapseLogin: func.isRequired,
  expandLogin: func.isRequired,
  intl: shape.isRequired,
  loginUser: func.isRequired,
};

export default injectIntl(connect(null, { loginUser })(LoginForm));
