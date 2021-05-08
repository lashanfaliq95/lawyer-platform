import React from 'react';
import { useFormik } from 'formik';
import { Form, FormGroup, Row, Col } from 'reactstrap';

import Input from 'components/Shared/FloatingLabelInput';
import formatMessages from 'components/formatMessages';

import messages from '../messages';
import { Card, CardBtn, CardExternalTitle } from '../styles';

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobilePhone: '',
      email: '',
      password: '',
    },
    onSubmit: () => {},
  });

  return (
    <Card style={{ paddingBottom: '5px' }}>
      <CardExternalTitle>
        {formatMessages(messages.contactInfo)}
      </CardExternalTitle>
      <Form onSubmit={formik.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                label={messages.firstName}
                type='text'
                name='firstName'
                id='firstName'
                required
                {...formik.getFieldProps('firstName')}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                label={messages.lastName}
                type='text'
                name='lastName'
                id='lastName'
                required
                {...formik.getFieldProps('lastName')}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            label={messages.emailPlaceHolder}
            type='email'
            name='email'
            id='email'
            required
            {...formik.getFieldProps('email')}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={messages.mobileOrLandLine}
            type='text'
            name='mobilePhone'
            id='mobilePhone'
            required
            {...formik.getFieldProps('mobilePhone')}
          />
        </FormGroup>
        <FormGroup>
          <CardBtn type='submit'>
            {formatMessages(messages.saveChanges)}
          </CardBtn>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default ContactSection;
