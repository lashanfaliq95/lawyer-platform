import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const FilterBar = () => (
  <div className="filter-bar">
    <Col md={{ offset: 2 }}>
      <p className="title">FILTER BY </p>
    </Col>
    <Col>
      <ListGroup horizontal>
        <ListGroupItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>Dapibus ac facilisis in</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ListGroupItem>
        <ListGroupItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>Morbi leo risus</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ListGroupItem>
        <ListGroupItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>Porta ac consectetur ac</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ListGroupItem>
        <ListGroupItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>Vestibulum at eros</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ListGroupItem>
      </ListGroup>
    </Col>
  </div>
);

export default FilterBar;
