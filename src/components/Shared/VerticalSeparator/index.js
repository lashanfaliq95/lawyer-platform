import React from 'react';
import { string, number } from 'prop-types';

const VerticalSeparator = ({
  color, width,
}) => (
  <vl
    style={{
      borderLeft: `${width}px solid ${color}`,
    }}
  />
);

VerticalSeparator.propTypes = {
  color: string,
  width: number,
};

VerticalSeparator.defaultProps = {
  color: 'black',
  width: 1,
};

export default VerticalSeparator;
