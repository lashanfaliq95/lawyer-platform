import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
`;

const Label = styled.span`
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;

function TextInput({ label, type, value }) {
  return (
    <Container>
      <Label>{formatMessages(label)}</Label>
      <Input type={type} value={value} />
    </Container>
  );
}

TextInput.propTypes = {
  label: shape({}).isRequired,
  type: string,
  value: string,
};

TextInput.defaultProps = {
  type: 'text',
  value: '',
};

export default TextInput;
