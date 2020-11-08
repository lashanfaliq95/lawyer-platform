import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { func, string } from 'prop-types';
import {
  Col,
  Button,
  Row,
} from 'reactstrap';

import Calender from 'components/Shared/Calender';
import formatMessages from 'components/formatMessages';
import messages from '../../messages';

import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  id,
  name,
  jobDescription,
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
            <Row>
              <Col md="4">
                <img
                  className="info-image"
                  src={imgUrl}
                  alt="Info images"
                />
              </Col>
              <Col md="8" className="name-section">
                <Button className="name-btn" color="link">
                  {name}
                </Button>
                <span className="job-description">{jobDescription}</span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 7, offset: 4 }}>
                <div />
                <div className="address">{address}</div>
                <span className="agreement-type">Sector 1</span>
              </Col>
            </Row>
            <Row className="make-appointment-btn-row">
              <Button className="appointment-btn">{formatMessages(messages.bookAppointment) }</Button>
            </Row>
          </Col>
          <Col md="7">
            <Calender buttonText={messages.displayMore} id={id} />
          </Col>
        </Row>
      </div>
    </Element>
  );
};

ProfileCard.propTypes = {
  onMouseEnterCard: func.isRequired,
  onMouseLeaveCard: func.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  jobDescription: string.isRequired,
  address: string.isRequired,
  imgUrl: string.isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
