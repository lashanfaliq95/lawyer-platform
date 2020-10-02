import React, { useState } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';
import {
  func, string, node, bool,
} from 'prop-types';

const ModalComponent = (props) => {
  const {
    className,
    title,
    children,
    onSubmit,
    isOpen,
    ...rest
  } = props;

  const [isVisible, setIsModalVisible] = useState(isOpen);

  const toggle = () => setIsModalVisible(!isVisible);
  const onClickSubmit = () => {
    onSubmit();
    setIsModalVisible(false);
  };
  const onClickCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal isOpen={isVisible} className={className} toggle={toggle} {...rest}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={onClickSubmit}>Do Something</Button>
        <Button color="secondary" onClick={onClickCancel}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

ModalComponent.propTypes = {
  className: string,
  title: string.isRequired,
  children: node.isRequired,
  onSubmit: func.isRequired,
  centered: bool,
  isOpen: bool,
};

ModalComponent.defaultProps = {
  className: '',
  centered: true,
  isOpen: false,
};

export default ModalComponent;
