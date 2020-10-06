import React from 'react';
import { bool } from 'prop-types';
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

const RegistrationForm = ({ isRegistrationVisible }) => {
  const formik = useFormik({
    initialValues: {
      mobilePhone: '',
      email: '',
      password: '',
      emailConfirmation: '',
    },
    validationSchema: object({
      mobilePhone: number().test('len', 'Phone number must have 9 digits', (val) => val && val.length === 9).required('Required'),
      email: string().email('Invalid email address').required('Required'),
      emailConfirmation: string()
        .oneOf([ref('email'), null], 'Emails must match').required('Required'),
      password: string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
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
              New to avoplan?
            </CardTitle>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="mobilePhone">Enter your information to continue.</Label>

                <Input
                  type="text"
                  name="mobilePhone"
                  id="mobilePhone"
                  placeholder="Mobile phone(otherwise landline)"
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
              <p style={{ 'font-weight': 'bold', 'text-align': 'left', 'font-size': '14px' }}>Example help text that remains unchanged.</p>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
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
                  placeholder="Confirm your email address"
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
                  placeholder="Password"
                  invalid={formik.touched.password && formik.errors.password}
                  valid={formik.touched.Password && !formik.errors.Password}
                  {...formik.getFieldProps('password')}
                />
                <FormFeedback>{formik.errors.password}</FormFeedback>
                <p style={{ 'font-weight': 'bold', 'text-align': 'left', 'font-size': '14px' }}>Your password will allow you to manage your appointments.</p>
              </FormGroup>
              <HorizontalSeparator color="#cfd8dc" />
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  I accept avoplans terms and conditions
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  I want to stay connected
                </Label>
              </FormGroup>
              <Button type="submit" color="primary" className="register-btn">
                REGISTER
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
};

export default RegistrationForm;
