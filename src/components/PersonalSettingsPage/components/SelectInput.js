import React from 'react';
import styled from 'styled-components';
import { shape, arrayOf, string, func } from 'prop-types';

import formatMessages from 'components/formatMessages';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
`;

const Label = styled.span`
  font-weight: 500;
  padding-bottom: 1rem;
`;

const Select = styled.select`
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

function SelectInput({ label, items, name, selected, onSelect }) {
  function handleOnSelect({ target: { value, name: inputName } }) {
    onSelect(inputName, value);
  }

  return (
    <Container>
      <Label>{formatMessages(label)}</Label>
      <Select name={name} onChange={handleOnSelect} defaultValue={selected}>
        {items.map(({ value, label: displayName }) => (
          <option key={value} value={value}>
            {displayName}
          </option>
        ))}
      </Select>
    </Container>
  );
}

SelectInput.propTypes = {
  label: shape({}).isRequired,
  name: string,
  items: arrayOf(
    shape({
      value: string,
      label: string,
    }),
  ),
  selected: string,
  onSelect: func,
};

SelectInput.defaultProps = {
  name: '',
  items: [],
  selected: '',
  onSelect: () => {},
};

export default SelectInput;
