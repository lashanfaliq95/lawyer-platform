import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { IoMdArrowBack } from 'react-icons/io';

import formatMessages from 'components/formatMessages';
import { PrimaryButton, SecondaryButton } from './Shared';

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BackIcon = styled(IoMdArrowBack)`
  margin-right: 0.5rem;
`;

const RowInputSeparator = styled.div`
  width: 10px;
`;

const messages = defineMessages({
  back: {
    id: 'app.proRegisterPage.btnBack',
    defaultMessage: 'Back',
  },
  next: {
    id: 'app.proRegisterPage.btnNext',
    defaultMessage: 'Next',
  },
});

function FooterContainer({ onPrevious }) {
  return (
    <Container>
      <SecondaryButton type='button' onClick={onPrevious}>
        <BackIcon />
        {formatMessages(messages.back)}
      </SecondaryButton>
      <RowInputSeparator />
      <PrimaryButton type='submit'>
        {formatMessages(messages.next)}
      </PrimaryButton>
    </Container>
  );
}

FooterContainer.propTypes = {
  onPrevious: PropTypes.func.isRequired,
};

export default FooterContainer;
