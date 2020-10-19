/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { string, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FA_SOLID_ICONS, FA_SMALL, FA_TYPE_MAP, FA_SIZE_MAP,
} from './constants';
import './styles.scss';

const getIconClassName = (className, onClick) => {
  if (className && onClick) {
    return `${className} cursor`;
  }

  if (className) {
    return className;
  }

  if (onClick) {
    return 'cursor';
  }
  return '';
};

const Icon = (props) => {
  const {
    color, size, name, type, className, onClick,
  } = props;
  if (!name) {
    return null;
  }
  const faIconType = FA_TYPE_MAP[type] || FA_SOLID_ICONS;
  const faIconSize = FA_SIZE_MAP[size] || FA_SMALL;

  const iconClassName = getIconClassName(className, onClick);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span onClick={onClick || undefined} className={iconClassName}>
      <FontAwesomeIcon icon={[faIconType, name]} size={faIconSize} color={color} />
    </span>
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  type: string,
  className: string,
  onClick: func,
};

Icon.defaultProps = {
  color: '',
  className: '',
  size: 'md',
  type: FA_SOLID_ICONS,
  onClick: null,
};
export default Icon;
