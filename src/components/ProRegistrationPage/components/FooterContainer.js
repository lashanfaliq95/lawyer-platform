import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { IoMdArrowBack } from 'react-icons/io';

import formatMessages from 'components/formatMessages';
import { PrimaryButton, SecondaryButton } from 'components/Shared/Buttons';

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const BackIcon = styled(IoMdArrowBack)`
  margin-right: 0.5rem;
`;

const Separator = styled.div`
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

function FooterContainer({
  hideNext,
  onPrevious,
  onNext,
  previousLabel,
  nextDisabled,
  nextLabel,
}) {
  return (
    <Container>
      <SecondaryButton type='button' onClick={onPrevious}>
        <BackIcon />
        {previousLabel || formatMessages(messages.back)}
      </SecondaryButton>
      <Separator />
      {!hideNext && (
        <PrimaryButton
          disabled={nextDisabled}
          onClick={onNext}
          type={onNext ? 'button' : 'submit'}
        >
          {nextLabel || formatMessages(messages.next)}
        </PrimaryButton>
      )}
    </Container>
  );
}

FooterContainer.propTypes = {
  hideNext: PropTypes.bool,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func,
  previousLabel: PropTypes.oneOf([PropTypes.string, PropTypes.shape({})]),
  nextDisabled: PropTypes.bool,
  nextLabel: PropTypes.oneOf([PropTypes.string, PropTypes.shape({})]),
};

FooterContainer.defaultProps = {
  hideNext: false,
  onNext: undefined,
  previousLabel: null,
  nextDisabled: false,
  nextLabel: null,
};

export default FooterContainer;
