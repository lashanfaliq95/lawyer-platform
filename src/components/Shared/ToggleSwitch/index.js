import React from 'react';
import { injectIntl } from 'react-intl';
import {
  string, func, shape, bool,
} from 'prop-types';

import './styles.scss';

const ToggleSwitch = ({
  value, onChange, label, intl, isChecked,
}) => (
  <div className="toggle-switch">
    <p className="label">{intl.formatMessage(label)}</p>
    <label htmlFor="slider-input" className="switch">
      <input type="checkbox" id="slider-input" value={value} checked={isChecked} onChange={onChange} />
      <span className="slider round" />
    </label>
  </div>

);

ToggleSwitch.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  label: string.isRequired,
  intl: shape.isRequired,
  isChecked: bool.isRequired,
};

export default injectIntl(ToggleSwitch);
