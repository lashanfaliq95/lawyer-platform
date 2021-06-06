import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bool, shape, string } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
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
  className,
  showLawyerLogin,
  showSearchInput,
  isUserLoggedIn,
  searchTerm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  function handleOnProClick() {
    history.push('/pro/register');
  }

  return (
    <Navbar light expand='md' className={className}>
      <div className='nav-brand-link'>
        <Link to='/'>
          <div className='brand-image' />
        </Link>
      </div>
      <NavbarToggler onClick={toggle} />
      {showSearchInput && (
        <div className='nav-search-wrapper'>
          <SearchBar searchTerm={searchTerm} />
        </div>
      )}
      <Collapse isOpen={isOpen} navbar>
        {!isUserLoggedIn ? (
          <Nav className='left-pane' navbar>
            <NavItem className='nav-button-group'>
              {showLawyerLogin && (
                <div className='nav-button-item'>
                  <Button color='link' onClick={handleOnProClick}>
                    {formatMessages(messages.advoplanPro)}
                  </Button>
                </div>
              )}
              <div className='nav-button-item'>
                <Link to='/help' className='no-hover'>
                  <Button color='link' className='black-link'>
                    <Icon name='question-circle' />
                    <span className='nav-text'>
                      {formatMessages(messages.needHelp)}
                    </span>
                  </Button>
                </Link>
              </div>
              <div className='nav-button-item'>
                <Link to='/auth/login' className='no-hover'>
                  <Button color='link' className='black-link'>
                    <Icon name='user-alt' />
                    <span className='nav-text'>
                      {formatMessages(messages.login)}
                    </span>
                  </Button>
                </Link>
              </div>
            </NavItem>
          </Nav>
        ) : (
          <Nav className='left-pane' navbar>
            <NavItem className='nav-button-group'>
              <div className='nav-button-item'>
                <Link to='/' className='no-hover'>
                  <Button color='link' className='logged-in'>
                    <Icon name='home' />
                    <span className='nav-text'>
                      {formatMessages(messages.home)}
                    </span>
                  </Button>
                </Link>
              </div>
              <div className='nav-button-item'>
                <Link to='/appointments' className='no-hover'>
                  <Button color='link' className='logged-in'>
                    <Icon name='calendar-check' />
                    <span className='nav-text'>
                      {formatMessages(messages.appointments)}
                    </span>
                  </Button>
                </Link>
              </div>
              <div className='nav-button-item'>
                <Link to='/help' className='no-hover'>
                  <Button color='link' className='logged-in'>
                    <Icon name='question-circle' />
                    <span className='nav-text'>
                      {formatMessages(messages.needHelp)}
                    </span>
                  </Button>
                </Link>
              </div>
              <div className='nav-button-item'>
                <Link to='/account' className='no-hover'>
                  <Button color='link' className='logged-in'>
                    <Icon name='user-alt' />
                    <span className='nav-text'>
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
  searchTerm: shape({ location: string, nameOrFirm: string }),
};

NavigationBar.defaultProps = {
  className: '',
  showLawyerLogin: true,
  showSearchInput: false,
  searchTerm: {},
};

export default connect((state) => ({
  isUserLoggedIn: state.login.userDetails && !!state.login.userDetails.id,
}))(NavigationBar);
