import React from 'react';
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
import {
  object, string, number,
} from 'yup';

import formatMessage from 'components/formatMessages';
import messages from '../../messages';

const RegisterCard = ({
  intl,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      password: '',
      emailConfirmation: '',
    },
    validationSchema: object({
      firstName: string().required(),
      lastName: string().required(),
      mobilePhone: number().test('len', intl.formatMessage(messages.mobileValidation), (val) => val && val.length === 9).required(intl.formatMessage(messages.required)),
      email: string().email(intl.formatMessage(messages.emailValidation))
        .required(intl.formatMessage(messages.required)),
      password: string()
        .required(intl.formatMessage(messages.required))
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          intl.formatMessage(messages.passwordValidation),
        ),
    }),
    onSubmit: () => {

    },
  });
  return (
    <Card>
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
              valid={formik.touched.email && !formik.errors.email}
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
              valid={formik.touched.mobilePhone && !formik.errors.mobilePhone}
              {...formik.getFieldProps('mobilePhone')}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.mobileOrLandLine)}
            </span>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              valid={formik.touched.Password && !formik.errors.Password}
              {...formik.getFieldProps('password')}
            />
            <span className="floating-label">
              {intl.formatMessage(messages.passwordPlaceHolder)}
            </span>
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

export default injectIntl(connect(null, { })(RegisterCard));
