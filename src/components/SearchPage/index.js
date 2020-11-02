import React, { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { arrayOf, shape, func } from 'prop-types';

import './styles.scss';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import ProfileCardList from './components/ProfileCardList';
import MapOfLawyers from './components/MapOfLawyers';
import SearchSummary from './components/SearchSummary';
import FilterBar from './components/FilterBar';

import { getLawyers, getFilters } from './actions';

const position = [51.24192, 6.73521];
const bounds = [
  [51.21873, 6.78126],
  [51.24192, 6.73521],
  [51.23134, 6.78211],
  [51.21826, 6.78228],
  [51.2325, 6.7595],
  [51.2625, 6.8],
];

const SearchPage = ({
  locations,
  users,
  filters,
  activeFilters,
  getLawyers: getLawyersAction,
  getFilters: getFiltersAction,
}) => {
  useEffect(() => {
    getLawyersAction();
    getFiltersAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavigationBar className="search-navbar" showLawyerLogin={false} showSearchInput />
      <Container className="search-page" fluid>
        <Col md="12">
          <Row className="content">
            <Col md="7" className="card-container">
              <SearchSummary
                numberOfResults={3}
                specialization="Anwalt"
                district="Düsseldorf"
              />
              <FilterBar filters={filters} activeFilters={activeFilters} />
              <ProfileCardList users={users} />
            </Col>
            <Col className="map-container" md="5">
              <MapOfLawyers
                position={position}
                bounds={bounds}
                locations={locations}
              />
            </Col>
          </Row>
        </Col>
      </Container>
      <Footer className="search-footer" />
    </>
  );
};

const mapStateToProps = (state) => ({
  locations: state.search.locations,
  users: state.search.users,
  filters: state.search.filters,
  activeFilters: state.search.activeFilters,
});

SearchPage.propTypes = {
  locations: arrayOf(shape({})).isRequired,
  users: arrayOf(shape({})).isRequired,
  filters: shape({}).isRequired,
  activeFilters: shape({}).isRequired,
  getLawyers: func.isRequired,
  getFilters: func.isRequired,
};

export default connect(mapStateToProps, { getLawyers, getFilters })(SearchPage);
