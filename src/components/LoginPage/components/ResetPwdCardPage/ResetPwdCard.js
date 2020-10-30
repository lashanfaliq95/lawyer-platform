import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
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
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import messages from '../../messages';

import { loginUser } from '../../actions';

const ResetPasswordForm = ({ loginUser: loginUserAction }) => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      loginUserAction(values);
    },
  });

  return (
    <Card className="reset-card">
      <CardBody>
        <CardTitle className="reset-title">
          {formatMessage(messages.resetPwdTitle)}
        </CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FloatingLabelPwdInput
              name="password"
              label={messages.passwordPlaceHolder}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelPwdInput
              name="confirmPassword"
              label={messages.confirmPasswordPlaceHolder}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button className="login-btn" type="submit" color="warning">
              {formatMessage(messages.confirmResetBtnText)}
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

ResetPasswordForm.propTypes = {
  loginUser: func.isRequired,
};

export default connect(null, { loginUser })(ResetPasswordForm);
