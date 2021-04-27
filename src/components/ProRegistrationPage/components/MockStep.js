import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PrimaryButton } from './Shared';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const NavigationContainerSeparator = styled.div`
  width: 10px;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.span`
  margin-top: 2rem;
`;

function MockStep({
  title, previous, next, onStepChange,
}) {
  function handleNextChange() {
    onStepChange(next);
  }

  function handlePreviousChange() {
    onStepChange(previous);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SubTitle>
      <NavigationContainer>
        {previous && (
          <PrimaryButton onClick={handlePreviousChange}>Previous</PrimaryButton>
        )}
        <NavigationContainerSeparator />
        {next && <PrimaryButton onClick={handleNextChange}>Next</PrimaryButton>}
      </NavigationContainer>
    </Container>
  );
}

MockStep.propTypes = {
  title: PropTypes.string.isRequired,
  previous: PropTypes.string,
  next: PropTypes.string,
  onStepChange: PropTypes.func.isRequired,
};

MockStep.defaultProps = {
  previous: null,
  next: null,
};

export default MockStep;
