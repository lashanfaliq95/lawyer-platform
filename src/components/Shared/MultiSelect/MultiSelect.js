import useDropdown, { Dropdown } from 'hooks/useDropdown';
import React, { useLayoutEffect, useRef, useState } from 'react';
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
  display: flex;
`;

const Input = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #d2d2d2;
  font-size: 13px;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  text-align: start;
  overflow: hidden;
  flex: 1;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ width }) => {
    return css`
      width: ${width}px;
      min-width: ${width}px;
      max-width: ${width}px;
    `;
  }}
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  max-height: 200px;
  overflow: auto;

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

function DefaultInput({ options, onDropdownToggle, isToggled, lg }) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef();
  const arrowRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(() => {
    setWidth(containerRef.current.clientWidth - arrowRef.current.clientWidth);
  }, []);

  return (
    <Input
      ref={containerRef}
      lg={lg}
      onClick={onDropdownToggle}
      selected={isToggled}
    >
      <InputLabel ref={inputRef} width={width}>
        {options.length === 0
          ? intl.formatMessage(messages.selectPlaceholder)
          : options.map(({ label }) => label).join(', ')}
      </InputLabel>
      <IconContainer ref={arrowRef}>
        {isToggled ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </IconContainer>
    </Input>
  );
}

DefaultInput.propTypes = {
  options: PropTypes.arrayOf(SelectOptionType),
  onDropdownToggle: PropTypes.func,
  isToggled: PropTypes.bool,
  lg: PropTypes.bool,
};

DefaultInput.defaultProps = {
  options: [],
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

function MultiSelect({
  options,
  selected,
  onOptionSelect,
  renderInput,
  renderOption,
  isDefaultInputLg,
}) {
  const { ref, isOpen, toggleIsOpen } = useDropdown({});

  function getIsItemSelected({ value }) {
    return (
      selected.findIndex(({ value: foundValue }) => foundValue === value) !== -1
    );
  }

  function handleOnOptionSelect(option) {
    const { value } = option;
    let updated;
    const isItemSelected = getIsItemSelected(option);

    if (isItemSelected) {
      updated = selected.filter(
        ({ value: foundValue }) => foundValue !== value,
      );
    } else {
      updated = [...selected, option];
    }
    onOptionSelect(updated);
    toggleIsOpen();
  }

  return (
    <Container>
      {renderInput ? (
        renderInput(selected, toggleIsOpen, isOpen)
      ) : (
        <DefaultInput
          options={selected}
          onDropdownToggle={toggleIsOpen}
          isToggled={isOpen}
          lg={isDefaultInputLg}
        />
      )}
      <Dropdown ref={ref} isOpen={isOpen}>
        <SelectList>
          {options.map((option) => {
            const { value } = option;
            const isItemSelected = getIsItemSelected(option);

            return renderOption ? (
              renderOption(option, handleOnOptionSelect)
            ) : (
              <DefaultListItem
                selected={isItemSelected}
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

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(SelectOptionType),
  selected: PropTypes.arrayOf(SelectOptionType),
  onOptionSelect: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
  renderOption: PropTypes.func,
  isDefaultInputLg: PropTypes.func,
};

MultiSelect.defaultProps = {
  options: [],
  selected: [],
  renderInput: undefined,
  renderOption: undefined,
  isDefaultInputLg: false,
};

export default MultiSelect;
