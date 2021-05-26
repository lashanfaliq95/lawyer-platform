import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bool, string, func } from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
import messages from '../messages';
import { deleteAppointment, toggleCancellationModal } from '../action';

const AppointmentCancellationModal = ({
  isModalShown,
  onClose,
  id,
  deleteAppointment: deleteAppointmentAction,
  toggleCancellationModal: toggleCancellationModalAction,
}) => {
  const [modal, setModal] = useState(isModalShown);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(isModalShown);
  }, [isModalShown]);

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        onClosed={() => {
          onClose();
          setIsDeleteClicked(false);
          toggleCancellationModalAction(false);
        }}
      >
        <ModalHeader toggle={toggle}>
          {formatMessage(messages.cancellationModalTitle)}
        </ModalHeader>
        <ModalBody>{formatMessage(messages.cancellationModalBody)}</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => setModal(false)}>
            {formatMessage(messages.no)}
          </Button>
          <Button
            color='primary'
            onClick={() => {
              deleteAppointmentAction(id);
              setIsDeleteClicked(true);
            }}
          >
            {isDeleteClicked ? (
              <>
                <Spinner size='sm' color='light' />
                <Spinner size='sm' color='light' />
                <Spinner size='sm' color='light' />
                <Spinner size='sm' color='light' />
              </>
            ) : (
              formatMessage(messages.cancel)
            )}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AppointmentCancellationModal.propTypes = {
  isModalShown: bool,
  onClose: func,
  id: string,
  deleteAppointment: func.isRequired,
  toggleCancellationModal: bool,
};

AppointmentCancellationModal.defaultProps = {
  isModalShown: false,
  id: '',
  onClose: () => {},
  toggleCancellationModal: false,
};

const mapStateToProps = (state) => ({
  isModalShown: state.appointments.isAppointmentCancellationModalShown,
});

export default connect(mapStateToProps, {
  deleteAppointment,
  toggleCancellationModal,
})(AppointmentCancellationModal);
