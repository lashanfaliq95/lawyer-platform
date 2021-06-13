import React from 'react';

import Icon from 'components/Shared/Icon';
import formatMessages from 'components/formatMessages';

import messages from '../messages';
import { Card, CartTitle, CardBody, CardContent, CardBtn } from '../styles';

const InfoSectionContainer = () => (
  <Card secondary style={{ width: '33%' }}>
    <CartTitle>{formatMessages(messages.infoTitle)}</CartTitle>
    <CardBody>
      <Icon name='lock' size='extraLarge' />
      <CardContent>{formatMessages(messages.infoContent)}</CardContent>
    </CardBody>
    <CardBtn>{formatMessages(messages.learnMore)}</CardBtn>
  </Card>
);

export default InfoSectionContainer;
