import React from 'react';
import {
  Container, InputGroup, Button, InputGroupAddon,
} from 'reactstrap';

import InputWithIcon from 'components/Shared/InputWithIcon';
import formatMessages from 'components/formatMessages';
import messages from '../messages';

const Search = () => (
  <Container className="image-container">
    <div className="search-input-group">
      <h2 className="search-title">{formatMessages(messages.searchText)}</h2>

      <InputGroup>
        <InputWithIcon name="search" color="grey" placeholder="z.B. Notar oder Herr Müller" width={352} />
        <InputWithIcon name="map-marker-alt" color="grey" placeholder="z.B. Köln oder 50678" width={311} />
        <InputGroupAddon addonType="append"><Button color="warning">{formatMessages(messages.search)}</Button></InputGroupAddon>
      </InputGroup>
    </div>
  </Container>
);

export default Search;
