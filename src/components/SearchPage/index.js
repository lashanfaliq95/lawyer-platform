import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';

import './styles.scss';

import SearchInput from 'components/Shared/SearchInput';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import ProfileCardList from './components/ProfileCardList';
import MapOfLawyers from './components/MapOfLawyers';
import SearchSummary from './components/SearchSummary';
import FilterBar from './components/FilterBar';

const position = [51.241920, 6.735210];
const bounds = [
  [51.218730, 6.781260],
  [51.241920, 6.735210],
  [51.231340, 6.782110], [51.218260, 6.782280], [51.232500, 6.759500], [51.262500, 6.8]];

const SearchPage = ({ locations, users }) => (
  <>
    <NavigationBar />
    <Container className="search-page" fluid>
      <Col md="12">
        <Row className="content">
          <Col md="6" className="card-container">
            <SearchInput className="search-bar" sizeInputOne={6} sizeInputTwo={4} offset={0} />
            <SearchSummary numberOfResults={0} specialization="lawyer" district="linden" />
            <FilterBar />
            <ProfileCardList users={users} />
          </Col>
          <Col className="map-container" md="6">
            <MapOfLawyers position={position} bounds={bounds} locations={locations} />
          </Col>
        </Row>
      </Col>
    </Container>

    <Footer className="search-footer" />
  </>
);

const mapStateToProps = (state) => ({
  locations: state.search.locations,
  users: state.search.users,
});

SearchPage.propTypes = {
  locations: arrayOf(shape({})).isRequired,
  users: arrayOf(shape({})).isRequired,
};

export default connect(mapStateToProps)(SearchPage);
