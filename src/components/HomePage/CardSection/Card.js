import React from 'react';
import { string } from 'prop-types';

import Icon from 'components/Shared/Icon';

const CardComponent = ({ iconName, title, description }) => (
  <div className="col">
    <Icon name={iconName} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

CardComponent.propTypes = {
  iconName: string,
  title: string.isRequired,
  description: string.isRequired,
};

CardComponent.defaultProps = {
  iconName: '',
};

export default CardComponent;
