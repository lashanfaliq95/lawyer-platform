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
import SearchBar from 'components/SearchPage/components/SearchBar';
import messages from './messages';

const NavigationBar = ({ className, showLawyerLogin, showSearchInput }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className={className}>
      <div className="nav-brand-link">
        <Link to="/">
          <div className="brand-image" />
        </Link>
      </div>
      <NavbarToggler onClick={toggle} />
      {showSearchInput && (
        <SearchBar />
      )}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="left-pane" navbar>

          <NavItem className="nav-button-group">
            {showLawyerLogin && (
              <div className="nav-button-item">
                <Button color="link">
                  {formatMessages(messages.advoplanPro)}
                </Button>
              </div>
            )}
            <div className="nav-button-item">
              <Button
                color="link"
                className="black-link"
              >
                <Icon name="question-circle" />
                <span className="nav-text">
                  {formatMessages(messages.needHelp)}
                </span>
              </Button>
            </div>
            <div className="nav-button-item">
              <Link to="/auth/login" className="no-hover">
                <Button
                  color="link"
                  className="black-link"
                >
                  <Icon name="user-alt" />
                  <span className="nav-text">
                    {formatMessages(messages.login)}
                  </span>
                </Button>
              </Link>
            </div>
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
