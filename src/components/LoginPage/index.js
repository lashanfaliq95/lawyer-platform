import React, { useState } from 'react';
import {
  Form, FormGroup, FormFeedback, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { func } from 'prop-types';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import './styles.scss';

function LoginModal() {
  const [isVisible, setIsModalVisible] = useState(true);

  const toggle = () => setIsModalVisible(!isVisible);

  const onClickCancel = () => {
    setIsModalVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: object({
      email: string().email('Invalid email address').required('Required'),
      password: string().required('No password provided.'),
    }),
    onSubmit: () => {
      setIsModalVisible(false);
    },
  });

  return (
    <Modal isOpen={isVisible} toggle={toggle}>
      <ModalHeader>asd</ModalHeader>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              invalid={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps('email')}
            />
            <FormFeedback>{formik.errors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              invalid={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps('password')}
            />
            <FormFeedback>{formik.errors.password}</FormFeedback>
          </FormGroup>
          <FormGroup className="form-button">

            <Button type="submit" color="warning">asd</Button>

          </FormGroup>
          <FormGroup className="form-button">

            <Button type="submit" color="link">asd</Button>

          </FormGroup>

        </Form>
      </ModalBody>
      <ModalFooter className="login-footer">
        <div>
          <h3>asd</h3>
          <Button color="secondary" onClick={onClickCancel}>Cancel</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}

LoginModal.propTypes = {
  isOpen: func.isRequired,
  onClosed: func.isRequired,
};

export default LoginModal;
