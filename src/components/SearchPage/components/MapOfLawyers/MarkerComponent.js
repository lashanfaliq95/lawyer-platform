import React, { memo } from 'react';
import { scroller } from 'react-scroll';
import {
  string, bool, arrayOf, number,
} from 'prop-types';
import { Marker, Popup } from 'react-leaflet';

import { hoverIcon, icon } from './Icons';

const MarkerComponent = ({
  id, position, address, isHovered,
}) => {
  const onClick = () => {
    scroller.scrollTo(`profile-card-${id}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
  };

  return (
    <Marker
      key={id}
      position={position}
      onclick={onClick}
      icon={isHovered ? hoverIcon : icon}
    >
      {address && <Popup>{address}</Popup>}
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
