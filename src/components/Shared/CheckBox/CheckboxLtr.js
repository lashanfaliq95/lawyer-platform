import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SelectItemContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

const SelectItemCheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin-right: 1rem;

  ${({ checked }) =>
    checked &&
    css`
      background-color: #0061c0;
      border-color: #0061c0;
    `}
`;

function CheckboxLtr({ checked, onClick, label }) {
  return (
    <SelectItemContainer>
      <SelectItemCheckBoxContainer checked={checked} onClick={onClick}>
        <FaCheck color='#FFFFFF' size={10} />
      </SelectItemCheckBoxContainer>
      {label}
    </SelectItemContainer>
  );
}

CheckboxLtr.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxLtr;
