import React from 'react';
import { Container, Col } from 'reactstrap';

import SearchInput from 'components/Shared/SearchInput';
import './styles.scss';

function SearchPage() {
  return (
    <Container className="search-page" fluid>
      <Col md="12">
        <div className="search-input-group">
          <SearchInput sizeInputOne={5} sizeInputTwo={5} offset={1} />
        </div>
      </Col>
    </Container>
  );
}

export default SearchPage;
