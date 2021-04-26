import React from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import {
  Form, FormGroup, Button, Card, CardBody, CardTitle,
} from 'reactstrap';
import { useFormik } from 'formik';
import { string, ref, object } from 'yup';

import formatMessage from 'components/formatMessages';
import FloatingLabelPwdInput from 'components/Shared/FloatingLabelPwdInput';
import messages from '../../messages';

import { resetPassword } from '../../actions';

const ResetPasswordForm = ({ user, resetPassword: resetPasswordAction }) => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: object({
      password: string(),
      confirmPassword: string().oneOf([ref('password'), null]),
    }),
    onSubmit: (values) => {
      resetPasswordAction({
        password: values.password,
        id: user.id,
        email: user.email,
      });
    },
  });

  return (
    <Card className='reset-card'>
      <CardBody>
        <CardTitle className='reset-title'>
          {formatMessage(messages.resetPwdTitle)}
        </CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FloatingLabelPwdInput
              name='password'
              label={messages.passwordPlaceHolder}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FloatingLabelPwdInput
              name='confirmPassword'
              label={messages.confirmPasswordPlaceHolder}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              invalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </FormGroup>
          <FormGroup>
            <Button className='login-btn' type='submit' color='warning'>
              {formatMessage(messages.confirmResetBtnText)}
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

ResetPasswordForm.propTypes = {
  resetPassword: func.isRequired,
  user: shape({}).isRequired,
};

export default connect(null, { resetPassword })(ResetPasswordForm);
