import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid #d2d2d2;
  margin-bottom: auto;

  &:focus {
    outline: none;
    border-bottom-color: #006ea9;
  }
`;

const TextAreaInput = styled.textarea`
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid #d2d2d2;

  &:focus {
    outline: none;
    border-bottom-color: #006ea9;
  }
`;

const ValidationError = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
`;

function SmFormInput({ textArea, error, touched, ...rest }) {
  return (
    <Container>
      {textArea ? <TextAreaInput {...rest} /> : <Input {...rest} />}
      {error && touched && <ValidationError>{error}</ValidationError>}
    </Container>
  );
}

SmFormInput.propTypes = {
  textArea: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

SmFormInput.defaultProps = {
  textArea: false,
  error: null,
  touched: false,
};

export default SmFormInput;
