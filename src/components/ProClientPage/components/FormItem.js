import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';

import intl from 'helpers/intlHelper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 12px;
  border-bottom: 1px solid #dddddd;
`;

const InputTitle = styled.span`
  font-weight: 600;
  padding: 8px 0;
`;

const InputValue = styled.span`
  font-size: 0.8rem;
`;

function FormItem({ title, value }) {
  return (
    <Container>
      <InputTitle>{intl.formatMessage(title)}</InputTitle>
      <InputValue>{value}</InputValue>
    </Container>
  );
}

FormItem.propTypes = {
  title: shape({}).isRequired,
  value: string.isRequired,
};

export default FormItem;
