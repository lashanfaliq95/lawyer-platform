import React from 'react';

import NavigationBar from 'components/NavigationBar';
import formatMessages from 'components/formatMessages';

import {
  ContactFormContainer, Content, Title, FormContent, FormSubHeading, FormSubmitBtn, FormInput,
} from '../styles';
import messages from '../messages';

const ListSection = () => (
  <>
    <NavigationBar />
    <ContactFormContainer>
      <Content>
        <Title>{formatMessages(messages.title)}</Title>
        <FormContent>
          <FormSubHeading for="getSupportText">{formatMessages(messages.contactUs)}</FormSubHeading>
          <FormInput type="textarea" id="getSupportText" />
          <FormSubmitBtn color="primary">{formatMessages(messages.send)}</FormSubmitBtn>
        </FormContent>
      </Content>
    </ContactFormContainer>
  </>
);

ListSection.propTypes = {

};

export default ListSection;
