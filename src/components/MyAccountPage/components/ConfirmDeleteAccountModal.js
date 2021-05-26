import React from 'react';
import { useDispatch } from 'react-redux';
import { bool, func } from 'prop-types';
import { Button, ModalHeader } from 'reactstrap';

import { deleteUser } from 'components/LoginPage/actions';
import formatMessage from 'components/formatMessages';

import {
  DeleteAccountModal,
  DeleteAccountModalBody,
  DeleteAccountModalContent,
  DeleteAccountButtonGroup,
} from '../styles';
import messages from '../messages';

const ConfirmDeleteAccountModal = ({ isModalShown, onClose }) => {
  const dispatch = useDispatch();

  return (
    <DeleteAccountModal
      isOpen={isModalShown}
      onClosed={() => {
        onClose();
      }}
    >
      <ModalHeader>{formatMessage(messages.deleteAccount)}</ModalHeader>
      <DeleteAccountModalBody>
        <DeleteAccountModalContent>
          {formatMessage(messages.deleteAccountModalContent)}
        </DeleteAccountModalContent>
        <DeleteAccountButtonGroup>
          <Button color='secondary' onClick={onClose}>
            {formatMessage(messages.no)}
          </Button>
          <Button color='primary' onClick={() => dispatch(deleteUser())}>
            {formatMessage(messages.deleteAccount)}
          </Button>
        </DeleteAccountButtonGroup>
      </DeleteAccountModalBody>
    </DeleteAccountModal>
  );
};

ConfirmDeleteAccountModal.propTypes = {
  isModalShown: bool,
  onClose: func,
};

ConfirmDeleteAccountModal.defaultProps = {
  isModalShown: false,
  onClose: () => {},
};

export default ConfirmDeleteAccountModal;
