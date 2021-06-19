import SingleSelect from 'components/Shared/SingleSelect/SingleSelect';
import intl from 'helpers/intlHelper';
import React from 'react';
import { defineMessages } from 'react-intl';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import moment from 'moment';
import { useSetState } from 'react-use';

import { CALENDAR_FORM_TYPES } from 'components/Shared/constants';
import Switch from 'components/Shared/Switch/Switch';
import {
  APPOINTMENT_TYPES,
  LEGAL_ISSUE_TYPES,
  NOTIFICATION_TYPES,
} from 'components/Shared/options';
import { FormContainer } from 'components/Shared';
import {
  LineItemContainer,
  MultiLineItemContainer,
  Label,
  ValueSwitchContainer,
  Value,
  ValidationError,
  DetailsLineItemContainer,
  Footer,
  Button,
  EmptyButton,
} from '.';
import DateTimeInput from './DateTimeInput';
import SmFormInput from './SmFormInput';

const messages = defineMessages({
  typeOfLegalIssue: {
    id: 'app.proHomePage.appointmentForm.typeOfLegalIssue',
    defaultMessage: 'Type of legal issue',
  },
  begin: {
    id: 'app.proHomePage.appointmentForm.begin',
    defaultMessage: 'Begin',
  },
  end: {
    id: 'app.proHomePage.appointmentForm.end',
    defaultMessage: 'End',
  },
  firstName: {
    id: 'app.proHomePage.appointmentForm.firstName',
    defaultMessage: 'First name',
  },
  lastName: {
    id: 'app.proHomePage.appointmentForm.lastName',
    defaultMessage: 'Last name',
  },
  email: {
    id: 'app.proHomePage.appointmentForm.email',
    defaultMessage: 'E-Mail',
  },
  phoneNumber: {
    id: 'app.proHomePage.appointmentForm.phoneNumber',
    defaultMessage: 'Phone number',
  },
  statusOfClient: {
    id: 'app.proHomePage.appointmentForm.statusOfClient',
    defaultMessage: 'Status of the client',
  },
  insuranceForLawsuits: {
    id: 'app.proHomePage.appointmentForm.insuranceForLawsuits',
    defaultMessage: 'Insurance for lawsuits',
  },
  typeOfAppointment: {
    id: 'app.proHomePage.appointmentForm.typeOfAppointment',
    defaultMessage: 'Type of appointment',
  },
  notifications: {
    id: 'app.proHomePage.appointmentForm.notifications',
    defaultMessage: 'Notifications',
  },
  details: {
    id: 'app.proHomePage.appointmentForm.details',
    defaultMessage: 'Details',
  },
  createAppointment: {
    id: 'app.proHomePage.appointmentForm.createAppointment',
    defaultMessage: 'Create appointment',
  },
  createdAppointment: {
    id: 'app.proHomePage.appointmentForm.createdAppointment',
    defaultMessage: 'Created appointment',
  },
  newClient: {
    id: 'app.proHomePage.appointmentForm.newClient',
    defaultMessage: 'New Client',
  },
  existingInsurance: {
    id: 'app.proHomePage.appointmentForm.existingInsurance',
    defaultMessage: 'Existing',
  },
  cancelAppointment: {
    id: 'app.proHomePage.appointmentForm.cancelAppointment',
    defaultMessage: 'Cancel Appointment',
  },
  cancelledAppointment: {
    id: 'app.proHomePage.appointmentForm.cancelledAppointment',
    defaultMessage: 'Cancelled Appointment',
  },
  saveChanges: {
    id: 'app.proHomePage.appointmentForm.saveChanges',
    defaultMessage: 'Save Changes',
  },
  saved: {
    id: 'app.proHomePage.appointmentForm.saved',
    defaultMessage: 'Saved',
  },
  confirmAppointment: {
    id: 'app.proHomePage.appointmentForm.confirmAppointment',
    defaultMessage: 'Confirm Appointment',
  },
  denyInquiry: {
    id: 'app.proHomePage.appointmentForm.denyInquiry',
    defaultMessage: 'Deny Inquiry',
  },
  confirmedAppointment: {
    id: 'app.proHomePage.appointmentForm.confirmedAppointment',
    defaultMessage: 'Inquiry accepted and confirmed',
  },
  deniedInquiry: {
    id: 'app.proHomePage.appointmentForm.deniedInquiry',
    defaultMessage: 'Inquiry Denied',
  },
  legalIssueTypeRequired: {
    id: 'app.proHomePage.appointmentForm.legalIssueTypeRequired',
    defaultMessage: 'Please select a legal issue type.',
  },
  emailRequired: {
    id: 'app.proHomePage.appointmentForm.emailRequired',
    defaultMessage: 'Email is required.',
  },
  firstNameRequired: {
    id: 'app.proHomePage.appointmentForm.firstNameRequired',
    defaultMessage: 'First name is required.',
  },
  lastNameRequired: {
    id: 'app.proHomePage.appointmentForm.lastNameRequired',
    defaultMessage: 'Last name is required.',
  },
  phoneNumberRequired: {
    id: 'app.proHomePage.appointmentForm.phoneNumberRequired',
    defaultMessage: 'Phone number is required.',
  },
  appointmentTypeRequired: {
    id: 'app.proHomePage.appointmentForm.appointmentTypeRequired',
    defaultMessage: 'Please select an appointment type.',
  },
  detailsRequired: {
    id: 'app.proHomePage.appointmentForm.detailsRequired',
    defaultMessage: 'Details is required.',
  },
  invalidDateTime: {
    id: 'app.proHomePage.appointmentForm.invalidDateTime',
    defaultMessage: 'Please select a date and time after begin date.',
  },
});

