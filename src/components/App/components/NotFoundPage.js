import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const NotFoundMessage = styled.span`
  font-size: 2rem;
`;

function NotFoundPage() {
  const history = useHistory();

  return (
    <Container>
      <NotFoundMessage>404 Not Found</NotFoundMessage>
    </Container>
  );
}

export default NotFoundPage;
