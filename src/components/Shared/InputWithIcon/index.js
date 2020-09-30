import React from 'react';
import { string, func } from 'prop-types';
import { Input } from 'reactstrap';
import './styles.scss';

import Icon from 'components/Shared/Icon';

const InputWithIcon = (props) => {
  const {
    name, value, onChange, color, placeholder, width,
  } = props;
  return (
    <div className="input-icons" style={{ width }}>
      <Icon name={name} className="icon" size="large" color={color} />
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

InputWithIcon.propTypes = {
  name: string.isRequired,
  value: string,
  onChange: func,
  color: string,
  placeholder: string,
  width: string,
};

InputWithIcon.defaultProps = {
  value: '',
  color: '',
  placeholder: '',
  width: '',
  onChange: () => {},
};
export default InputWithIcon;
