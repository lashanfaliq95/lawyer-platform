import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { func, string, number } from 'prop-types';
import {
  Col,
  Button,
  Row,
} from 'reactstrap';

import Calender from 'components/SearchPage/components/Calender';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  id,
  name,
  address,
  imgUrl,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Element name={`profile-card-${id}`}>
      <div
        className={`profile-card ${isHovered ? 'active' : ''}`}
        onMouseEnter={() => {
          onMouseEnterCardAction({ id });
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          onMouseLeaveCardAction({ id });
          setIsHovered(false);
        }}
      >
        <Row>
          <Col md="5">
            <Row style={{ backgroundColor: '#105fbb', width: '100%', height: '100px' }} />
            <img
              className="info-image"
              src={imgUrl}
              alt="Info images"
            />
            <div className="name-section">
              {name}
            </div>
            <div className="address">{address}</div>
            <Button className="appointment-btn">{formatMessages(messages.bookAppointment) }</Button>
          </Col>
          <Col md="7">
            <Calender id={id} />
          </Col>
        </Row>
      </div>
    </Element>
  );
};

ProfileCard.propTypes = {
  onMouseEnterCard: func.isRequired,
  onMouseLeaveCard: func.isRequired,
  id: number.isRequired,
  name: string.isRequired,
  address: string.isRequired,
  imgUrl: string.isRequired,
  // specializationIds: arrayOf(number).isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