function handleEndDateValidation(toDate) {
  const { toTime, fromTime, fromDate } = this.parent;
  const [fromHours, fromMinutes] = fromTime.split(':');
  const [toHours, toMinutes] = toTime.split(':');

  const begin = moment(fromDate)
    .set('hour', fromHours)
    .set('minute', fromMinutes)
    .set('second', 0);

  const end = moment(toDate)
    .set('hour', toHours)
    .set('minute', toMinutes)
    .set('second', 0);

  return begin.isBefore(end, 'minute');
}

function AppointmentForm({ type }) {
  const [
    { isSuccess, isAlternateSuccess, isLoading, isAlternateLoading },
  ] = useSetState({
    isSuccess: false,
    isAlternateSuccess: false,
    isLoading: false,
    isAlternateLoading: false,
  });

  const {
    values: {
      legalIssueType,
      fromDate,
      toDate,
      fromTime,
      toTime,
      newCustomer,
      existingInsurance,
      appointmentType,
      notificationType,
    },
    setFieldValue,
    setTouched,
    getFieldProps,
    errors,
    touched,
    submitForm,
  } = useFormik({
    initialValues: {
      legalIssueType: null,
      fromDate: moment(),
      toDate: moment(),
      fromTime: '02:30',
      toTime: '03:30',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      newCustomer: false,
      existingInsurance: false,
      appointmentType: null,
      notificationType: NOTIFICATION_TYPES[0],
      details: '',
    },
    validationSchema: Yup.object({
      legalIssueType: Yup.object({})
        .nullable()
        .required(intl.formatMessage(messages.legalIssueTypeRequired)),
      email: Yup.string().required(intl.formatMessage(messages.emailRequired)),
      firstName: Yup.string().required(
        intl.formatMessage(messages.firstNameRequired),
      ),
      lastName: Yup.string().required(
        intl.formatMessage(messages.lastNameRequired),
      ),
      phoneNumber: Yup.string().required(
        intl.formatMessage(messages.phoneNumberRequired),
      ),
      appointmentType: Yup.object({})
        .nullable()
        .required(intl.formatMessage(messages.appointmentTypeRequired)),
      details: Yup.string().required(
        intl.formatMessage(messages.detailsRequired),
      ),
      toDate: Yup.object({})
        .required()
        .test(
          'date-comparison-test',
          intl.formatMessage(messages.invalidDateTime),
          handleEndDateValidation,
        ),
    }),
  });

  function handleDateTouched() {
    if (!touched.toDate) {
      setTimeout(() => {
        setTouched({
          toDate: true,
        });
      });
    }
  }

  function handleLegalIssueChange(selected) {
    setFieldValue('legalIssueType', selected);
  }

  function handleFromDateChange(date) {
    setFieldValue('fromDate', date);
    handleDateTouched();
  }

  function handleToDateChange(date) {
    setFieldValue('toDate', date);
    handleDateTouched();
  }

  function handleFromTimeChange(time) {
    setFieldValue('fromTime', time);
    handleDateTouched();
  }

  function handleToTimeChange(time) {
    setFieldValue('toTime', time);
    handleDateTouched();
  }

  function handleClientStatusToggle() {
    setFieldValue('newCustomer', !newCustomer);
  }

  function handleInsuranceStatusToggle() {
    setFieldValue('existingInsurance', !existingInsurance);
  }

  function handleTypeChange(selected) {
    setFieldValue('appointmentType', selected);
  }

  function handleNotificationChange(selected) {
    setFieldValue('notificationType', selected);
  }

  function getFieldPropsWithErrors(name) {
    return {
      ...getFieldProps(name),
      error: errors[name],
      touched: touched[name],
    };
  }

  function handleOnAlternateClick() {}

  function getClientInfoDisabled() {
    return (
      type === CALENDAR_FORM_TYPES.PAST ||
      type === CALENDAR_FORM_TYPES.CANCELLED
    );
  }

  const isClientInfoDisabled = getClientInfoDisabled();

  return (
    <FormContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.typeOfLegalIssue)}</Label>
          <SingleSelect
            options={LEGAL_ISSUE_TYPES}
            onOptionSelect={handleLegalIssueChange}
            selected={legalIssueType}
          />
          {errors.legalIssueType && touched.legalIssueType && (
            <ValidationError>{errors.legalIssueType}</ValidationError>
          )}
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.begin)}</Label>
          <DateTimeInput
            date={fromDate}
            onDateChange={handleFromDateChange}
            time={fromTime}
            onTimeChange={handleFromTimeChange}
            hideDateClear
          />
        </LineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.end)}</Label>
          <DateTimeInput
            date={toDate}
            onDateChange={handleToDateChange}
            time={toTime}
            onTimeChange={handleToTimeChange}
            hideDateClear
          />
          {errors.toDate && touched.toDate && (
            <ValidationError>{errors.toDate}</ValidationError>
          )}
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.firstName)}</Label>
          <SmFormInput
            {...getFieldPropsWithErrors('firstName')}
            readOnly={isClientInfoDisabled}
          />
        </LineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.lastName)}</Label>
          <SmFormInput
            {...getFieldPropsWithErrors('lastName')}
            readOnly={isClientInfoDisabled}
          />
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.email)}</Label>
          <SmFormInput
            {...getFieldPropsWithErrors('email')}
            readOnly={isClientInfoDisabled}
          />
        </LineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.phoneNumber)}</Label>
          <SmFormInput
            {...getFieldPropsWithErrors('phoneNumber')}
            readOnly={isClientInfoDisabled}
          />
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.statusOfClient)}</Label>
          <ValueSwitchContainer>
            <Value>{intl.formatMessage(messages.newClient)}</Value>
            <Switch
              onToggleSwitch={handleClientStatusToggle}
              readOnly={isClientInfoDisabled}
              isSwitchedOn={newCustomer}
            />
          </ValueSwitchContainer>
        </LineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.insuranceForLawsuits)}</Label>
          <ValueSwitchContainer>
            <Value>{intl.formatMessage(messages.existingInsurance)}</Value>
            <Switch
              onToggleSwitch={handleInsuranceStatusToggle}
              isSwitchedOn={existingInsurance}
            />
          </ValueSwitchContainer>
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.typeOfAppointment)}</Label>
          <SingleSelect
            options={APPOINTMENT_TYPES}
            onOptionSelect={handleTypeChange}
            selected={appointmentType}
          />
          {errors.appointmentType && touched.appointmentType && (
            <ValidationError>{errors.appointmentType}</ValidationError>
          )}
        </LineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.notifications)}</Label>
          <SingleSelect
            options={NOTIFICATION_TYPES}
            onOptionSelect={handleNotificationChange}
            selected={notificationType}
          />
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <DetailsLineItemContainer>
          <Label>{intl.formatMessage(messages.details)}</Label>
          <SmFormInput textArea {...getFieldPropsWithErrors('details')} />
        </DetailsLineItemContainer>
      </MultiLineItemContainer>
      <Footer>
        {(() => {
          if (
            type === CALENDAR_FORM_TYPES.UPCOMING ||
            type === CALENDAR_FORM_TYPES.INQUIRIES
          ) {
            return (
              <Button
                onClick={handleOnAlternateClick}
                disabled={isAlternateLoading || isAlternateSuccess}
              >
                {(() => {
                  if (type === CALENDAR_FORM_TYPES.INQUIRIES) {
                    return isAlternateSuccess
                      ? intl.formatMessage(messages.deniedInquiry)
                      : intl.formatMessage(messages.denyInquiry);
                  }
                  return isAlternateSuccess
                    ? intl.formatMessage(messages.cancelledAppointment)
                    : intl.formatMessage(messages.cancelAppointment);
                })()}
              </Button>
            );
          }
          return <EmptyButton />;
        })()}
        <Button primary onClick={submitForm} disabled={isLoading || isSuccess}>
          {(() => {
            switch (type) {
              case CALENDAR_FORM_TYPES.INQUIRIES:
                return isSuccess
                  ? intl.formatMessage(messages.confirmedAppointment)
                  : intl.formatMessage(messages.confirmAppointment);
              case CALENDAR_FORM_TYPES.NEW:
                return isSuccess
                  ? intl.formatMessage(messages.createdAppointment)
                  : intl.formatMessage(messages.createAppointment);
              default:
                return isSuccess
                  ? intl.formatMessage(messages.saved)
                  : intl.formatMessage(messages.saveChanges);
            }
          })()}
        </Button>
      </Footer>
    </FormContainer>
  );
}

AppointmentForm.propTypes = {
  type: PropTypes.number,
};

AppointmentForm.defaultProps = {
  type: CALENDAR_FORM_TYPES.NEW,
};

export default AppointmentForm;
