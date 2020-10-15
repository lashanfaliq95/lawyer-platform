import React from 'react';
import { Button } from 'reactstrap';
import { string, shape } from 'prop-types';

import './styles.scss';
import formatMessages from 'components/formatMessages';

const ImageCardComponent = (props) => {
  const {
    img, description, title, btnText,
  } = props;
  return (
    <>
      <img className="info-image" src={img} alt="Info images" />
      <p className="info-title">{formatMessages(title)}</p>
      <p className="info-image-description">{formatMessages(description)}</p>
      <Button color="link" className="image-card-btn">{formatMessages(btnText)}</Button>
    </>
  );
};

ImageCardComponent.propTypes = {
  img: string.isRequired,
  title: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }).isRequired,
  description: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }).isRequired,
  btnText: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }).isRequired,
};

export default ImageCardComponent;
