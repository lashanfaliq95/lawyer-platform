import React from 'react';
import { arrayOf, string, number, func } from 'prop-types';
import { useSetState } from 'react-use';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';
import ClientItem from './ClientItem';
import ClientDetail from './ClientDetail';
import messages from '../messages';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const ListContainer = styled.div`
  width: 30%;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-weight: 600;
`;

const ShowAllButton = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

function ClientList({ items, onShowAll }) {
  const [{ selectedClient }, setState] = useSetState({
    selectedClient: null,
  });

  function setSelectedClient(clientId) {
    const client = items.find((c) => c.id === clientId);
    setState({ selectedClient: client });
  }

  function closeDetails() {
    // todo: handle onSave and onRemove
    // this function is added for the sake of completeness
    setState({
      selectedClient: null,
    });
  }

  return (
    <Container>
      <ListContainer>
        <ListHeader>
          <span>
            {formatMessages(messages.proClientPageClientListHeaderTitle)}
          </span>
          <ShowAllButton type='button' onClick={onShowAll}>
            {formatMessages(messages.proClientPageClientListHeaderButton)}
          </ShowAllButton>
        </ListHeader>
        {items.map((client, index) => (
          <ClientItem
            key={client.id}
            id={client.id}
            firstName={client.firstName}
            lastName={client.lastName}
            first={index === 0}
            last={index === items.length - 1}
            active={selectedClient && client.id === selectedClient.id}
            onClick={setSelectedClient}
          />
        ))}
      </ListContainer>
      {selectedClient && (
        <ClientDetail
          id={selectedClient.id}
          firstName={selectedClient.firstName}
          lastName={selectedClient.lastName}
          email={selectedClient.email}
          mobile={selectedClient.mobile}
          onSave={closeDetails}
          onRemove={closeDetails}
        />
      )}
    </Container>
  );
}

ClientList.propTypes = {
  items: arrayOf({
    id: number.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
    email: string.isRequired,
    mobile: string.isRequired,
  }).isRequired,
  onShowAll: func.isRequired,
};

export default ClientList;
