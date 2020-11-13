import React, { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { arrayOf, shape, func } from 'prop-types';

import './styles.scss';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import GoogleMap from 'components/SearchPage/components/Maps';
import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import ProfileCardList from './components/ProfileCardList';
import SearchSummary from './components/SearchSummary';
import FilterBar from './components/FilterBar';

import { getLawyers, getSearchResult } from './actions';

const mapLocation = {
  lat: 51.24192,
  lng: 6.73521,
};

const SearchPage = ({
  locations,
  users,
  activeFilters,
  getLawyers: getLawyersAction,
  getSearchResult: getSearchResultAction,
  location,
}) => {
  useEffect(() => {
    const { searchTermForNameOrFirm, searchTermForLocation } = location.state || {};
    if (searchTermForNameOrFirm !== '' || searchTermForLocation !== '') {
      getSearchResultAction({ nameOrFirm: searchTermForNameOrFirm });
    } else {
      getLawyersAction();
    }
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
              <FilterBar activeFilters={activeFilters} />
              <HorizontalSeparator color="#EBEBEB" height={1} isContainer />
              <ProfileCardList users={users} />
            </Col>
            <Col className="map-container" md="5">
              <GoogleMap locations={locations} zoomLevel={12} mapLocation={mapLocation} />
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
  activeFilters: state.search.activeFilters,
});

SearchPage.propTypes = {
  locations: arrayOf(shape({})).isRequired,
  users: arrayOf(shape({})).isRequired,
  activeFilters: shape({}).isRequired,
  getLawyers: func.isRequired,
  getSearchResult: func.isRequired,
  location: shape({}).isRequired,
};

export default connect(mapStateToProps, { getLawyers, getSearchResult })(SearchPage);
