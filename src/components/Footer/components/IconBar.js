import React from 'react';
import { Row } from 'reactstrap';
import Icon from 'components/Shared/Icon';

const IconBar = () => (
  <Row className="icon-bar">
    <Icon name="facebook-square" type="brand" color="#0596de" size="extraLarge" />
    <Icon name="instagram-square" type="brand" color="#0596de" size="extraLarge" />
    <Icon name="twitter-square" type="brand" color="#0596de" size="extraLarge" />
    <Icon name="medium" type="brand" color="#0596de" size="extraLarge" />
    <Icon name="linkedin" type="brand" color="#0596de" size="extraLarge" />
    <Icon name="medium" type="brand" color="#0596de" size="extraLarge" />
  </Row>
);

export default IconBar;
