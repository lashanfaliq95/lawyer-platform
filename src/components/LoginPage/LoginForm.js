import React from 'react';
import { bool, func } from 'prop-types';
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

const LoginForm = ({ isLoginVisible, collapseLogin, expandLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: object({
      email: string().email('Invalid email address').required('Required'),
      password: string().required('No password provided.'),
    }),
    onSubmit: () => {

    },
  });
  return (
    <Col md={{ size: 5, offset: 3 }}>
      <Card>
        <CardBody>
          <CardTitle className="title">
            I already have a avoplan account
            {!isLoginVisible && (
            <Button color="link" className="register-btn" onClick={() => expandLogin()}>
              TO LOG IN
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
                  placeholder="Email address or phone number"
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
                  placeholder="Password"
                  invalid={formik.touched.password && formik.errors.password}
                  {...formik.getFieldProps('password')}
                />
                <FormFeedback>{formik.errors.password}</FormFeedback>
              </FormGroup>
              <FormGroup className="form-button">
                <Button className="login-btn" type="submit" color="warning">
                  Log In
                </Button>
              </FormGroup>
              <FormGroup className="form-button forgot-your-password">
                <Button type="submit" color="link">
                  Forgot your password?
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
            <h3 className="title">New to avoplan?</h3>
            <Button color="link" className="register-btn" onClick={() => collapseLogin()}>
              REGISTER
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
};

export default LoginForm;
