import React, { useState, memo } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'reactstrap';

import './styles.scss';

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const FloatingLabelInput = ({
  onChange,
  inputClassName,
  label,
  intl,
  error,
  ...rest
}) => {
  const { value: propValue } = rest;

  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className='floating-label-input'>
      <Input
        onChange={onInputChange}
        className={`${inputClassName} ${value || propValue ? 'has-input' : ''}`}
        {...rest}
      />
      <span className='floating-label'>{intl.formatMessage(label)}</span>
      {error && <ErrorMessage>{intl.formatMessage(error)}</ErrorMessage>}
    </div>
  );
};

FloatingLabelInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputClassName: PropTypes.string,
  label: PropTypes.shape({}).isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

FloatingLabelInput.defaultProps = {
  inputClassName: '',
  error: null,
  value: null,
};

export default injectIntl(memo(FloatingLabelInput));
