import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TOTAL_STEP_COUNT = 10;

const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5px;
`;

const Progress = styled.div`
  flex: ${({ val }) => `${val}`};
  background-color: ${({ primary }) => (primary ? '#0E5FBB' : '#e0dede')};
`;

function ProgressBar({ value }) {
  return (
    <ProgressBarContainer>
      <Progress val={value} primary />
      <Progress val={TOTAL_STEP_COUNT - value} />
    </ProgressBarContainer>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};

ProgressBar.defaultProps = {
  value: 0,
};

export default ProgressBar;
