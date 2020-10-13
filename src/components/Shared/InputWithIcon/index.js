import React from 'react';
import { string, func, shape } from 'prop-types';
import { Input } from 'reactstrap';
import './styles.scss';

import Icon from 'components/Shared/Icon';

const getInputClassName = (prependIcon, appendIcon) => {
  if (prependIcon && appendIcon) {
    return { className: 'padding-left-right' };
  }
  if (prependIcon) {
    return { className: 'padding-left' };
  }
  if (appendIcon) {
    return { className: 'padding-right' };
  }
  return null;
};

const InputWithIcon = (props) => {
  const {
    prependIcon, appendIcon, value, onChange, placeholder, width,
  } = props;
  const { className } = getInputClassName(prependIcon, appendIcon);
  return (
    <div className="input-icons" style={{ width }}>
      {prependIcon && (
        <Icon
          name={prependIcon.name}
          className="icon"
          size="large"
          color={prependIcon.color}
        />
      )}
      <Input value={value} className={className} onChange={onChange} placeholder={placeholder} />
      {appendIcon && <Icon name={appendIcon.name} className="icon right" size="large" color={appendIcon.color} onClick={appendIcon.onClick} />}
    </div>
  );
};

InputWithIcon.propTypes = {
  prependIcon: shape({
    name: string.isRequired,
    color: string.isRequired,
  }),
  appendIcon: shape({
    name: string.isRequired,
    color: string.isRequired,
    onClick: func,
  }),
  value: string,
  onChange: func,
  placeholder: string,
  width: string,
};

InputWithIcon.defaultProps = {
  value: '',
  prependIcon: null,
  appendIcon: null,
  placeholder: '',
  width: '',
  onChange: () => {},
};
export default InputWithIcon;
