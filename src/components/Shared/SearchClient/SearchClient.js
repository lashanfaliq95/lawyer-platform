import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getIndicesOf } from 'components/Shared/utils';

const Container = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d2d2d2;
  font-size: 1rem;
  border-radius: 5rem;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  margin: auto 1rem;
`;

function getClientInitials(firstName, lastName) {
  return firstName[0] + lastName[0];
}

function getFormattedName(firstName, lastName, searchTerm) {
  const fullName = `${firstName} ${lastName}`;
  const indices = getIndicesOf(searchTerm, fullName);

  if (indices.length === 0) {
    return fullName;
  }

  const stringsToRender = [];
  let nextIndexToStartFrom = 0;

  indices.forEach((indexOfString, indexOfArr) => {
    stringsToRender.push(
      <span>{fullName.substring(nextIndexToStartFrom, indexOfString)}</span>,
    );
    stringsToRender.push(
      <u>{fullName.substr(indexOfString, searchTerm.length)}</u>,
    );
    if (indexOfArr === indices.length - 1) {
      stringsToRender.push(
        <span>
          {fullName.substr(indexOfString + searchTerm.length, fullName.length)}
        </span>,
      );
    } else {
      nextIndexToStartFrom += indexOfString + searchTerm.length;
    }
  });

  return stringsToRender;
}

function SearchClient({ client, onClick, search }) {
  const { firstName, lastName } = client;

  function handleOnClick() {
    onClick(client);
  }

  return (
    <Container onClick={handleOnClick}>
      <Logo>{getClientInitials(firstName, lastName)}</Logo>
      <Label>{getFormattedName(firstName, lastName, search)}</Label>
    </Container>
  );
}

SearchClient.propTypes = {
  client: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  search: PropTypes.string,
};

SearchClient.defaultProps = {
  search: '',
};

export default SearchClient;
