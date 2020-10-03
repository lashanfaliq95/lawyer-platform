import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.scss';

import SearchInput from 'components/Shared/SearchInput';
import NavigationBar from 'components/CommonComponents/NavigationBar';
import Footer from 'components/CommonComponents/Footer';
import FilterBar from './FilterBar';
import ProfileCardList from './ProfileCardList';
import MapOfLawyers from './MapOfLawyers';

function SearchPage() {
  return (
    <>
      <NavigationBar />
      <Container className="search-page" fluid>
        <Col md="12">
          <div className="search-input-group">
            <SearchInput sizeInputOne={4} sizeInputTwo={4} offset={2} />
          </div>
          <FilterBar />
          <div className="content">
            <Container fluid="md">
              <Row>
                <Col md="7"><ProfileCardList /></Col>
                <Col className="map-container" md="5"><MapOfLawyers /></Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default SearchPage;
