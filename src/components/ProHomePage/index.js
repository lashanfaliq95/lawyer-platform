import React from 'react';
import styled from 'styled-components';

import ProTopBar from 'components/Shared/ProTopBar';
import MainCalendar from './components/MainCalendar';
import MiniCalendar from './components/MiniCalendar';
import ViewOption from './components/ViewOption';

const RootContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
`;

const LeftPane = styled.div`
  width: 100%;
  max-width: max-content;
  border: 2px solid blue;
`;

const RightPane = styled.div`
  flex: 1;
  border: 2px solid orange;
  display: flex;
  padding: 1rem;
`;

function ProHomePage() {
  return (
    <RootContainer>
      <ProTopBar />
      <Container>
        <LeftPane>
          <MiniCalendar />
          <ViewOption />
        </LeftPane>
        <RightPane>
          <MainCalendar />
        </RightPane>
      </Container>
    </RootContainer>
  );
}

export default ProHomePage;
