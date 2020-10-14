import React from 'react';
import { Button } from 'reactstrap';
import { string, shape, func } from 'prop-types';

import Icon from 'components/Shared/Icon';
import formatMessages from 'components/formatMessages';

const CardComponent = ({
  iconName, title, description, btnText, onClick,
}) => (
  <div className="col">
    <Icon name={iconName} size="extraLarge" />
    <h4>{formatMessages(title)}</h4>
    <p>{formatMessages(description)}</p>
    {btnText && (
    <Button color="primary" onClick={onClick}>
      {formatMessages(btnText)}
    </Button>
    )}
  </div>
);

CardComponent.propTypes = {
  iconName: string,
  title: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }).isRequired,
  description: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }).isRequired,
  btnText: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }),
  onClick: func,
};

CardComponent.defaultProps = {
  iconName: '',
  btnText: null,
  onClick: () => {},
};

export default CardComponent;
