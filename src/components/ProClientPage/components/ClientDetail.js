import React from 'react';
import { string, number, func } from 'prop-types';
import styled, { css } from 'styled-components';

import formatMessages from 'components/formatMessages';
import messages from '../messages';
import FormItem from './FormItem';

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const Text = styled.span`
  font-weight: 600;
`;

const Title = styled(Text)`
  padding: 8px 0;
`;

const Form = styled.div`
  border: 1px solid #dddddd;
  border-radius: 20px;
  background-color: #ffffff;
  width: 100%;
  padding: 1rem 2rem;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FormRowDivider = styled.div`
  width: 4rem;
`;

const FormButton = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px 16px;
  margin-top: 1rem;

  ${({ primary }) => {
    return primary
      ? css`
          background-color: #105fbb;
          color: #ffffff;
        `
      : css`
          color: #105fbb;
        `;
  }}
`;

function ClientDetail({
  id,
  firstName,
  lastName,
  email,
  mobile,
  onSave,
  onRemove,
}) {
  function handleSave() {
    onSave(id);
  }

  function handleRemove() {
    onRemove(id);
  }

  return (
    <Container>
      <Title>{formatMessages(messages.proClientPageClientDetailTitle)}</Title>
      <Form>
        <FormRow>
          <FormItem
            title={messages.proClientPageClientDetailFirstName}
            value={firstName}
          />
          <FormRowDivider />
          <FormItem
            title={messages.proClientPageClientDetailLastName}
            value={lastName}
          />
        </FormRow>
        <FormItem
          title={messages.proClientPageClientDetailEmail}
          value={email}
        />
        <FormItem
          title={messages.proClientPageClientDetailMobile}
          value={mobile}
        />
        <FormRow>
          <FormButton type='button' onClick={handleRemove}>
            {formatMessages(messages.proClientPageClientDetailBtnRemove)}
          </FormButton>
          <FormButton type='button' primary onClick={handleSave}>
            {formatMessages(messages.proClientPageClientDetailBtnSave)}
          </FormButton>
        </FormRow>
      </Form>
    </Container>
  );
}

ClientDetail.propTypes = {
  id: number.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  email: string.isRequired,
  mobile: string.isRequired,
  onSave: func.isRequired,
  onRemove: func.isRequired,
};

export default ClientDetail;
