import React from 'react';
import { string, number } from 'prop-types';
import StyledIcon from './styles';

const Icon = (props) => {
  const {
    color, size, name,
  } = props;
  return (
    <StyledIcon
      className={`material-icons md-icon-${size}`}
      color={color}
    >
      {name}
    </StyledIcon>
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: number,
};

Icon.defaultProps = {
  color: '',
  size: 16,
};
export default Icon;
