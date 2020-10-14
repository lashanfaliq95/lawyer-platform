import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './styles.scss';

import SearchInput from 'components/Shared/SearchInput';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import FilterBar from './components/FilterBar';
import ProfileCardList from './components/ProfileCardList';
import MapOfLawyers from './components/MapOfLawyers';

const position = [52.150002, 10.333333];
const bounds = [[52.150002, 10.333333], [52.150002, 20], [42.150002, 20]];
const addressMap = [{ position: [52.150002, 10.333333], address: 'strin 1' }, { position: [52.150002, 20], address: 'strin 2' }, { position: [42.150002, 20], address: 'strin 3' }];

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
                <Col className="map-container" md="5"><MapOfLawyers position={position} bounds={bounds} addressMap={addressMap} /></Col>
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
