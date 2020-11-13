import React from 'react';
import { bool, number } from 'prop-types';
import { scroller } from 'react-scroll';

import ImageIcon from 'components/Shared/ImageIcon';
import userIcon from 'assets/images/marker_black_white.png';
import blueUserIcon from 'assets/images/marker_blue_white.png';

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
        ? <ImageIcon img={userIcon} />
        : <ImageIcon img={blueUserIcon} />}
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
