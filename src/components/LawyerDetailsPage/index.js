import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';
import { Container, Col, Row } from 'reactstrap';

import './styles.scss';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import GoogleMap from 'components/Shared/Maps';
import formatMessages from 'components/formatMessages';
import Icon from 'components/Shared/Icon';

import { getJobTitle } from 'components/Shared/utils';
import { getLawyerDetails } from 'components/SearchPage/actions';
import { DAYS } from 'components/Shared/messages';
import BookAnAppointmentForm from './components/BookAnAppointmentForm';
import messages from './messages';
import { specializationsMap, languageMap } from './constants';

const coverImageUrl =
  'https://career-lunch-storage.s3.eu-central-1.amazonaws.com/v2/blog/articles/linkedin-title-picture.jpg';

const LawyerDetailsPage = ({
  className,
  lawyerDetails,
  getLawyerDetails: getLawyerDetailsAction,
  match,
}) => {
  useEffect(() => {
    getLawyerDetailsAction(match.params.id);
  }, [getLawyerDetailsAction, match.params.id]);

  const {
    name,
    imgUrl,
    specializationIds,
    latitude,
    longitude,
    road,
    houseNumber,
    zipCode,
    city,
    expertId,
    mobilePhone,
    email,
    languageIds,
    fax,
    gender,
    legalIssues,
    isLawyerAcceptingNewClients,
    isLawyerOfferingPhoneAndVisitingAppointments,
    isRequireShortSummary,
    isAppointmentRequireApproval,
    lawyersOfFirm,
  } = lawyerDetails || {};

  return (
    <>
      <NavigationBar />
      <Container className={`lawyer-details-page ${className}`} fluid>
        <Row>
          <Col md='7'>
            <div className='image section'>
              <div
                className='cover-photo'
                style={{ backgroundImage: `url(${coverImageUrl})` }}
              />
              <div
                className='profile-photo'
                style={{ backgroundImage: `url(${imgUrl})` }}
              />
              <div className='details'>
                <div className='name-gender'>
                  <span style={{ fontWeight: 'bold' }}>{name}</span>
                  <span>{getJobTitle(expertId, gender)}</span>
                </div>
              </div>
            </div>
            <div className='info section'>
              <span className='title'>Info</span>
              <div className='content'>
                {formatMessages(messages.infoText, { br: <br /> })}
              </div>
            </div>
            <div className='specialization section'>
              <span className='title'>
                {formatMessages(messages.specialization)}
              </span>
              <div className='content'>
                {specializationIds &&
                  specializationIds
                    .split(',')
                    .map((id) => (
                      <span className='element'>
                        {specializationsMap[id].specialization}
                      </span>
                    ))}
              </div>
            </div>
            <div className='location section'>
              <div className='address'>
                <div className='title'>{formatMessages(messages.location)}</div>
                <div className='element'>
                  <span className='title'>
                    {formatMessages(messages.address)}
                  </span>
                  <div className='content'>
                    <span className='element-icon'>
                      <Icon name='map-marker-alt' size='large' />
                    </span>
                    <span>
                      {`${road} ${houseNumber}`}
                      <br />
                      {` ${zipCode} ${city}`}
                    </span>
                  </div>
                </div>
                <div className='element'>
                  <span className='title'>
                    {formatMessages(messages.access)}
                  </span>
                  <div className='content'>
                    <span className='element-icon'>
                      <Icon name='parking' size='large' />
                    </span>
                    <span>{houseNumber}</span>
                  </div>
                </div>
              </div>
              <div className='map-section'>
                {latitude && longitude && (
                  <GoogleMap
                    locations={[{ latitude, longitude }]}
                    zoomLevel={12}
                    mapLocation={{ lat: latitude, lng: longitude }}
                  />
                )}
              </div>
            </div>
            <div className='contact-appointment section'>
              <div className='contact'>
                <span className='title'>
                  {formatMessages(messages.contact)}
                </span>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='phone' />
                    </div>
                    <span className='detail-header'>
                      {formatMessages(messages.Telephone)}
                    </span>
                  </div>
                  <span>{mobilePhone}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='fax' />
                    </div>
                    <span className='detail-header'>
                      {formatMessages(messages.Fax)}
                    </span>
                  </div>
                  <span>{fax || 'mock fax'}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='envelope' />
                    </div>
                    <span className='detail-header'>
                      {formatMessages(messages.email)}
                    </span>
                  </div>
                  <span>{email}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='globe' />
                    </div>
                    <span className='detail-header'>
                      {formatMessages(messages.Language)}
                    </span>
                  </div>
                  <div className='languages'>
                    {languageIds &&
                      languageIds
                        .split(',')
                        .map((id) => <span>{languageMap[id].language}</span>)}
                  </div>
                </div>
              </div>
              <div className='appointment'>
                <span className='title'>
                  {formatMessages(messages.openHours)}
                </span>
                <span className='day'>{formatMessages(DAYS.monday)}</span>
                <span className='time-range'>8:30-13:00</span>

                <span className='day'>{formatMessages(DAYS.tuesday)}</span>
                <span className='time-range'>8:30-13:00</span>

                <span className='day'>{formatMessages(DAYS.wednesday)}</span>
                <span className='time-range'>8:30-13:00</span>

                <span className='day'>{formatMessages(DAYS.thursday)}</span>
                <span className='time-range'>8:30-13:00</span>

                <span className='day'>{formatMessages(DAYS.friday)}</span>
                <span className='time-range'>8:30-13:00</span>

                <span className='day'>{formatMessages(DAYS.saturday)}</span>
                <span className='time-range'>8:30-13:00</span>
              </div>
            </div>
          </Col>
          <Col md={{ size: '3', offset: '1' }}>
            <BookAnAppointmentForm
              legalIssues={legalIssues}
              isLawyerAcceptingNewClients={!!isLawyerAcceptingNewClients}
              isLawyerOfferingPhoneAndVisitingAppointments={
                !!isLawyerOfferingPhoneAndVisitingAppointments
              }
              isRequireShortSummary={!!isRequireShortSummary}
              isAppointmentRequireApproval={!!isAppointmentRequireApproval}
              lawyersOfFirm={lawyersOfFirm || []}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

LawyerDetailsPage.propTypes = {
  className: string,
  getLawyerDetails: func.isRequired,
  match: shape({}).isRequired,
  lawyerDetails: shape({}).isRequired,
};

LawyerDetailsPage.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => ({
  lawyerDetails: state.search.lawyerDetails,
});

export default connect(mapStateToProps, { getLawyerDetails })(
  LawyerDetailsPage,
);
