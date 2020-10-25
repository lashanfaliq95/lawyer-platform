import React, { useState, useRef } from 'react';
import { bool, string, node } from 'prop-types';

import './styles.scss';
import WrapperCloseOnOutSideClick from 'components/Shared/WrapperCloseOnOutsideClick';

const FilterButton = ({
  isFilterActive, name, children, className,
}) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const buttonRef = useRef(null);

  const isActive = isFilterActive || isBtnActive;

  const onClick = () => {
    setIsBtnActive(!isBtnActive);
    setIsModalVisible(!isModalVisible);
  };
  const onClose = () => {
    setIsModalVisible(false);
    setIsBtnActive(false);
  };
  return (
    <div className="filter-item-wrapper">
      <div className="filter-button-wrapper">
        <button
          type="button"
          className={`filter-button ${isActive ? 'active' : ''}`}
          ref={buttonRef}
          onClick={onClick}
        >
          {name}
        </button>
      </div>
      <div className="content">
        {isBtnActive
          ? (
            <WrapperCloseOnOutSideClick
              className={className}
              onClose={onClose}
              isModalVisible={isModalVisible}
              buttonRef={buttonRef}
            >
              {children}
            </WrapperCloseOnOutSideClick>
          ) : null}
      </div>
    </div>
  );
};

FilterButton.propTypes = {
  isFilterActive: bool,
  name: string.isRequired,
  children: node.isRequired,
  className: string,
};

FilterButton.defaultProps = {
  isFilterActive: false,
  className: '',
};

export default FilterButton;
