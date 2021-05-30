import React, { useState, useEffect } from 'react';
import { bool, string, func } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
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
          <Row>
            <Col md='1' style={{ margin: 'auto 10px auto auto' }}>
              <Icon name='user-alt-slash' size='extraLarge' />
            </Col>
            <Col>
              {formatMessage(messages.noNewClientModalBody, { phoneNumber })}
            </Col>
          </Row>
        </ModalBody>
        <Row style={{ marginBottom: '10px' }}>
          <Col
            md={{ offset: '1', size: '11' }}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button color='link' onClick={toggle}>
              {formatMessage(messages.cancel)}
            </Button>
            <Button color='secondary' onClick={toggle}>
              <a href={`tel:${phoneNumber}`}>{formatMessage(messages.call)}</a>
            </Button>
          </Col>
        </Row>
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
