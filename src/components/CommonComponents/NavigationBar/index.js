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
import formatMessages from 'components/formatMessages';
import Icon from 'components/Shared/Icon';
import messages from './messages';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar light expand="md">
        <Link to="/">
          avoplan
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button outline>
                <span>
                  {formatMessages(messages.areYouALawyer)}
                </span>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="link ">
                <Icon name="question-circle" />
                <span>
                  {formatMessages(messages.needHelp)}
                </span>
              </Button>
            </NavItem>
            <NavItem>
              <Link to="/login">
                <Button color="link">
                  <Icon name="user-circle" />
                  <span>
                    {formatMessages(messages.login)}
                  </span>
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>

  );
};

export default NavigationBar;
