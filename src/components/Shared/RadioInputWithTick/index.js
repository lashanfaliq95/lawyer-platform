import React from 'react';
import { bool, func, string } from 'prop-types';
import { Input, Label } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Icon from 'components/Shared/Icon';

import './styles.scss';

const RadioInputWithTick = ({ checked, onChange, onClick, label, name }) => {
  return (
    <Label className='radio-button-with-check' check onChange={onChange}>
      <Input type='radio' name={name} checked={checked} onClick={onClick} />
      {checked && <Icon className='icon' name='check' size='small' />}
      <span className='message'>{formatMessage(label)}</span>
    </Label>
  );
};

RadioInputWithTick.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired,
  onClick: func,
  label: string.isRequired,
  name: string.isRequired,
};

RadioInputWithTick.defaultProps = {
  onClick: undefined,
};

export default RadioInputWithTick;
