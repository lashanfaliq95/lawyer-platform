import React from 'react';
import { string, func } from 'prop-types';

import './styles.scss';

const ToggleSwitch = ({ value, onChange, label }) => (
  <div className="toggle-switch">
    <p className="label">{label}</p>
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
};

export default ToggleSwitch;
