import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const ListItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 1.5rem;
  cursor: pointer;
`;

const Selection = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5rem;
  width: 25px;
  height: 25px;

  &.selected {
    border: 8px solid #0061c0;
  }
`;

const ListItemLabel = styled.div`
  flex: 1;
`;

function RadioButtonListItem({ option, selectedOption, onOptionChange }) {
  const { value, label } = option;
  const selected = selectedOption && selectedOption.value === value;

  function handleOnClick() {
    onOptionChange(option);
  }

  return (
    <ListItemContainer onClick={handleOnClick}>
      <ListItemLabel>{label}</ListItemLabel>
      <Selection className={classnames({ selected })} />
    </ListItemContainer>
  );
}

RadioButtonListItem.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onOptionChange: PropTypes.func.isRequired,
};

RadioButtonListItem.defaultProps = {
  selectedOption: null,
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 10px;
  overflow: hidden;

  ${ListItemContainer}:not(:first-child) {
    border-top: 1px solid #ced4da;
  }
`;

function RadioButtonList({ options, selectedOption, onOptionChange }) {
  return (
    <ListContainer>
      {options.map((option) => (
        <RadioButtonListItem
          key={option.value}
          option={option}
          onOptionChange={onOptionChange}
          selectedOption={selectedOption}
        />
      ))}
    </ListContainer>
  );
}

RadioButtonList.propTypes = {
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onOptionChange: PropTypes.func.isRequired,
};

RadioButtonList.defaultProps = {
  selectedOption: null,
  options: [],
};

export default RadioButtonList;
