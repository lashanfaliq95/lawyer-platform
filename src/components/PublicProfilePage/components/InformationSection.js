import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  min-height: 500px;

  justify-content: center;
  align-items: center;
`;

function InformationSection() {
  return <Container>Information Section</Container>;
}

export default InformationSection;
