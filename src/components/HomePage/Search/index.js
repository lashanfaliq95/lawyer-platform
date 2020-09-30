import React from 'react';
import {
  Container, InputGroup, Button, InputGroupAddon,
} from 'reactstrap';

import InputWithIcon from 'components/Shared/InputWithIcon';

const Search = () => (
  <Container className="image-container">
    <div className="search-input-group">
      <h2 className="search-title">Book a Lawyer or have a consultation, reserve easily </h2>

      <InputGroup>
        <InputWithIcon name="search" color="grey" placeholder="tets placehlder" width={352} />
        <InputWithIcon name="map-marker-alt" color="grey" placeholder="tets placehlder" width={311} />
        <InputGroupAddon addonType="append"><Button color="warning">Search</Button></InputGroupAddon>
      </InputGroup>
    </div>
  </Container>
);

export default Search;
