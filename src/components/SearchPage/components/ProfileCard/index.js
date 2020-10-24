import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import Calendar from 'react-calendar';
import { func, string } from 'prop-types';
import {
  Col,
  Button,
  Row,
} from 'reactstrap';
import 'react-calendar/dist/Calendar.css';

import lawyerImage from 'assets/images/jusge.jpg';
import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  id,
  name,
  jobDescription,
  address,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => setDate({ selectedDate });

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
                  src={lawyerImage}
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
              <Button className="appointment-btn">Button</Button>
            </Row>
          </Col>
          <Col md="7">
            <Calendar
              onChange={onChange}
              value={date}
            />
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
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
