import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { func, string, shape } from 'prop-types';
import { Input } from 'reactstrap';

import './styles.scss';

const FloatingLabelInput = (props) => {
  const {
    onChange, inputClassName, label, intl, ...rest
  } = props;
  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <div className="floating-label-input">
      <Input
        onChange={onInputChange}
        className={`${inputClassName} ${value ? 'has-input' : ''}`}
        {...rest}
      />
      <span className="floating-label">
        {intl.formatMessage(label) }
      </span>
    </div>
  );
};

FloatingLabelInput.propTypes = {
  onChange: func.isRequired,
  inputClassName: string,
  label: shape({}).isRequired,
  intl: shape({}).isRequired,
};

FloatingLabelInput.defaultProps = {
  inputClassName: '',
};

export default injectIntl(FloatingLabelInput);
