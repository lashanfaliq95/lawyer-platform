import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 30px;
  background-color: #e5e6e6;
  border-radius: 20px;
  margin: auto 0;
  cursor: pointer;
`;

const Button = styled.button`
  width: 15px;
  height: 15px;
  transition: transform 0.3s ease-in-out;
  border-radius: 20px;
  border: none;
  background-color: #a9a9a9;

  ${({ isSwitchedOn }) =>
    isSwitchedOn &&
    css`
      transform: translateX(100%);
      background-color: #006ea9;
    `}}
`;

function Switch({ isSwitchedOn, onToggleSwitch, readOnly }) {
  return (
    <Container onClick={!readOnly && onToggleSwitch}>
      <Button isSwitchedOn={isSwitchedOn} />
    </Container>
  );
}

Switch.propTypes = {
  isSwitchedOn: PropTypes.bool,
  onToggleSwitch: PropTypes.func,
  readOnly: PropTypes.bool,
};

Switch.defaultProps = {
  readOnly: false,
  isSwitchedOn: false,
  onToggleSwitch: () => {},
};

export default Switch;
