import React from 'react';
import moment from 'moment';
import { defineMessages } from 'react-intl';
import styled, { css } from 'styled-components';

import intl from 'helpers/intlHelper';
import { AppointmentPropType } from 'helpers/types';
import {
  getLocalizedDayOfWeek,
  getLocalizedMonth,
} from 'components/Shared/utils';

const messages = defineMessages({
  title: {
    id: 'app.proAppointment.title',
    defaultMessage: 'Details of the Appointment',
  },
  name: {
    id: 'app.proAppointment.name',
    defaultMessage: 'Name',
  },
  dateAndTime: {
    id: 'app.proAppointment.dateAndTime',
    defaultMessage: 'Day and Time',
  },
  legalIssue: {
    id: 'app.proAppointment.legalIssue',
    defaultMessage: 'Legal Issue',
  },
  details: {
    id: 'app.proAppointment.details',
    defaultMessage: 'Details',
  },
  legalInsurance: {
    id: 'app.proAppointment.legalInsurance',
    defaultMessage: 'Legal Insurance',
  },
  statusOfClient: {
    id: 'app.proAppointment.statusOfClient',
    defaultMessage: 'Status of Client',
  },
  typeOfAppointment: {
    id: 'app.proAppointment.typeOfAppointment',
    defaultMessage: 'Type of Appointment',
  },
  location: {
    id: 'app.proAppointment.location',
    defaultMessage: 'Location',
  },
  expert: {
    id: 'app.proAppointment.expert',
    defaultMessage: 'Expert',
  },
  email: {
    id: 'app.proAppointment.email',
    defaultMessage: 'E-Mail',
  },
  mobileNumber: {
    id: 'app.proAppointment.mobileNumber',
    defaultMessage: 'Mobile Number',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  font-size: 0.9rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row;
      cursor: pointer;
    `}

  ${Label}:not(:first-child) {
    margin-top: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: 10px;

  ${DetailItem}:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
  margin: 1rem 0rem;
  display: block;
`;

const Value = styled.span`
  display: block;
`;

function DetailsPane({ appointment }) {
  const {
    user: { firstName, lastName },
    date,
  } = appointment;

  return (
    <Container>
      <SubTitle>{intl.formatMessage(messages.title)}</SubTitle>
      <DetailsContainer>
        <DetailItem>
          <Label>{intl.formatMessage(messages.name)}</Label>
          <Value>{`${firstName} ${lastName}`}</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.dateAndTime)}</Label>
          <Value>
            {`${intl.formatMessage(
              getLocalizedDayOfWeek(date),
            )} ${intl.formatMessage(getLocalizedMonth(date))} ${moment(
              date,
            ).format('YYYY, HH:mm')}`}
          </Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.legalIssue)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.details)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.legalInsurance)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.statusOfClient)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.typeOfAppointment)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.location)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.expert)}</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>{intl.formatMessage(messages.email)}</Label>
          <Value>Sample</Value>
          <Label>{intl.formatMessage(messages.mobileNumber)}</Label>
          <Value>Sample</Value>
        </DetailItem>
      </DetailsContainer>
    </Container>
  );
}

DetailsPane.propTypes = {
  appointment: AppointmentPropType.isRequired,
};

export default DetailsPane;
