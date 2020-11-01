import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { shape, func } from 'prop-types';
import {
  Form,
  FormGroup,
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import { useFormik } from 'formik';

import formatMessage from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import messages from '../../messages';
import { roleMap } from '../../constants';
import { registerUser } from '../../actions';

const RegisterCard = ({ registerUser: registerUserAction }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const roleId = roleMap.users;
      registerUserAction({ ...values, roleId });
    },
  });

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
                <FloatingInputLabel
                  label={messages.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  {...formik.getFieldProps('firstName')}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FloatingInputLabel
                  label={messages.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  {...formik.getFieldProps('lastName')}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <FloatingInputLabel
              label={messages.emailPlaceHolder}
              type="email"
              name="email"
              id="email"
              required
              {...formik.getFieldProps('email')}
            />
          </FormGroup>
          <FormGroup>
            <FloatingInputLabel
              label={messages.mobileOrLandLine}
              type="text"
              name="mobilePhone"
              id="mobilePhone"
              required
              {...formik.getFieldProps('mobilePhone')}
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelPwdInput
              label={messages.passwordPlaceHolder}
              name="password"
              id="password"
              showPwdStrength
              required
              {...formik.getFieldProps('password')}
            />
          </FormGroup>
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
  registerUser: func.isRequired,
};

export default injectIntl(connect(null, { registerUser })(RegisterCard));
