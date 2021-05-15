import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import NavigationBar from 'components/NavigationBar';
import formatMessages from 'components/formatMessages';
import { setUserMessage } from 'components/LoginPage/actions';

import {
  ContactFormContainer,
  Content,
  Title,
  FormContent,
  FormSubHeading,
  FormSubmitBtn,
  FormInput,
} from '../styles';
import messages from '../messages';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  return (
    <>
      <NavigationBar />
      <ContactFormContainer>
        <Content>
          <Title>{formatMessages(messages.title)}</Title>
          <FormContent>
            <FormSubHeading for='getSupportText'>
              {formatMessages(messages.contactUs)}
            </FormSubHeading>
            <FormInput
              value={message}
              type='textarea'
              id='getSupportText'
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <FormSubmitBtn
              color='primary'
              onClick={() => {
                dispatch(setUserMessage({ message }));
              }}
            >
              {formatMessages(messages.send)}
            </FormSubmitBtn>
          </FormContent>
        </Content>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;
