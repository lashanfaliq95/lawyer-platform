import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const CheckBoxContainer = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;

  ${({ checked }) => (checked
    ? css`
          border: 1px solid #0061c0;
          background-color: #0061c0;
        `
    : css`
          border: 1px solid #d2d2d2;
          background-color: transparent;
        `)};
`;

function CheckBox({ checked, onToggle }) {
  function handleOnToggle() {
    if (onToggle) {
      onToggle(!checked);
    }
  }

  return (
    <CheckBoxContainer checked={checked} onClick={handleOnToggle}>
      <FaCheck color='#FFFFFF' />
    </CheckBoxContainer>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onToggle: PropTypes.func,
};

CheckBox.defaultProps = {
  checked: false,
  onToggle: undefined,
};

const CheckBoxLabelContainer = styled.div`
  display: flex;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  cursor: pointer;
  background-color: #ffffff;
`;

const CheckBoxToggleContainer = styled.div`
  padding: 1.5rem;
`;

const Label = styled.div`
  flex: 1;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  font-size: 20px;
`;

function CheckBoxLabel({ checked, label, onToggle }) {
  function handleOnToggle() {
    onToggle(!checked);
  }

  return (
    <CheckBoxLabelContainer onClick={handleOnToggle}>
      <Label>{label}</Label>
      <CheckBoxToggleContainer>
        <CheckBox checked={checked} />
      </CheckBoxToggleContainer>
    </CheckBoxLabelContainer>
  );
}

CheckBoxLabel.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.shape({}).isRequired,
  onToggle: PropTypes.func.isRequired,
};

CheckBoxLabel.defaultProps = {
  checked: false,
};

export { CheckBox, CheckBoxLabel };

export default {};
