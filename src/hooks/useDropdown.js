import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSetState } from 'react-use';

const DropdownContainer = styled.div`
  position: absolute;
  border: 1px solid #d2d2d2;
  z-index: 10;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  overflow: hidden;

  ${({ width, isOpen, hasLayoutLoaded }) => css`
    min-width: ${width};
    display: ${isOpen ? 'flex' : 'none'};
    visibility: ${hasLayoutLoaded ? 'visible' : 'hidden'};
  `}
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `};
`;

export const Dropdown = forwardRef(
  (
    { top, bottom, left, right, isOpen, hasLayoutLoaded, width, children },
    ref,
  ) => (
    <DropdownContainer
      isOpen={isOpen}
      hasLayoutLoaded={hasLayoutLoaded}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      width={width}
      ref={ref}
    >
      {children}
    </DropdownContainer>
  ),
);

Dropdown.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  width: PropTypes.string,
  isOpen: PropTypes.bool,
  hasLayoutLoaded: PropTypes.bool,
  children: PropTypes.node,
};

Dropdown.defaultProps = {
  top: 'calc(100% + 10px)',
  bottom: undefined,
  left: '0px',
  right: undefined,
  width: '100%',
  isOpen: false,
  hasLayoutLoaded: true,
  children: [],
};

function useDropdown({
  onClose = () => {},
  onOpen = () => {},
  calculateHeight = false,
  initialStatus = false,
  onClickOutside = undefined,
}) {
  const ref = useRef();
  const [{ isOpen, hasLayoutLoaded }, setState] = useSetState({
    isOpen: calculateHeight || initialStatus,
    hasLayoutLoaded: !calculateHeight,
  });

  function toggleIsOpen() {
    setState({ isOpen: !isOpen });
  }

  useLayoutEffect(() => {
    if (calculateHeight) {
      setTimeout(() => {
        setState({
          isOpen: false,
          hasLayoutLoaded: true,
        });
      }, 40);
    }
    //  eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isOpen) {
      return onOpen();
    }
    return onClose();
    //  eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    function handleOnClick(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        if (onClickOutside) {
          onClickOutside();
        } else {
          setState({ isOpen: false });
        }
      }
    }
    document.addEventListener('mousedown', handleOnClick, false);

    return () => {
      document.removeEventListener('mousedown', handleOnClick, false);
    };
    //  eslint-disable-next-line
  }, [ref, setState]);

  return { ref, isOpen, toggleIsOpen, hasLayoutLoaded };
}

export default useDropdown;
