import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const NavigationBar = ({
  className, showLawyerLogin, showSearchInput, isUserLoggedIn,
}) => {
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
        <div className="nav-search-wrapper">
          <SearchBar />
        </div>
      )}
      <Collapse isOpen={isOpen} navbar>
        {!isUserLoggedIn
          ? (
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
          ) : (
            <Nav className="left-pane" navbar>
              <NavItem className="nav-button-group">
                <div className="nav-button-item">
                  <Link to="/" className="no-hover">
                    <Button
                      color="link"
                      className="logged-in"
                    >
                      <Icon name="home" />
                      <span className="nav-text">
                        {formatMessages(messages.home)}
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="nav-button-item">
                  <Link to="/appointments" className="no-hover">
                    <Button
                      color="link"
                      className="logged-in"
                    >
                      <Icon name="calendar-check" />
                      <span className="nav-text">
                        {formatMessages(messages.appointments)}
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="nav-button-item">
                  <Link to="/auth/login" className="no-hover">
                    <Button
                      color="link"
                      className="logged-in"
                    >
                      <Icon name="question-circle" />
                      <span className="nav-text">
                        {formatMessages(messages.needHelp)}
                      </span>
                    </Button>
                  </Link>
                </div>
                <div className="nav-button-item">
                  <Link to="/auth/login" className="no-hover">
                    <Button
                      color="link"
                      className="logged-in"
                    >
                      <Icon name="user-alt" />
                      <span className="nav-text">
                        {formatMessages(messages.myAccount)}
                      </span>
                    </Button>
                  </Link>
                </div>
              </NavItem>
            </Nav>
          )}
      </Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  className: string,
  showLawyerLogin: bool,
  showSearchInput: bool,
  isUserLoggedIn: bool.isRequired,
};

NavigationBar.defaultProps = {
  className: '',
  showLawyerLogin: true,
  showSearchInput: false,
};

export default connect((state) => ({
  isUserLoggedIn: state.login.userDetails && !!state.login.userDetails.id,
}))(NavigationBar);
