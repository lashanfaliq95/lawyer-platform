import React from 'react';
import { bool, func } from 'prop-types';
import { Button, ModalHeader } from 'reactstrap';

import formatMessage from 'components/formatMessages';

import {
  DeleteAccountModal,
  DeleteAccountModalBody,
  DeleteAccountModalContent,
  DeleteAccountButtonGroup,
} from '../styles';
import messages from '../messages';

const ConfirmDeleteAccountModal = ({ isModalShown, onClose }) => (
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
        <Button color='primary' onClick={() => {}}>
          {formatMessage(messages.deleteAccount)}
        </Button>
      </DeleteAccountButtonGroup>
    </DeleteAccountModalBody>
  </DeleteAccountModal>
);

ConfirmDeleteAccountModal.propTypes = {
  isModalShown: bool,
  onClose: func,
};

ConfirmDeleteAccountModal.defaultProps = {
  isModalShown: false,
  onClose: () => {},
};

export default ConfirmDeleteAccountModal;
