import React, { useState } from 'react';
import { bool, string } from 'prop-types';

import './styles.scss';

const FilterButton = ({ isFilterActive, name }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  const onClick = () => {
    setIsBtnActive(true);
  };
  const onBlur = () => {
    setIsBtnActive(false);
  };

  const isActive = isFilterActive || isBtnActive;
  return (
    <button
      type="button"
      className={`filter-button ${isActive ? 'active' : ''}`}
      onBlur={onBlur}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

FilterButton.propTypes = {
  isFilterActive: bool,
  name: string.isRequired,
};

FilterButton.defaultProps = {
  isFilterActive: false,
};

export default FilterButton;
