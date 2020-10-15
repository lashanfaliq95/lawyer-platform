import React from 'react';
import { string, shape, func } from 'prop-types';

import './styles.scss';
import formatMessages from 'components/formatMessages';
import BTButton from 'components/Shared/BottomTransitionButton';

const ImageCardComponent = (props) => {
  const {
    img, description, title, btnText, onClick,
  } = props;
  return (
    <>
      <img className="info-image" src={img} alt="Info images" />
      <p className="info-title">{formatMessages(title)}</p>
      <p className="info-image-description">{formatMessages(description)}</p>
      <BTButton btnText={btnText} onClick={onClick} />
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
  onClick: func.isRequired,
};

export default ImageCardComponent;
