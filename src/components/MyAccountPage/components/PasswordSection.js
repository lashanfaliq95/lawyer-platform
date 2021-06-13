import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { Form, FormGroup } from 'reactstrap';

import PasswordInput from 'components/Shared/FloatingLabelPwdInput';
import formatMessages from 'components/formatMessages';
import { updateUserPassword } from 'components/LoginPage/actions';

import { Card, CardExternalTitle, CardBtn } from '../styles';
import messages from '../messages';

const PasswordSectionContainer = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
    validationSchema: object({
      currentPassword: string(),
      newPassword: string(),
    }),
    onSubmit: (values) => {
      dispatch(updateUserPassword(values));
    },
  });

  return (
    <Card style={{ paddingBottom: '5px' }}>
      <CardExternalTitle>
        {formatMessages(messages.settingsForSecurity)}
      </CardExternalTitle>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <PasswordInput
            name='currentPassword'
            label={messages.currentPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            securityTitle={messages.security}
          />
        </FormGroup>
        <FormGroup>
          <PasswordInput
            name='newPassword'
            label={messages.newPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            invalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            showPwdStrength
            required
            securityTitle={messages.security}
          />
        </FormGroup>
        <FormGroup style={{ float: 'right' }}>
          <CardBtn type='submit'>
            {formatMessages(messages.changePassword)}
          </CardBtn>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default PasswordSectionContainer;
