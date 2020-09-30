import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FA_SOLID_ICONS, FA_SMALL, FA_TYPE_MAP, FA_SIZE_MAP,
} from './constants';
import IconWrapper from './styles';

const Icon = (props) => {
  const {
    color, size, name, type, className,
  } = props;

  const faIconType = FA_TYPE_MAP[type] || FA_SOLID_ICONS;
  const faIconSize = FA_SIZE_MAP[size] || FA_SMALL;
  return (
    <IconWrapper className={className || ''}>
      <FontAwesomeIcon icon={[faIconType, name]} size={faIconSize} color={color} />
    </IconWrapper>
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  type: string,
  className: string,
};

Icon.defaultProps = {
  color: '',
  className: '',
  size: 'md',
  type: FA_SOLID_ICONS,
};
export default Icon;
