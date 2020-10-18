import React from 'react';
import { Button } from 'reactstrap';
import {
  string, shape, func, bool,
} from 'prop-types';

import Icon from 'components/Shared/Icon';
import formatMessages from 'components/formatMessages';

const CardComponent = ({
  iconName,
  title,
  description,
  btnText,
  onClick,
  btnClass,
  btnOutline,
  isTitleBold,
}) => (
  <div className="col">
    <Icon name={iconName} size="extraLarge" />
    <h4 style={{ fontWeight: `${isTitleBold ? 'bold' : 'inherit'}` }}>{formatMessages(title)}</h4>
    <p>{formatMessages(description)}</p>
    {btnText && (
      <Button className={btnClass} outline={btnOutline} onClick={onClick}>
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
  btnClass: string,
  btnOutline: bool,
  isTitleBold: bool,
};

CardComponent.defaultProps = {
  iconName: '',
  btnText: null,
  onClick: () => {},
  btnClass: '',
  btnOutline: false,
  isTitleBold: false,
};

export default CardComponent;
