import React, { useState, useEffect } from 'react';
import { bool, string, func, shape } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Hr from 'components/Shared/HorizontalSeparator';
import Icon from 'components/Shared/Icon';
import messages from '../messages';

const DirectBookingModal = ({ showModal, lawyerMessage, onClose, body }) => {
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
          {formatMessage(messages.appointmentBookingModalTitle)}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md='1' style={{ margin: 'auto 10px auto auto' }}>
              <Icon name='calendar-alt' size='extraLarge' />
            </Col>
            <Col>
              {formatMessage(body)}
              <Hr color='#bfbebe' />
              {lawyerMessage &&
                `${formatMessage(messages.messageToYouFromTheLawyer)}
              ${lawyerMessage}`}
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col
              md={{ offset: '1', size: '11' }}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button color='link' onClick={toggle}>
                {formatMessage(messages.cancel)}
              </Button>
              <Button color='secondary' onClick={toggle}>
                {formatMessage(messages.bookTheAppointment)}
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

DirectBookingModal.propTypes = {
  showModal: bool,
  lawyerMessage: string,
  onClose: func.isRequired,
  body: shape({}).isRequired,
};

DirectBookingModal.defaultProps = {
  showModal: false,
  lawyerMessage: null,
};

export default DirectBookingModal;
