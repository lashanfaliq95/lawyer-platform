import React from 'react';
import { Row } from 'reactstrap';
import Icon from 'components/Shared/Icon';

const IconBar = () => (
  <Row className="icon-bar">
    <Icon name="facebook-square" type="brand" color="white" size="large" />
    <Icon name="instagram-square" type="brand" color="white" size="large" />
    <Icon name="linkedin" type="brand" color="white" size="large" />
  </Row>
);

export default IconBar;
