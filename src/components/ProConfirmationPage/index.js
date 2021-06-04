import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { shape } from 'prop-types';

import TopBar from 'components/ProRegistrationPage/components/TopBar';
import RegistrationRoot from 'components/ProRegistrationPage/components/RegistrationRoot';
import { getValidityOfConfirmationToken } from 'components/LoginPage/actions';

import AccountConfirmed from './components/AccountConfirmed';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const ProRegistrationPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { params } = match;
    dispatch(getValidityOfConfirmationToken(params.token));
    //  eslint-disable-next-line
  }, []);

  return (
    <Container>
      <TopBar />
      <RegistrationRoot>
        <AccountConfirmed />
      </RegistrationRoot>
    </Container>
  );
};

ProRegistrationPage.propTypes = {
  match: shape({ params: shape() }).isRequired,
};

export default ProRegistrationPage;
