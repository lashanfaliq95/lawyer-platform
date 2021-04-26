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

import { getLawyerDetails } from 'components/SearchPage/actions';
import BookAnAppointmentForm from './components/BookAnAppointmentForm';
import messages from './messages';
import { specializationsMap, languageMap, genderMap } from './constants';

const coverImageUrl = 'https://www.zipjob.com/blog/wp-content/uploads/2020/08/linkedin-default-background-cover-photo-1.png';

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
    address,
    mobilePhone,
    email,
    languageIds,
    fax,
    gender,
  } = lawyerDetails || {};

  return (
    <>
      <NavigationBar />
      <Container className={`lawyer-details-page ${className}`} fluid>
        <Row>
          <Col md='8'>
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
                  <span>{genderMap[gender]}</span>
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
                {specializationIds
                  && specializationIds
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
                  <span>{formatMessages(messages.address)}</span>
                  <span>
                    <span className='element-icon'>
                      <Icon name='map-marker-alt' size='large' />
                    </span>
                    {address}
                  </span>
                </div>
                <div className='element'>
                  <span>{formatMessages(messages.access)}</span>
                  <span>
                    <span className='element-icon'>
                      <Icon name='parking' size='large' />
                    </span>
                    {address}
                  </span>
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
                    <span>{formatMessages(messages.Telephone)}</span>
                  </div>
                  <span>{mobilePhone}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='fax' />
                    </div>
                    <span>{formatMessages(messages.Fax)}</span>
                  </div>
                  <span>{fax}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='envelope' />
                    </div>
                    <span>{formatMessages(messages.email)}</span>
                  </div>
                  <span>{email}</span>
                </div>
                <div className='element'>
                  <div className='icon-element'>
                    <div className='icon'>
                      <Icon name='globe' />
                    </div>
                    <span>{formatMessages(messages.Language)}</span>
                  </div>
                  <div className='languages'>
                    {languageIds
                      && languageIds
                        .split(',')
                        .map((id) => <span>{languageMap[id].language}</span>)}
                  </div>
                </div>
              </div>
              <div className='appointment'>
                <span className='title'>
                  {formatMessages(messages.openHours)}
                </span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
              </div>
            </div>
          </Col>
          <Col md='4'>
            <BookAnAppointmentForm />
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
