import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
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
import {
  object, string, number,
} from 'yup';

import formatMessage from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import messages from '../../messages';

const RegisterCard = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      password: '',
    },
    validationSchema: object({
      firstName: string().required(),
      lastName: string().required(),
      mobilePhone: number().required(),
      email: string().email().required(),
      password: string().required(),
    }),
    onSubmit: () => {},
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
              {...formik.getFieldProps('email')}
            />
          </FormGroup>
          <FormGroup>
            <FloatingInputLabel
              label={messages.mobileOrLandLine}
              type="text"
              name="mobilePhone"
              id="mobilePhone"
              {...formik.getFieldProps('mobilePhone')}
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelPwdInput
              label={messages.passwordPlaceHolder}
              name="password"
              id="password"
              showPwdStrength
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
};

export default connect(null, {})(RegisterCard);
