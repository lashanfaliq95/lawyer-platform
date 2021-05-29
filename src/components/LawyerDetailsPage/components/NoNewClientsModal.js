import React, { useState, useEffect } from 'react';
import { bool, string, func } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import messages from '../messages';

const NoNewClientsModal = ({ showModal, phoneNumber, onClose }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(showModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        onClosed={() => {
          onClose();
          setModal(false);
        }}
      >
        <ModalHeader toggle={toggle}>
          {formatMessage(messages.noNewClientModalTitle)}
        </ModalHeader>
        <ModalBody>
          {formatMessage(messages.noNewClientModalBody, { phoneNumber })}
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            {formatMessage(messages.cancel)}
          </Button>
          <Button color='secondary' onClick={toggle}>
            <a href={`tel:${phoneNumber}`}>{formatMessage(messages.call)}</a>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

NoNewClientsModal.propTypes = {
  showModal: bool,
  phoneNumber: string.isRequired,
  onClose: func.isRequired,
};

NoNewClientsModal.defaultProps = {
  showModal: false,
};

export default NoNewClientsModal;
