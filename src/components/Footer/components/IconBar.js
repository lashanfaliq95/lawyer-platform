import React from 'react';
import { Row } from 'reactstrap';
import Icon from 'components/Shared/Icon';

const IconBar = () => (
  <Row className="icon-bar">
    <Icon name="facebook-f" type="brand" size="large" className="facebook-icon" />
    <Icon name="instagram" type="brand" size="large" />
    <Icon name="linkedin-in" type="brand" size="large" />
  </Row>
);

export default IconBar;
