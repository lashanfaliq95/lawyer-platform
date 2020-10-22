import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import './styles.scss';

import SearchInput from 'components/Shared/SearchInput';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import ProfileCardList from './components/ProfileCardList';
import MapOfLawyers from './components/MapOfLawyers';

const position = [52.150002, 10.333333];
const bounds = [[52.150002, 10.333333], [52.150002, 20], [42.150002, 20]];

const SearchPage = ({ locations }) => (
  <>
    <NavigationBar />
    <Container className="search-page" fluid>
      <Col md="12">
        <Row className="content">
          <Col md="7" className="card-container">
            <Row>
              <ProfileCardList />
            </Row>
            <SearchInput sizeInputOne={4} sizeInputTwo={4} offset={2} />
          </Col>
          <Col className="map-container" md="5">
            <MapOfLawyers position={position} bounds={bounds} locations={locations} />
          </Col>
        </Row>
      </Col>

    </Container>
    <Footer className="search-footer" />
  </>
);

const mapStateToProps = (state) => ({ locations: state.locations });

SearchPage.propTypes = {
  locations: arrayOf(shape({})).isRequired,
};

export default connect(mapStateToProps)(SearchPage);
