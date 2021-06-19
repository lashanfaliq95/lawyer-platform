import React from 'react';
import styled from 'styled-components';

import formatMessages from 'components/formatMessages';
import messages from '../messages';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccecfa;
  padding: 1.5rem;
  border-radius: 10px;
  width: 30%;
  height: fit-content;
`;

const CardTitle = styled.span`
  font-weight: bold;
  padding-bottom: 10px;
`;

const CardContent = styled.span`
  text-align: justify;
`;

function NoClient() {
  return (
    <Card>
      <CardTitle>
        {formatMessages(messages.proClientPageNoClientTitle)}
      </CardTitle>
      <CardContent>
        {formatMessages(messages.proClientPageNoClientDescription)}
      </CardContent>
    </Card>
  );
}

export default NoClient;
