import { bool, string } from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
import messages from '../messages';

const NoNewClientsModal = ({ showModal, phoneNumber }) => {
  const [modal, setModal] = useState(false);
  console.log(modal);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    console.log(showModal, modal);
    setModal(showModal);
  }, [showModal]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} onClose={() => { setModal(false); }}>
        <ModalHeader toggle={toggle}>
          {formatMessage(messages.noNewClientModalTitle)}
        </ModalHeader>
        <ModalBody>
          {formatMessage(messages.noNewClientModalBody, { phoneNumber })}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            {formatMessage(messages.cancel)}
          </Button>
          <Button color="secondary" onClick={toggle}>
            <a href={`tel:${phoneNumber}`}>
              {formatMessage(messages.call)}
            </a>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

NoNewClientsModal.propTypes = {
  showModal: bool,
  phoneNumber: string.isRequired,
};

NoNewClientsModal.defaultProps = {
  showModal: false,
};

export default NoNewClientsModal;
