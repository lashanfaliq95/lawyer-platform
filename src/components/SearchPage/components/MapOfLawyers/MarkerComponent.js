import React, { memo } from 'react';
import {
  string, bool, arrayOf, number,
} from 'prop-types';
import { Marker, Popup } from 'react-leaflet';

import { hoverIcon, icon } from './Icons';

const MarkerComponent = ({
  id, position, address, isHovered,
}) => {
  const onClick = () => {
    console.log(id);
  };
  console.log('rendered', id, position, address, isHovered);
  return (
    <Marker key={id} position={position} onclick={onClick} icon={isHovered ? hoverIcon : icon}>
      <Popup>
        {address}
      </Popup>
    </Marker>
  );
};

MarkerComponent.propTypes = {
  id: string.isRequired,
  position: arrayOf([number, number]).isRequired,
  address: string,
  isHovered: bool,
};

MarkerComponent.defaultProps = {
  address: null,
  isHovered: false,
};

export default memo(MarkerComponent);
