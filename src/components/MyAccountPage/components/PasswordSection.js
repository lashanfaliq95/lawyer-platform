import React from 'react';
import { useFormik } from 'formik';
import { string, ref, object } from 'yup';
import { Form, FormGroup } from 'reactstrap';

import PasswordInput from 'components/Shared/FloatingLabelPwdInput';
import formatMessages from 'components/formatMessages';

import { Card, CardExternalTitle, CardBtn } from '../styles';
import messages from '../messages';

const PasswordSectionContainer = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: object({
      password: string(),
      confirmPassword: string().oneOf([ref('password'), null]),
    }),
    onSubmit: () => {},
  });

  return (
    <Card style={{ paddingBottom: '5px' }}>
      <CardExternalTitle>
        {formatMessages(messages.settingsForSecurity)}
      </CardExternalTitle>
      <Form>
        <FormGroup>
          <PasswordInput
            name='password'
            label={messages.currentPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <PasswordInput
            name='confirmPassword'
            label={messages.newPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            invalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            showPwdStrength
            required
          />
        </FormGroup>
        <FormGroup>
          <CardBtn type='submit'>
            {formatMessages(messages.changePassword)}
          </CardBtn>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default PasswordSectionContainer;
