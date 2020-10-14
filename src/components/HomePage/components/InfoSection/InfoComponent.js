import React from 'react';
import { Col } from 'reactstrap';
import { string } from 'prop-types';

const InfoComponent = (props) => {
  const { img, description } = props;
  return (
    <Col md="3">
      <img className="info-image" src={img} alt="Info images" />
      <p className="info-image-description">{description}</p>
    </Col>
  );
};

InfoComponent.propTypes = {
  img: string.isRequired,
  description: string.isRequired,

};

export default InfoComponent;
