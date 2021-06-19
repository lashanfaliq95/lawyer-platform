import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Warning from 'components/ProAccountPage/components/Warning';
import ProTopBar, { TAB_TYPES } from '../ProTopBar';

const RootContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fbfbfb;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

function ProAccountContainer({ children }) {
  const [showActivationWarning] = useState(true);

  return (
    <RootContainer>
      {showActivationWarning && <Warning />}
      <ProTopBar type={TAB_TYPES.ACCOUNT} />
      <Container>{children}</Container>
    </RootContainer>
  );
}

ProAccountContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.elementType),
    PropTypes.shape({}),
  ]),
};

ProAccountContainer.defaultProps = {
  children: [],
};

export default ProAccountContainer;
