import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { bool, string, func, shape } from 'prop-types';
import { Button, Modal, ModalBody, Col, Row } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Hr from 'components/Shared/HorizontalSeparator';
import Icon from 'components/Shared/Icon';
import messages from '../messages';

const DirectBookingModal = ({
  showModal,
  lawyerMessage,
  onClose,
  body,
  onSelect,
  data,
  isUserLoggedIn,
}) => {
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(showModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const onClickBookAppointment = () => {
    onSelect(data);
    toggle();
    if (isUserLoggedIn) {
      history.push('/appointment-success');
    } else {
      history.push('/appointment-confirmation');
    }
  };

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className='appointment-modal'
      onClosed={() => {
        onClose();
        setModal(false);
      }}
    >
      <ModalBody>
        <span className='title'>
          {formatMessage(messages.appointmentBookingModalTitle)}
        </span>
        <Row>
          <Col md='1' style={{ margin: 'auto 5px' }}>
            <Icon name='calendar-alt' size='extraLarge' />
          </Col>
          <Col md='5'>
            {formatMessage(body)}
            {lawyerMessage &&
              (<Hr color='#bfbebe' />)`${formatMessage(
                messages.messageToYouFromTheLawyer,
              )}
              ${lawyerMessage}`}
          </Col>
          <Col
            md='5'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button color='link' onClick={toggle}>
              {formatMessage(messages.cancel)}
            </Button>
            <Button
              color='secondary'
              onClick={onClickBookAppointment}
              type='button'
            >
              {formatMessage(messages.bookTheAppointment)}
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

DirectBookingModal.propTypes = {
  showModal: bool,
  lawyerMessage: string,
  onClose: func.isRequired,
  body: shape({}).isRequired,
  onSelect: func.isRequired,
  data: shape({}).isRequired,
  isUserLoggedIn: bool.isRequired,
};

DirectBookingModal.defaultProps = {
  showModal: false,
  lawyerMessage: null,
};

export default DirectBookingModal;
