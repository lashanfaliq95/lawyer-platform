import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

import './styles.scss';
import messages from './messages';
import formatMessages from '../formatMessages';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <Link to="/">
        avoplan
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Button outline>
              {formatMessages(messages.areYouALawyer)}
            </Button>
          </NavItem>
          <NavItem>
            <Button color="link ">
              <i className="material-icons md-icon-16 ">help</i>
              <span>
                {formatMessages(messages.needHelp)}
              </span>
            </Button>
          </NavItem>
          <NavItem>
            <Button color="link ">
              <i className="material-icons md-icon-16 ">account_circle</i>
              <span>
                {formatMessages(messages.login)}
              </span>
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
