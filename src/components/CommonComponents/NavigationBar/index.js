import React, { Fragment, useState } from 'react';
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
import LoginModal from 'components/Shared/Modal';
import messages from './messages';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const onClickLogin = () => {
    setIsLoginModalVisible(true);
  };

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
              <Button color="link" onClick={onClickLogin}>
                <Icon name="user-circle" />
                <span>
                  {formatMessages(messages.login)}
                </span>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {isLoginModalVisible && <LoginModal title="title" isOpen={isLoginModalVisible} onClosed={() => { setIsLoginModalVisible(false); }} onSubmit={() => { }}><div>tst</div></LoginModal>}
    </>

  );
};

export default NavigationBar;
