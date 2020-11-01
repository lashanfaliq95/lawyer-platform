import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
} from 'reactstrap';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import formatMessage from 'components/formatMessages';
import FloatingInputLabel from 'components/Shared/FloatingLabelInput';
import messages from '../../messages';
import SuccessCard from './SuccessCard';

import { forgotPassword } from '../../actions';

const ForgotPwdCard = ({ forgotPassword: forgotPasswordAction, isForgotPasswordSuccess }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: object({
      email: string().email(messages.emailValidation)
        .required(messages.required),
    }),
    onSubmit: (values) => {
      forgotPasswordAction(values);
    },
  });

  return (
    <Card className="forgot-pwd-card">
      {!isForgotPasswordSuccess && (
      <CardBody>
        <CardTitle className="title">
          <Link to="/" className="link-text">
            {formatMessage(messages.loginTitle)}
          </Link>
        </CardTitle>
        <div className="forgot-pwd-body">
          <p className="sub-title">
            {formatMessage(messages.forgotPwdCardTitle)}
          </p>
          <p className="pwd-description">
            {formatMessage(messages.forgotPwdCardDescription)}
          </p>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <FloatingInputLabel
                label={messages.emailPlaceHolder}
                type="email"
                name="email"
                id="exampleEmail"
                invalid={formik.touched.email && formik.errors.email}
                error={formik.errors.email}
                {...formik.getFieldProps('email')}
              />
            </FormGroup>
            <FormGroup>
              <Button className="login-btn" type="submit" color="warning">
                {formatMessage(messages.loginBtnText)}
              </Button>
            </FormGroup>
          </Form>
        </div>
      </CardBody>
      )}
      {isForgotPasswordSuccess && <SuccessCard />}
    </Card>
  );
};

ForgotPwdCard.propTypes = {
  forgotPassword: func.isRequired,
  isForgotPasswordSuccess: bool.isRequired,
};

const mapStateToProps = (state) => (
  { isForgotPasswordSuccess: state.login.isForgotPasswordSuccess }
);
export default connect(mapStateToProps, { forgotPassword })(ForgotPwdCard);
