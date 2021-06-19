import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { func, string, number, shape } from 'prop-types';
import { Col, Button, Row } from 'reactstrap';

import Calender from 'components/SearchPage/components/Calender';
import formatMessages from 'components/formatMessages';
import { Link, useHistory } from 'react-router-dom';
import { getJobTitle } from 'components/Shared/utils';
import messages from '../../messages';
import { specializationsFilters } from '../../constants';
import { onMouseEnterCard, onMouseLeaveCard } from '../../actions';

const ProfileCard = ({
  user,
  onMouseEnterCard: onMouseEnterCardAction,
  onMouseLeaveCard: onMouseLeaveCardAction,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

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
    specializationIds,
  } = user || {};

  const lawyerDetailsPageUrl = `/search/lawyer-details/${id}`;

  const onClickBookAppointment = () => {
    history.push(lawyerDetailsPageUrl);
  };

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
            <Link to={lawyerDetailsPageUrl}>
              <img className='info-image' src={imgUrl} alt='Info images' />
              <div className='name-section'>{name}</div>
              <div className='specialization-section'>
                <span>{getJobTitle(expertId, gender)}</span>
                &nbsp;
                {specializationIds && specializationIds.length !== 0 && (
                  <>
                    <span>
                      {formatMessages(messages.for)}
                      &nbsp;
                      {specializationIds &&
                        specializationIds
                          .map(
                            (specializationId) =>
                              specializationsFilters[specializationId]
                                .specialization,
                          )
                          .toString()}
                    </span>
                  </>
                )}
              </div>
              <div className='address'>
                {`${road} ${houseNumber}, ${zipCode} ${city}`}
              </div>
            </Link>
            <Button
              className='appointment-btn'
              onClick={onClickBookAppointment}
            >
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
