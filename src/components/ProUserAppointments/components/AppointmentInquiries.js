import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { AppointmentPropType } from 'helpers/types';
import AppointmentInquiry from './AppointmentInquiry';

const messages = defineMessages({
  title: {
    id: 'app.proUserAppointments.appointmentInquiries.title',
    defaultMessage: 'Ongoing / Future Appointments',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: block;
  padding: 1rem 0;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 1.3rem;
`;

function AppointmentInquiries({ inquiries, onInquiryClick }) {
  const intl = useIntl();

  return (
    <Container>
      <Title>{intl.formatMessage(messages.title)}</Title>
      {inquiries.map((inquiry) => (
        <AppointmentInquiry
          inquiry={inquiry}
          key={inquiry.id}
          onInquiryClick={onInquiryClick}
        />
      ))}
    </Container>
  );
}

AppointmentInquiries.propTypes = {
  inquiries: PropTypes.arrayOf(AppointmentPropType.isRequired).isRequired,
  onInquiryClick: PropTypes.func,
};

AppointmentInquiries.defaultProps = {
  onInquiryClick: () => {},
};

export default AppointmentInquiries;
