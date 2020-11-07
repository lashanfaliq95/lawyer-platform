import React, { useState } from 'react';
import { bool, string } from 'prop-types';
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
import SearchBar from 'components/Shared/SearchBar';
import messages from './messages';

const NavigationBar = ({ className, showLawyerLogin, showSearchInput }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className={className}>
      <Link to="/">
        {formatMessages(messages.brandName)}
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {showSearchInput
          && (
          <NavItem><SearchBar /></NavItem>
          )}
          <NavItem className="nav-button-group">
            {showLawyerLogin && (
            <NavItem>
              <Button outline>
                <span>
                  {formatMessages(messages.areYouALawyer)}
                </span>
              </Button>
            </NavItem>
            )}
            <Button className="nav-button">
              <Icon name="question-circle" />
              <span className="nav-text">
                {formatMessages(messages.needHelp)}
              </span>
            </Button>
            <Link to="/auth/login" className="no-hover">
              <Button className="nav-button">
                <Icon name="user-alt" />
                <span className="nav-text">
                  {formatMessages(messages.login)}
                </span>
              </Button>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  className: string,
  showLawyerLogin: bool,
  showSearchInput: bool,
};

NavigationBar.defaultProps = {
  className: '',
  showLawyerLogin: true,
  showSearchInput: false,
};

export default NavigationBar;
