import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LeftPane from '../components/LeftPane';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const LeftPaneContainer = styled.div`
  flex: 1;
  border: 5px solid blue;
`;

const RightPaneContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid red;
`;

function RegistrationRoot({ children }) {
  return (
    <Container>
      <LeftPaneContainer>
        <LeftPane />
      </LeftPaneContainer>
      <RightPaneContainer>{children}</RightPaneContainer>
    </Container>
  );
}

RegistrationRoot.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default RegistrationRoot;
