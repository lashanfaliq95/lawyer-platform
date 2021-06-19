import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  FaRegCalendar,
  FaUsers,
  FaUser,
  FaEnvelope,
  FaSearch,
} from 'react-icons/fa';
import { useSetState } from 'react-use';
import { useHistory } from 'react-router-dom';
import { defineMessages } from 'react-intl';
import PropTypes from 'prop-types';

import intl from 'helpers/intlHelper';
import { CLIENTS } from 'helpers/data';
import SearchClient from '../SearchClient/SearchClient';

const messages = defineMessages({
  search: {
    id: 'app.proTopBar.search',
    defaultMessage: 'Search Clients...',
  },
  calendar: {
    id: 'app.proTopBar.calendar',
    defaultMessage: 'Calendar',
  },
  clients: {
    id: 'app.proTopBar.clients',
    defaultMessage: 'Clients',
  },
  messages: {
    id: 'app.proTopBar.messages',
    defaultMessage: 'Messages',
  },
  myAccount: {
    id: 'app.proTopBar.myAccount',
    defaultMessage: 'My Account',
  },
  inquiries: {
    id: 'app.proTopBar.inquiries',
    defaultMessage: 'Inquiries',
  },
  upcomingAppointments: {
    id: 'app.proTopBar.upcomingAppointments',
    defaultMessage: 'Upcoming Appointments',
  },
});

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  padding: 1rem;
  padding-top: 2rem;
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 1.5rem;

  margin: auto 0;
`;

const NavigationContainer = styled.div`
  display: flex;
  margin: auto 5px auto auto;
`;

const EmptyMessage = styled.div`
  padding: 1rem;
  text-align: center;
`;

const NavigationItem = styled.button`
  display: flex;
  padding: 1rem;
  height: auto;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? '#1c487f' : '#373737')};
  font-weight: 500;

  svg {
    margin-right: 10px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
    `}

  padding: 0.5rem 0;
`;

const Separator = styled.div`
  flex: 1;
`;

const SearchInputContainer = styled.div`
  border: 1px solid #d2d2d2;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    margin-right: 10px;
    color: #777878;
  }
`;

const SearchInput = styled.input`
  border: none;
  min-width: 300px;
  color: #777878;

  &:focus {
    outline: none;
  }
`;

const SearchFilterButtonContainer = styled.div`
  margin-top: 10px;
`;

const SearchFilterButton = styled.button`
  margin-right: 5px;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  position: relative;

  ${({ primary }) => {
    return primary
      ? css`
          border: 1px solid #d2d2d2;
          background-color: transparent;
          color: #747474;
        `
      : css`
          border: 1px solid #1e4880;
          background-color: #1e4880;
          color: #ffffff;
        `;
  }}

  &:focus {
    outline: none;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;

  background-color: #f10000;
  border-radius: 1rem;
  width: 20px;
  height: 20px;
  color: #ffffff;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  border: 1px solid #d2d2d2;
  width: 100%;
  left: 0;
  background-color: #ffffff;
  z-index: 10;
  padding: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  top: calc(100% + 10px);

  ${({ show }) => {
    return show
      ? css`
          display: flex;
        `
      : 'display: none';
  }}
`;

const LoadingContainer = styled.div`
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
  flex: 1;
`;

const ListItemContainer = styled.div``;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${ListItemContainer}:not(:first-child) {
    border-top: 1px solid #d2d2d2;
  }
`;

export const TAB_TYPES = {
  HOME: 0,
  CLIENTS: 1,
  MESSAGES: 2,
  ACCOUNT: 3,
};

function ProTopBar({ type, showClientSearch }) {
  const history = useHistory();

  const searchContainerRef = useRef(null);

  const [
    { searchTerm, searchTermFocus, searchTermLoading },
    setState,
  ] = useSetState({
    searchTerm: '',
    searchTermFocus: false,
    searchTermLoading: false,
  });

  function handleOnSearchTermChange({ target: { value } }) {
    setState({ searchTerm: value });
  }

  function handleOnFocus() {
    if (!searchTerm) {
      setState({ searchTermFocus: !searchTermFocus });
      return;
    }
    setTimeout(() => {
      setState({ searchTermFocus: !searchTermFocus });
    }, 500);
  }

  function handleOnSearchEntryClick() {
    history.push('/pro/appointments');
  }

  function handleOnClientsClick() {
    history.push('/pro/clients');
  }

  function handleOnMessagesClick() {
    history.push('/pro/messages');
  }

  function handleOnHomeClick() {
    history.push('/pro');
  }

  function handleOnMyAccountsClick() {
    history.push('/pro/my-account');
  }

  const showDropdown = searchTerm && searchTerm.length >= 2 && searchTermFocus;
  const filteredClients = CLIENTS.filter((c) =>
    `${c.firstName} ${c.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <Container>
      <Title>Avoplan Pro</Title>
      <Separator />
      <SearchContainer visible={showClientSearch}>
        <SearchInputContainer ref={searchContainerRef}>
          <FaSearch />
          <SearchInput
            onChange={handleOnSearchTermChange}
            placeholder={intl.formatMessage(messages.search)}
            onFocus={handleOnFocus}
            onBlur={handleOnFocus}
            value={searchTerm}
          />
          <Dropdown show={showDropdown}>
            {searchTermLoading ? (
              <LoadingContainer>Loading</LoadingContainer>
            ) : (
              <ListContainer>
                {filteredClients.length === 0 ? (
                  <EmptyMessage>No results found</EmptyMessage>
                ) : (
                  filteredClients.map((c) => (
                    <ListItemContainer key={c.id}>
                      <SearchClient
                        client={c}
                        search={searchTerm}
                        onClick={handleOnSearchEntryClick}
                      />
                    </ListItemContainer>
                  ))
                )}
              </ListContainer>
            )}
          </Dropdown>
        </SearchInputContainer>
        <SearchFilterButtonContainer>
          <SearchFilterButton primary>
            {intl.formatMessage(messages.inquiries)}
            <Badge>69</Badge>
          </SearchFilterButton>
          <SearchFilterButton>
            {intl.formatMessage(messages.upcomingAppointments)}
          </SearchFilterButton>
        </SearchFilterButtonContainer>
      </SearchContainer>
      <Separator />
      <NavigationContainer>
        <NavigationItem
          selected={type === TAB_TYPES.HOME}
          onClick={handleOnHomeClick}
        >
          <FaRegCalendar />
          {intl.formatMessage(messages.calendar)}
        </NavigationItem>
        <NavigationItem
          selected={type === TAB_TYPES.CLIENTS}
          onClick={handleOnClientsClick}
        >
          <FaUsers />
          {intl.formatMessage(messages.clients)}
        </NavigationItem>
        <NavigationItem
          selected={type === TAB_TYPES.MESSAGES}
          onClick={handleOnMessagesClick}
        >
          <FaEnvelope />
          {intl.formatMessage(messages.messages)}
        </NavigationItem>
        <NavigationItem
          selected={type === TAB_TYPES.ACCOUNT}
          onClick={handleOnMyAccountsClick}
        >
          <FaUser />
          {intl.formatMessage(messages.myAccount)}
        </NavigationItem>
      </NavigationContainer>
    </Container>
  );
}

ProTopBar.propTypes = {
  type: PropTypes.number,
  showClientSearch: PropTypes.bool,
};

ProTopBar.defaultProps = {
  type: TAB_TYPES.HOME,
  showClientSearch: false,
};

export default ProTopBar;
