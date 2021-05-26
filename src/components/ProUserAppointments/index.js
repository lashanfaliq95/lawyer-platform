import React from 'react';
import styled from 'styled-components';
import { IoExitOutline } from 'react-icons/io5';
import moment from 'moment';
import { useSetState } from 'react-use';
import { useHistory } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';

import {
  getAppointmentsFiltered,
  getLocalizedMonth,
} from 'components/Shared/utils';
import { APPOINTMENTS } from 'helpers/data';
import {
  APPOINTMENT_RANGES,
  APPOINTMENT_TYPES,
} from 'components/Shared/constants';
import ProTopBar from 'components/Shared/ProTopBar';
import FilterPane from './components/FilterPane';
import AppointmentInquiries from './components/AppointmentInquiries';
import Appointments from './components/Appointments';

const messages = defineMessages({
  emptyTitle: {
    id: 'app.proUserAppointments.emptyTitle',
    defaultMessage: 'Houston, we have a problem!',
  },
  emptyDescription: {
    id: 'app.proUserAppointments.emptyDescription',
    defaultMessage:
      'We could not find any appointment regarding inquiry. Try to change the search filter and pay attention that you did not misspell anything during typing.',
  },
  from: {
    id: 'app.proUserAppointments.from',
    defaultMessage: 'From',
  },
  appointments: {
    id: 'app.proUserAppointments.appointments',
    defaultMessage: 'Appointments',
  },
  noAppointmentsFound: {
    id: 'app.proUserAppointments.noAppointmentsFound',
    defaultMessage: 'No Appointments Found',
  },
  today: {
    id: 'app.proUserAppointments.today',
    defaultMessage: 'Today',
  },
  yesterday: {
    id: 'app.proUserAppointments.yesterday',
    defaultMessage: 'Yesterday',
  },
  thisWeek: {
    id: 'app.proUserAppointments.thisWeek',
    defaultMessage: 'This Week',
  },
  thisMonth: {
    id: 'app.proUserAppointments.thisMonth',
    defaultMessage: 'This Month',
  },
  thisYear: {
    id: 'app.proUserAppointments.thisYear',
    defaultMessage: 'This Year',
  },
});

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #fbfbfb;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleTopPane = styled.div`
  display: flex;
`;

const TitleLeftPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const TitleRightPane = styled.div`
  display: flex;
  padding: 1rem;
`;

const TitleRightButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 5rem;
  background-color: #d2d2d2;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const FilterContainer = styled.div`
  margin-top: 0.5rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
`;

const TitleDescription = styled.div`
  font-size: 0.9rem;
`;

const EmptyContainer = styled.div`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
`;

const EmptyTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
`;

const EmptyDescription = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

function ProUserAppointments() {
  const history = useHistory();
  const intl = useIntl();

  const APPOINTMENT_SECTION = [
    {
      type: APPOINTMENT_RANGES.TODAY,
      title: intl.formatMessage(messages.today),
    },
    {
      type: APPOINTMENT_RANGES.YESTERDAY,
      title: intl.formatMessage(messages.yesterday),
    },
    {
      type: APPOINTMENT_RANGES.THIS_WEEK,
      title: intl.formatMessage(messages.thisWeek),
    },
    {
      type: APPOINTMENT_RANGES.THIS_MONTH,
      title: intl.formatMessage(messages.thisMonth),
    },
    {
      type: APPOINTMENT_RANGES.THIS_YEAR,
      title: intl.formatMessage(messages.thisYear),
    },
  ];

  function getStructuredAppointments(appointments) {
    return [
      ...APPOINTMENT_SECTION.map(({ type, ...rest }) => ({
        ...rest,
        appointments: getAppointmentsFiltered(appointments, type),
      })),
      ...getAppointmentsFiltered(
        appointments,
        APPOINTMENT_RANGES.CUSTOM,
        intl.formatMessage,
      ),
    ];
  }

  const [
    { filterStartDate, filterEndDate, selectedTypes },
    setState,
  ] = useSetState({
    filterStartDate: moment().startOf('month'),
    filterEndDate: moment(),
    selectedTypes: [],
  });

  function handleOnFilterDateChanged({ startDate, endDate }) {
    setState({
      filterStartDate: startDate,
      filterEndDate: endDate,
    });
  }

  function handleOnFilterTypeChange(updatedSelectedTypes) {
    setState({ selectedTypes: updatedSelectedTypes });
  }

  function handleOnAppointmentClick({ id }) {
    history.push(`/pro/appointments/${id}`);
  }

  const filteredAppointments = getStructuredAppointments(
    APPOINTMENTS.filter(({ type }) => type !== APPOINTMENT_TYPES.INQUIRIES),
  );

  const inquiries = APPOINTMENTS.filter(
    ({ type }) => type === APPOINTMENT_TYPES.INQUIRIES,
  );

  const hasAppointmentsOrInquiries = APPOINTMENTS.length !== 0;

  const title = !hasAppointmentsOrInquiries
    ? intl.formatMessage(messages.noAppointmentsFound)
    : `${APPOINTMENTS.length} ${intl.formatMessage(messages.appointments)}`;

  return (
    <Container>
      <ProTopBar />
      <ContentContainer>
        <TitleContainer>
          <TitleTopPane>
            <TitleLeftPane>
              <Title>{title}</Title>
              <TitleDescription>
                {`${intl.formatMessage(messages.from)} ${filterStartDate.format(
                  'DD.',
                )} ${intl.formatMessage(
                  getLocalizedMonth(filterStartDate),
                )} ${filterStartDate.format('YYYY')} - ${filterEndDate.format(
                  'DD.',
                )} ${intl.formatMessage(
                  getLocalizedMonth(filterStartDate),
                )} ${filterEndDate.format('YYYY')}`}
              </TitleDescription>
            </TitleLeftPane>
            <TitleRightPane>
              <TitleRightButton>
                <IoExitOutline size={20} />
              </TitleRightButton>
            </TitleRightPane>
          </TitleTopPane>
          <FilterContainer>
            <FilterPane
              filterStartDate={filterStartDate}
              filterEndDate={filterEndDate}
              selectedTypes={selectedTypes}
              onFilterDateSelect={handleOnFilterDateChanged}
              onFilterTypeChange={handleOnFilterTypeChange}
            />
          </FilterContainer>
        </TitleContainer>
        {hasAppointmentsOrInquiries ? (
          <>
            <AppointmentInquiries
              inquiries={inquiries}
              onInquiryClick={handleOnAppointmentClick}
            />
            {filteredAppointments.map((custom) => (
              <Appointments
                appointments={custom.appointments}
                key={custom.title}
                title={custom.title}
                onAppointmentClick={handleOnAppointmentClick}
              />
            ))}
          </>
        ) : (
          <EmptyContainer>
            <EmptyTitle>{intl.formatMessage(messages.emptyTitle)}</EmptyTitle>
            <EmptyDescription>
              {intl.formatMessage(messages.emptyDescription)}
            </EmptyDescription>
          </EmptyContainer>
        )}
      </ContentContainer>
    </Container>
  );
}

export default ProUserAppointments;
