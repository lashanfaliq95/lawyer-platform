import React, { useState } from 'react';

import Icon from 'components/Shared/Icon';
import formatMessages from 'components/formatMessages';
import ConfirmLogoutModal from './ConfirmDeleteAccountModal';

import messages from '../messages';
import {
  CartTitle,
  CardExternalTitle,
  CardBody,
  CardContent,
  Card,
} from '../styles';

const AdminCard = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <Card>
        <CardExternalTitle>{formatMessages(messages.admin)}</CardExternalTitle>
        <CartTitle>{formatMessages(messages.deleteAccount)}</CartTitle>
        <CardBody>
          <Icon name='user' size='large' color='grey' />
          <div
            role='button'
            tabIndex='0'
            onClick={() => setIsModalShown(true)}
            onKeyDown={() => {}}
          >
            <CardContent>{formatMessages(messages.adminContent)}</CardContent>
            <Icon name='chevron-right' size='large' color='grey' />
          </div>
        </CardBody>
      </Card>
      {isModalShown && (
        <ConfirmLogoutModal
          isModalShown={isModalShown}
          onClose={() => {
            setIsModalShown(false);
          }}
        />
      )}
    </>
  );
};

export default AdminCard;
