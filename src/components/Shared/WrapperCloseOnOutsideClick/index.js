import React, { useRef, useEffect, memo } from 'react';
import {
  string, func, node, bool, shape,
} from 'prop-types';

const WrapperCloseOnOutsideClick = ({
  children,
  className,
  onClose,
  isModalVisible,
  buttonRef,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current
        && !wrapperRef.current.contains(event.target)
        && buttonRef.current
        && !buttonRef.current.contains(event.target)
      ) {
        // When the button is clicked do nothing
        onClose();
      }
    };

    const escFunction = (event) => {
      if (event.keyCode === 27) {
        // Do whatever when esc is pressed
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef, buttonRef]);

  return isModalVisible ? (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  ) : null;
};

WrapperCloseOnOutsideClick.propTypes = {
  children: node.isRequired,
  className: string,
  onClose: func.isRequired,
  isModalVisible: bool.isRequired,
  buttonRef: shape({}).isRequired,
};

WrapperCloseOnOutsideClick.defaultProps = {
  className: '',
};

export default memo(WrapperCloseOnOutsideClick);
