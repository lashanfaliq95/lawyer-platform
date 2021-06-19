import useDropdown, { Dropdown } from 'hooks/useDropdown';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import intl from 'helpers/intlHelper';
import { SelectOptionType } from '../propTypes';

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
  display: flex;
  background-color: transparent;
  border: none;
  height: 100%;
  border-bottom: 2px solid #d2d2d2;
  font-size: 13px;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  text-align: start;
  align-items: center;

  ${({ lg }) =>
    lg &&
    css`
      font-size: 18px;
    `}

  ${({ selected }) =>
    selected &&
    css`
      border-color: #006ea9;
    `};
`;

const InputLabel = styled.div`
  flex: 1;
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
  cursor: pointer;

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

const IconContainer = styled.div`
  padding: 0rem 0.5rem;
`;

function DefaultInput({ option, onDropdownToggle, isToggled, lg }) {
  return (
    <Input lg={lg} onClick={onDropdownToggle} selected={isToggled}>
      <InputLabel>
        {option ? option.label : intl.formatMessage(messages.selectPlaceholder)}
      </InputLabel>
      <IconContainer>
        {isToggled ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </IconContainer>
    </Input>
  );
}

DefaultInput.propTypes = {
  option: SelectOptionType,
  onDropdownToggle: PropTypes.func,
  isToggled: PropTypes.bool,
  lg: PropTypes.bool,
};

DefaultInput.defaultProps = {
  option: null,
  onDropdownToggle: () => {},
  isToggled: false,
  lg: false,
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
  option: SelectOptionType.isRequired,
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
  isDefaultInputLg,
}) {
  const { ref, isOpen, toggleIsOpen } = useDropdown({});

  function handleOnOptionSelect(option) {
    onOptionSelect(option);
    toggleIsOpen();
  }

  return (
    <Container>
      {renderInput ? (
        renderInput(selected, toggleIsOpen, isOpen)
      ) : (
        <DefaultInput
          option={selected}
          onDropdownToggle={toggleIsOpen}
          isToggled={isOpen}
          lg={isDefaultInputLg}
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
  options: PropTypes.arrayOf(SelectOptionType),
  selected: SelectOptionType,
  onOptionSelect: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
  renderOption: PropTypes.func,
  isDefaultInputLg: PropTypes.func,
};

SingleSelect.defaultProps = {
  options: [],
  selected: null,
  renderInput: undefined,
  renderOption: undefined,
  isDefaultInputLg: false,
};

export default SingleSelect;
