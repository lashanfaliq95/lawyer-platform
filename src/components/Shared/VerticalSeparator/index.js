import React from 'react';
import { string, number } from 'prop-types';

const VerticalSeparator = ({
  color, width, className,
}) => (
  <vl
    className={className}
    style={{
      borderLeft: `${width}px solid ${color}`,
    }}
  />
);

VerticalSeparator.propTypes = {
  color: string,
  width: number,
  className: string,
};

VerticalSeparator.defaultProps = {
  color: 'black',
  width: 1,
  className: '',
};

export default VerticalSeparator;
