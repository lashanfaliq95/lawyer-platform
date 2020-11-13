import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import {
  func, string, number, arrayOf,
} from 'prop-types';
import {
  Col,
  Button,
  Row,
} from 'reactstrap';

import Calender from 'components/SearchPage/components/Calender';
import formatMessages from 'components/formatMessages';
import { specializationsMap } from 'components/SearchPage/constants';
import messages from '../../messages';

import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  id,
  name,
  address,
  imgUrl,
  firm,
  specializationIds,
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
                <span className="job-description">{firm}</span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} className="specialization-section">
                <div className="specialization-Buttons">
                  {specializationIds ? specializationIds.map(
                    (specializationId) => (
                      <Button color="primary" key={specializationId}>
                        {specializationsMap[specializationId].specilization}
                      </Button>
                    ),
                  ) : null}
                </div>
                <div className="address">{address}</div>
                <Button className="appointment-btn">{formatMessages(messages.bookAppointment) }</Button>
              </Col>
            </Row>
            <Row className="make-appointment-btn-row" />
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
  firm: string.isRequired,
  specializationIds: arrayOf(number).isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
