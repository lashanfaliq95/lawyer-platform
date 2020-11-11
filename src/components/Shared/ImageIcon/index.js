import React from 'react';
import { string } from 'prop-types';
import './styles.scss';

const ImageIcon = ({ img, left, top }) => (
  <div style={{ left, top }} className="image-icon-wrapper">
    <img src={img} alt="icon" />
  </div>
);

ImageIcon.propTypes = {
  img: string.isRequired,
  left: string.isRequired,
  top: string.isRequired,
};

export default ImageIcon;
