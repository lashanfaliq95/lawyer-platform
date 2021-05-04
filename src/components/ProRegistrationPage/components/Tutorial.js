import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';

import formatMessages from 'components/formatMessages';
import TimeSlots from 'components/Shared/TimeSlots/TimeSlots';
import ProgressBar from './ProgressBar';
import FooterContainer from './FooterContainer';
import { REGISTRATION_STEPS } from '../constants';

const messages = defineMessages({
  title: {
    id: 'app.proRegisterPage.tutorial.title',
    defaultMessage: 'Book a Tutorial',
  },
  subTitle: {
    id: 'app.proRegisterPage.tutorial.subTitle',
    defaultMessage:
      'Please select a date and a timeslot for the free tutorial.',
  },
  description: {
    id: 'app.proRegisterPage.tutorial.description',
    defaultMessage: 'It is best to plan an hour for the tutorial.',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fbfbfb;
  padding: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-top: 1rem;
`;

const SubTitle = styled.span`
  margin-top: 0.5rem;
  display: block;
  font-size: 20px;
`;

const Description = styled.span`
  font-size: 15px;
  margin-top: 0.5rem;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
`;

function Tutorial({
  onStepChange,
  current: { selectedDateTime: parentSelectedDateTime },
  onSubmit,
}) {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  useEffect(() => {
    setSelectedDateTime(parentSelectedDateTime);
    //  eslint-disable-next-line
  }, []);

  function handleOnPreviousClick() {
    onStepChange(REGISTRATION_STEPS.HOW_TO_USE);
  }

  function handleOnNextClick() {
    onSubmit({
      step: REGISTRATION_STEPS.CONFIRMATION,
      [REGISTRATION_STEPS.TUTORIAL]: {
        selectedDateTime,
      },
    });
  }

  return (
    <Container>
      <ProgressBar value={7} />
      <Title>{formatMessages(messages.title)}</Title>
      <SubTitle>{formatMessages(messages.subTitle)}</SubTitle>
      <Description>{formatMessages(messages.description)}</Description>
      <CalendarContainer>
        <TimeSlots
          selected={selectedDateTime}
          onSelectedDateTimeChange={setSelectedDateTime}
        />
      </CalendarContainer>
      <FooterContainer
        onPrevious={handleOnPreviousClick}
        onNext={handleOnNextClick}
        nextDisabled={!selectedDateTime}
      />
    </Container>
  );
}

Tutorial.propTypes = {
  current: PropTypes.shape({
    selectedDateTime: PropTypes.instanceOf(Date),
  }).isRequired,
  onStepChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Tutorial;
