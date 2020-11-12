import React from 'react';
import { bool, number } from 'prop-types';
import { scroller } from 'react-scroll';
import Icon from '../Icon';

const LocationPin = ({
  id, isHovered,
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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={onClick} role="button" tabIndex={0} className="location-pin">

      {!isHovered
        ? <Icon name="map-marker-alt" className="pin" size="extraLarge" />
        : <Icon name="map-marker" className="pin" size="extraLarge" />}

      {/* <p className="pin-text">{address}</p> */}
    </div>
  );
};

LocationPin.propTypes = {
  id: number.isRequired,
  isHovered: bool,
};

LocationPin.defaultProps = {
  isHovered: false,
};

export default LocationPin;
