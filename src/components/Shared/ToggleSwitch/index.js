import React from 'react';
import { injectIntl } from 'react-intl';
import { string, func, shape } from 'prop-types';

import './styles.scss';

const ToggleSwitch = ({
  value, onChange, label, intl,
}) => (
  <div className="toggle-switch">
    <p className="label">{intl.formatMessage(label)}</p>
    <label htmlFor="slider-input" className="switch">
      <input type="checkbox" id="slider-input" value={value} onChange={onChange} />
      <span className="slider round" />
    </label>
  </div>

);

ToggleSwitch.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
  intl: shape.isRequired,
};

export default injectIntl(ToggleSwitch);
