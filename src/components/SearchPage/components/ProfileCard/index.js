import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { func, string, number, shape } from 'prop-types';
import { Col, Button, Row } from 'reactstrap';

import Calender from 'components/SearchPage/components/Calender';
import formatMessages from 'components/formatMessages';
import { Link } from 'react-router-dom';
import { getJobTitle } from 'components/Shared/utils';
import messages from '../../messages';

import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  user,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    name,
    road,
    houseNumber,
    zipCode,
    city,
    expertId,
    imgUrl,
    gender,
  } = user || {};

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
          <Row className='cover-image' />
          <Col md='5'>
            <Link to={`/search/lawyer-details/${id}`}>
              <img className='info-image' src={imgUrl} alt='Info images' />
              <div className='name-section'>{name}</div>
              <div className='specialization-section'>
                {getJobTitle(expertId, gender)}
              </div>
              <div className='address'>
                {`${road} ${houseNumber} ${zipCode} ${city}`}
              </div>
            </Link>
            <Button className='appointment-btn'>
              {formatMessages(messages.bookAppointment)}
            </Button>
          </Col>
          <Col md='7' className='calender-section'>
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
  user: shape({
    id: number.isRequired,
    name: string.isRequired,
    road: string.isRequired,
    houseNumber: string.isRequired,
    city: string.isRequired,
    zipCode: string.isRequired,
    imgUrl: string.isRequired,
    expertId: number.isRequired,
    gender: string.isRequired,
  }).isRequired,
};

export default connect(null, { onMouseEnterCard, onMouseLeaveCard })(
  ProfileCard,
);
