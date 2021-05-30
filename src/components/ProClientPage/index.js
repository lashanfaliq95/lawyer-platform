import React, { useEffect } from 'react';
import { useSetState } from 'react-use';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';
import ProTopBar from 'components/Shared/ProTopBar';
import ClientList from './components/ClientList';
import NoClient from './components/NoClient';
import messages from './messages';

import DUMMY_CLIENTS from './dummy-clients';

const RootContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fbfbfb;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 4rem;
`;

function ProClientPage() {
  const [{ clients, loading }, setState] = useSetState({
    clients: [],
    loading: true,
  });

  useEffect(() => {
    const dummyClients = DUMMY_CLIENTS.slice(0, 5);
    setState({
      clients: dummyClients,
      loading: false,
    });

    // eslint-disable-next-line
  }, []);

  function handleShowAll() {
    setState({
      clients: DUMMY_CLIENTS,
    });
  }

  return (
    <RootContainer>
      <ProTopBar />
      <Container>
        <Title>{formatMessages(messages.proClientPageTitle)}</Title>
        {loading && <Title>Loading...</Title>}
        {!loading && clients.length > 0 && (
          <ClientList items={clients} onShowAll={handleShowAll} />
        )}
        {!loading && clients.length === 0 && <NoClient />}
      </Container>
    </RootContainer>
  );
}

export default ProClientPage;
