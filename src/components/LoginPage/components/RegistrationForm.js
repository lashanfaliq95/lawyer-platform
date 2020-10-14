import React from 'react';
import { injectIntl } from 'react-intl';
import { bool, shape } from 'prop-types';
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
  Label,
  Collapse,
} from 'reactstrap';
import { useFormik } from 'formik';
import {
  object, string, number, ref,
} from 'yup';

import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import formatMessage from 'components/formatMessages';
import messages from '../messages';

const RegistrationForm = ({ isRegistrationVisible, intl }) => {
  const formik = useFormik({
    initialValues: {
      mobilePhone: '',
      email: '',
      password: '',
      emailConfirmation: '',
    },
    validationSchema: object({
      mobilePhone: number().test('len', intl.formatMessage(messages.mobileValidation), (val) => val && val.length === 9).required(intl.formatMessage(messages.required)),
      email: string().email(intl.formatMessage(messages.emailValidation))
        .required(intl.formatMessage(messages.required)),
      emailConfirmation: string()
        .oneOf([ref('email'), null], intl.formatMessage(messages.confirmEmailValidation)).required(intl.formatMessage(messages.required)),
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
    <Collapse isOpen={isRegistrationVisible}>

      <Col md={{ size: 5, offset: 3 }}>
        <Card className="registration-card">
          <CardBody>
            <CardTitle className="title">
              {formatMessage(messages.newToAvoplan)}
            </CardTitle>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="mobilePhone">{formatMessage(messages.enterInformation)}</Label>
                <Input
                  type="text"
                  name="mobilePhone"
                  id="mobilePhone"
                  placeholder={intl.formatMessage(messages.mobileOrLandLine)}
                  invalid={formik.touched.mobilePhone && formik.errors.mobilePhone}
                  valid={formik.touched.mobilePhone && !formik.errors.mobilePhone}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobilePhone}
                  onChange={(e) => {
                    if (Number.isNaN(Number(e.target.value))) {
                      e.preventDefault();
                    } else {
                      formik.handleChange(e);
                    }
                  }}
                />
                <FormFeedback>{formik.errors.mobilePhone}</FormFeedback>
              </FormGroup>
              <p style={{ 'font-weight': 'bold', 'text-align': 'left', 'font-size': '14px' }}>
                {formatMessage(messages.mobileOrLandLineText)}
              </p>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={intl.formatMessage(messages.yourEmail)}
                  invalid={formik.touched.email && formik.errors.email}
                  valid={formik.touched.email && !formik.errors.email}
                  {...formik.getFieldProps('email')}
                />
                <FormFeedback>{formik.errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="emailConfirmation"
                  id="emailConfirmation"
                  placeholder={intl.formatMessage(messages.confirmYourEmail)}
                  invalid={formik.touched.emailConfirmation && formik.errors.emailConfirmation}
                  valid={formik.touched.emailConfirmation && !formik.errors.emailConfirmation}
                  {...formik.getFieldProps('emailConfirmation')}
                />
                <FormFeedback>{formik.errors.emailConfirmation}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={intl.formatMessage(messages.passwordPlaceHolder)}
                  invalid={formik.touched.password && formik.errors.password}
                  valid={formik.touched.Password && !formik.errors.Password}
                  {...formik.getFieldProps('password')}
                />
                <FormFeedback>{formik.errors.password}</FormFeedback>
                <p style={{ 'font-weight': 'bold', 'text-align': 'left', 'font-size': '14px' }}>
                  {formatMessage(messages.pwdDescription)}
                </p>
              </FormGroup>
              <HorizontalSeparator color="#cfd8dc" />
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  {formatMessage(messages.agreeConditions)}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  {formatMessage(messages.wantToStayConnected)}
                </Label>
              </FormGroup>
              <Button type="submit" color="primary" className="register-btn">
                {formatMessage(messages.registerBtnText)}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Collapse>

  );
};

RegistrationForm.propTypes = {
  isRegistrationVisible: bool.isRequired,
  intl: shape.isRequired,
};

export default injectIntl(RegistrationForm);
