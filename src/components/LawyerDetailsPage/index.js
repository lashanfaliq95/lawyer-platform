import React from 'react';
import { string } from 'prop-types';
import { Container, Col, Row } from 'reactstrap';

import './styles.scss';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import GoogleMap from 'components/Shared/Maps';
import formatMessages from 'components/formatMessages';

import BookAnAppointmentForm from './components/BookAnAppointmentForm';
import messages from './messages';

const coverImageUrl = 'https://www.zipjob.com/blog/wp-content/uploads/2020/08/linkedin-default-background-cover-photo-1.png';
const profileImageUrl = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
const mapLocation = {
  lat: 51.24192,
  lng: 6.73521,
};
const locations = [{
  id: 1,
  latitude: 51.21873,
  longitude: 6.78126,
  position: [51.21873, 6.78126],
  address: 'strin 1',
  isHovered: false,
},
{
  id: 2,
  latitude: 51.24192,
  longitude: 6.73521,
  position: [51.24192, 6.73521],
  address: 'strin 2',
  isHovered: false,
},
{
  id: 3,
  latitude: 51.23134,
  longitude: 6.78211,
  position: [51.23134, 6.78211],
  address: 'strin 3',
  isHovered: false,
},
{
  id: 4,
  latitude: 51.21826,
  longitude: 6.78228,
  position: [51.21826, 6.78228],
  address: 'strin 3',
  isHovered: false,
},
{
  id: 5,
  latitude: 51.2325,
  longitude: 6.7595,
  position: [51.2325, 6.7595],
  address: 'strin 3',
  isHovered: false,
},
{
  id: 6,
  latitude: 51.2625,
  longitude: 6.8,
  position: [51.2625, 6.8],
  address: 'strin 3',
  isHovered: false,
},
];

const LawyerDetailsPage = ({ className }) => (
  <>
    <NavigationBar />
    <Container className={`lawyer-details-page ${className}`} fluid>
      <Row>
        <Col md="8">
          <div className="image section">
            <div className="cover-photo" style={{ backgroundImage: `url(${coverImageUrl})` }} />
            <div className="profile-photo" style={{ backgroundImage: `url(${profileImageUrl})` }} />
            <div className="details">
              <div className="name-gender">
                <span style={{ fontWeight: 'bold' }}>Name</span>
                <span>Gender</span>
              </div>
            </div>
          </div>
          <div className="info section">
            <span className="title">
              info
            </span>
            <div className="content">
              {formatMessages(messages.infoText, { br: <br /> })}
            </div>
          </div>
          <div className="specialization section">
            <span className="title">
              {formatMessages(messages.specialization)}
            </span>
            <div className="content">
              Lawyer notary consultant expert
            </div>
          </div>
          <div className="location section">
            <div className="address">
              {formatMessages(messages.location)}
              {formatMessages(messages.address)}
              {formatMessages(messages.access)}
            </div>
            <div className="map-section">
              <GoogleMap locations={locations} zoomLevel={12} mapLocation={mapLocation} />
            </div>
          </div>
          <div className="contact-appointment section">
            <div className="contact">
              {formatMessages(messages.contact)}
              <span>
                {formatMessages(messages.Telephone)}
              </span>
              <span>adsadas asdas</span>
              <span>
                {formatMessages(messages.Fax)}
              </span>
              <span>adsadas asdas</span>
              <span>
                {formatMessages(messages.email)}
              </span>
              <span>adsadas asdas</span>
              <span>
                {formatMessages(messages.Language)}
              </span>
              <span>adsadas asdas</span>
            </div>
            <div className="appointment">
              {formatMessages(messages.openHours)}
              <span>adsadas asdas</span>
              <span>adsadas asdas</span>
              <span>adsadas asdas</span>
              <span>adsadas asdas</span>
              <span>adsadas asdas</span>
              <span>adsadas asdas</span>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="right section">
            <div className="title">{formatMessages(messages.bookAppointmentOnline)}</div>
            <div className="form">
              <BookAnAppointmentForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </>
);

LawyerDetailsPage.propTypes = {
  className: string,
};

LawyerDetailsPage.defaultProps = {
  className: '',
};

export default LawyerDetailsPage;
