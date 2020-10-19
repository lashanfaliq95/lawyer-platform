import React from 'react';
import { Container, Col } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import SearchInput from 'components/Shared/SearchInput';
import messages from '../../messages';

const Search = () => (
  <Container className="image-container">
    <div className="search-input-group">
      <Col md={{ size: 12, offset: 3 }}>
        <h2 className="search-title">{formatMessages(messages.searchText)}</h2>
      </Col>
      <SearchInput className="search-input-responsive" sizeInputOne={4} sizeInputTwo={3} offset={3} transitionText={messages.transitionText} />
    </div>
  </Container>
);

export default Search;
