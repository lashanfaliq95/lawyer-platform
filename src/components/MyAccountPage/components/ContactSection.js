import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Form, FormGroup, Row, Col, Input, Label } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import { updateUserInfo } from 'components/LoginPage/actions';

import messages from '../messages';
import { Card, CardBtn, CardExternalTitle } from '../styles';

const ContactSection = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
    onSubmit: (values) => {
      dispatch(updateUserInfo(values));
    },
  });

  return (
    <Card style={{ paddingBottom: '5px', width: '33%', fontSize: '15px' }}>
      <CardExternalTitle>
        {formatMessages(messages.contactInfo)}
      </CardExternalTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label style={{ fontWeight: 'bold' }}>
                {formatMessages(messages.firstName)}
              </Label>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                required
                placeholder='Thomas'
                {...formik.getFieldProps('firstName')}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label style={{ fontWeight: 'bold' }}>
                {formatMessages(messages.lastName)}
              </Label>
              <Input
                type='text'
                name='lastName'
                id='lastName'
                required
                placeholder='Muller'
                {...formik.getFieldProps('lastName')}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label style={{ fontWeight: 'bold' }}>
            {formatMessages(messages.emailPlaceHolder)}
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            required
            placeholder='mail@mail.com'
            {...formik.getFieldProps('email')}
          />
        </FormGroup>
        <FormGroup>
          <Label style={{ fontWeight: 'bold' }}>
            {formatMessages(messages.mobileOrLandLine)}
          </Label>
          <Input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            required
            placeholder='1234567890'
            {...formik.getFieldProps('phoneNumber')}
          />
        </FormGroup>
        <FormGroup style={{ float: 'right' }}>
          <CardBtn type='submit'>
            {formatMessages(messages.saveChanges)}
          </CardBtn>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default ContactSection;
