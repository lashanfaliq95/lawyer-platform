import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import {
  func, string, number,
} from 'prop-types';
import {
  Col,
  Button,
  Row,
} from 'reactstrap';

import Calender from 'components/SearchPage/components/Calender';
import formatMessages from 'components/formatMessages';
import { Link } from 'react-router-dom';
import messages from '../../messages';

import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  id,
  name,
  address,
  imgUrl,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
  type,
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
          <Row
            className="cover-image"
          />
          <Col md="5">
            <Link to={`/search/lawyer-details/${id}`}>
              <img
                className="info-image"
                src={imgUrl}
                alt="Info images"
              />
              <div className="name-section">
                {name}
              </div>
              <div className="specialization-section">
                {type}
              </div>
              <div className="address">{address}</div>
            </Link>
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
  type: string.isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
