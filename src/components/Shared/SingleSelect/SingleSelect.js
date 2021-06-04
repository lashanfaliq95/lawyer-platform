/* eslint-disable react/forbid-prop-types */
import useDropdown, { Dropdown } from 'hooks/useDropdown';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import intl from 'helpers/intlHelper';

const messages = defineMessages({
  selectPlaceholder: {
    id: 'app.singleSelect.selectPlaceholder',
    defaultMessage: 'Select',
  },
});

const Container = styled.div`
  position: relative;
`;

const Input = styled.button`
  background-color: transparent;
  border: none;
  height: 100%;
  border-bottom: 2px solid #d2d2d2;
  font-size: 13px;
  width: 100%;
  text-align: start;
  padding: 5px 0;

  ${({ selected }) =>
    selected &&
    css`
      border-color: #006ea9;
    `};
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;

  div:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const SelectItem = styled.div`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  text-align: start;
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;

  &:hover {
    background-color: #d2d2d2;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #006ea9 !important;
      color: #ffffff;
    `}
`;

function DefaultInput({ label, onDropdownToggle, isToggled }) {
  return (
    <Input onClick={onDropdownToggle} selected={isToggled}>
      {label || intl.formatMessage(messages.selectPlaceholder)}
    </Input>
  );
}

DefaultInput.propTypes = {
  label: PropTypes.string,
  onDropdownToggle: PropTypes.func,
  isToggled: PropTypes.bool,
};

DefaultInput.defaultProps = {
  label: '',
  onDropdownToggle: () => {},
  isToggled: false,
};

function DefaultListItem({ selected, onClick, option }) {
  const { label } = option;

  function handleOnClick() {
    onClick(option);
  }

  return (
    <SelectItem selected={selected} onClick={handleOnClick}>
      {label}
    </SelectItem>
  );
}

DefaultListItem.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  option: PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

DefaultListItem.defaultProps = {
  selected: false,
  onClick: false,
};

function SingleSelect({
  options,
  selected,
  onOptionSelect,
  renderInput,
  renderOption,
}) {
  const { ref, isOpen, toggleIsOpen } = useDropdown({});

  function handleOnOptionSelect(option) {
    onOptionSelect(option);
    toggleIsOpen();
  }

  return (
    <Container>
      {renderInput ? (
        renderInput(selected && selected.label, toggleIsOpen, isOpen)
      ) : (
        <DefaultInput
          label={selected && selected.label}
          onDropdownToggle={toggleIsOpen}
          isToggled={isOpen}
        />
      )}
      <Dropdown ref={ref} isOpen={isOpen}>
        <SelectList>
          {options.map((option) => {
            const { value } = option;

            return renderOption ? (
              renderOption(option, selected, handleOnOptionSelect)
            ) : (
              <DefaultListItem
                selected={selected && selected.value === value}
                option={option}
                key={value}
                onClick={handleOnOptionSelect}
              />
            );
          })}
        </SelectList>
      </Dropdown>
    </Container>
  );
}

SingleSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  selected: PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onOptionSelect: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
  renderOption: PropTypes.func,
};

SingleSelect.defaultProps = {
  options: [],
  selected: null,
  renderInput: undefined,
  renderOption: undefined,
};

export default SingleSelect;
