import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  min-height: 200px;

  justify-content: center;
  align-items: center;
`;

function OpenHoursSection() {
  return <Container>Open Hours Section</Container>;
}

export default OpenHoursSection;
