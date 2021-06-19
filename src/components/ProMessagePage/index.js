import React, { useEffect } from 'react';
import { useSetState } from 'react-use';
import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

import formatMessages from 'components/formatMessages';
import ProTopBar, { TAB_TYPES } from 'components/Shared/ProTopBar';
import NoClient from './components/NoClient';
import ClientItem from './components/ClientItem';
import messages from './messages';

import DUMMY_CLIENTS from '../ProClientPage/dummy-clients';

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
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const ClientListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClientList = styled.div`
  width: 30%;
`;

const MessageContainer = styled.div`
  width: 60%;
`;

const SendEmailButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 50px 0;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #105fbb;

  &:focus {
    outline: none;
  }
`;

function ProMessagePage() {
  const [{ clients, loading, selectedClient }, setState] = useSetState({
    clients: [],
    loading: true,
    selectedClient: null,
  });

  useEffect(() => {
    // mimicking the fetch clients request
    setState({
      clients: DUMMY_CLIENTS,
      loading: false,
    });

    // eslint-disable-next-line
  }, []);

  function handleSendEmail() {
    window.location = `mailto:${selectedClient.email}`;
  }

  function setSelectedClient(clientId) {
    const client = clients.find((c) => c.id === clientId);
    setState({ selectedClient: client });
  }

  return (
    <RootContainer>
      <ProTopBar type={TAB_TYPES.MESSAGES} />
      <Container>
        <Title>{formatMessages(messages.proMessagePageTitle)}</Title>
        <Subtitle>{formatMessages(messages.proMessagePageSubtitle)}</Subtitle>
        {loading && <Title>Loading...</Title>}
        {!loading && clients.length === 0 && <NoClient />}
        {!loading && clients.length > 0 && (
          <ClientListContainer>
            <ClientList>
              {clients.map((client, index) => (
                <ClientItem
                  key={client.id}
                  id={client.id}
                  firstName={client.firstName}
                  lastName={client.lastName}
                  email={client.email}
                  first={index === 0}
                  last={index === clients.length - 1}
                  active={selectedClient && client.id === selectedClient.id}
                  onClick={setSelectedClient}
                />
              ))}
            </ClientList>
            {selectedClient && (
              <MessageContainer>
                <SendEmailButton type='button' onClick={handleSendEmail}>
                  <MdArrowForward size={20} />
                  {formatMessages(messages.proMessagePageSendEmailBtn)}
                </SendEmailButton>
              </MessageContainer>
            )}
          </ClientListContainer>
        )}
      </Container>
    </RootContainer>
  );
}

export default ProMessagePage;
