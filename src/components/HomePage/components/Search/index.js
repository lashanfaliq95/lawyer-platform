import React from 'react';
import { Container, Col } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import SearchInput from 'components/Shared/SearchBar';
import messages from '../../messages';

const Search = () => (
  <Container className="top-image-container" fluid>
    <Col md={{ size: 12 }}>
      <div className="search-input-group">
        <h1 className="search-title">{formatMessages(messages.searchText)}</h1>
      </div>
      <div className="home-page-search-bar">
        <SearchInput isLinkToSearch />
      </div>
    </Col>
  </Container>
);

export default Search;
