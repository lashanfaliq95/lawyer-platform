import React from 'react';
import { string, number } from 'prop-types';

const HorizontalSeparator = ({ color, height }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: { height },
    }}
  />
);
HorizontalSeparator.propTypes = {
  color: string,
  height: number,
};

HorizontalSeparator.defaultProps = {
  color: 'black',
  height: 1,
};

export default HorizontalSeparator;
