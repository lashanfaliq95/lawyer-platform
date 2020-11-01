import React, { useState, memo } from 'react';
import { injectIntl } from 'react-intl';
import { func, string, shape } from 'prop-types';
import { Input, FormFeedback } from 'reactstrap';

import './styles.scss';

const FloatingLabelInput = (props) => {
  const {
    onChange, inputClassName, label, intl, error, ...rest
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
      {error && <FormFeedback>{intl.formatMessage(error)}</FormFeedback>}
    </div>
  );
};

FloatingLabelInput.propTypes = {
  onChange: func.isRequired,
  inputClassName: string,
  label: shape({}).isRequired,
  intl: shape({}).isRequired,
  error: string,
};

FloatingLabelInput.defaultProps = {
  inputClassName: '',
  error: null,
};

export default injectIntl(memo(FloatingLabelInput));
