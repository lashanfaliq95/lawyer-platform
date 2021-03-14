import React from 'react';
import { Container, Col } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import SearchInput from 'components/Shared/SearchInputUpdated';
import messages from '../../messages';

const Search = () => (
  <Container className="top-image-container" fluid>
    <Col md={{ size: 12 }}>
      <div className="search-input-group">
        <h1 className="search-title">{formatMessages(messages.searchText)}</h1>
      </div>
      <SearchInput
        sizeInputOne={4}
        sizeInputTwo={3}
        offset={0}
        transitionText={messages.transitionText}
      />
    </Col>
    {/* <SearchBar shouldRedirectToSearch /> */}
  </Container>
);

export default Search;
