/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { IoCheckmark } from 'react-icons/io5';
import { useSetState } from 'react-use';

import formatMessages from 'components/formatMessages';
import messages from '../messages';
import TextInput from './TextInput';
import { Button, ButtonContainer, ContactInfo, Container } from '../styles';

const Row = styled.div`
  display: flex;
`;

function ContactInformation({ firstName, lastName, email, mobileNumber }) {
  const [{ submitted }, setState] = useSetState({
    submitted: false,
  });

  function handleSubmit() {
    setState((prevState) => ({ submitted: !prevState.submitted }));
  }

  return (
    <Container>
      <h6>{formatMessages(messages.contactInfoTitle)}</h6>
      <ContactInfo>
        <Row>
          <TextInput label={messages.contactInfoFirstName} value={firstName} />
          <TextInput label={messages.contactInfoLastName} value={lastName} />
        </Row>
        <TextInput label={messages.contactInfoEmail} value={email} />
        <TextInput
          label={messages.contactInfoMobileNumber}
          value={mobileNumber}
        />
        <ButtonContainer className='pt-3 pr-3'>
          <Button type='button' saved={submitted} onClick={handleSubmit}>
            <div>
              {submitted && <IoCheckmark size={16} />}{' '}
              {formatMessages(
                submitted ? messages.btnChangesSaved : messages.btnSaveChanges,
              )}
            </div>
          </Button>
        </ButtonContainer>
      </ContactInfo>
    </Container>
  );
}

ContactInformation.propTypes = {
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string,
};

ContactInformation.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
};

export default ContactInformation;
