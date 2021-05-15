import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaRegCalendar } from 'react-icons/fa';
import { useSetState } from 'react-use';
import { defineMessages, useIntl } from 'react-intl';

import { getExpiryDate, prependZero } from 'components/Shared/utils';
import { AppointmentPropType } from 'helpers/types';

const messages = defineMessages({
  title: {
    id: 'app.proUserAppointments.appointmentInquiry.title',
    defaultMessage: 'Inquiry',
  },
  hours: {
    id: 'app.proUserAppointments.appointmentInquiry.hours',
    defaultMessage: 'hours',
  },
  hour: {
    id: 'app.proUserAppointments.appointmentInquiry.hour',
    defaultMessage: 'hour',
  },
  minutes: {
    id: 'app.proUserAppointments.appointmentInquiry.minutes',
    defaultMessage: 'minutes',
  },
  minute: {
    id: 'app.proUserAppointments.appointmentInquiry.minute',
    defaultMessage: 'minute',
  },
  descriptionPrefix: {
    id: 'app.proUserAppointments.appointmentInquiry.descriptionPrefix',
    defaultMessage: 'You still have',
  },
  descriptionSuffix: {
    id: 'app.proUserAppointments.appointmentInquiry.descriptionSuffix',
    defaultMessage: 'to confirm the appointment',
  },
});

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background-color: #225393;
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-right: auto;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background-color: #ffffff;
`;

const DetailsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Label = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
`;

const Title = styled(Label)`
  font-weight: 500;
  font-size: 1.2rem;
`;

function AppointmentInquiry({ inquiry, onInquiryClick }) {
  const intl = useIntl();

  const { createdAt } = inquiry;

  const [{ hours, minutes }] = useSetState({
    ...getExpiryDate(createdAt),
  });

  function handleOnClick() {
    onInquiryClick(inquiry);
  }

  function getTimeStamps() {
    const prependedMinutes = prependZero(minutes);

    if (hours > 1) {
      return `${hours}:${prependedMinutes} ${intl.formatMessage(
        messages.hours,
      )}`;
    }
    if (hours > 0) {
      return `${hours}:${prependedMinutes} ${intl.formatMessage(
        messages.hour,
      )}`;
    }
    if (minutes > 1) {
      return `${prependedMinutes} ${intl.formatMessage(messages.minutes)}`;
    }
    return `${prependedMinutes} ${intl.formatMessage(messages.minute)}`;
  }

  return (
    <Container onClick={handleOnClick}>
      <IconContainer>
        <FaRegCalendar size={20} />
      </IconContainer>
      <DetailsContainer>
        <Title>{intl.formatMessage(messages.title)}</Title>
        <Label>
          {`${intl.formatMessage(messages.descriptionPrefix)} ${getTimeStamps(
            hours,
            minutes,
          )}, ${intl.formatMessage(messages.descriptionSuffix)}`}
        </Label>
      </DetailsContainer>
    </Container>
  );
}

AppointmentInquiry.propTypes = {
  inquiry: AppointmentPropType.isRequired,
  onInquiryClick: PropTypes.func,
};

AppointmentInquiry.defaultProps = {
  onInquiryClick: () => {},
};

export default AppointmentInquiry;
