import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { defineMessages } from 'react-intl';

import intl from 'helpers/intlHelper';
import { CLIENTS } from 'helpers/data';
import SingleSelect from 'components/Shared/SingleSelect/SingleSelect';
import Switch from 'components/Shared/Switch/Switch';
import { REPEAT_FREQUENCY_TYPES } from 'components/Shared/options';
import { FormContainer } from 'components/Shared';
import {
  MultiLineItemContainer,
  LineItemContainer,
  Value,
  Label,
  ValueSwitchContainer,
  DetailsLineItemContainer,
  Footer,
  Button,
  ValidationError,
  EmptyButton,
} from '.';
import DateTimeInput from './DateTimeInput';
import SmFormInput from './SmFormInput';

const messages = defineMessages({
  description: {
    id: 'app.proHomePage.absenceForm.description',
    defaultMessage: 'Description',
  },
  begin: {
    id: 'app.proHomePage.absenceForm.begin',
    defaultMessage: 'Begin',
  },
  end: {
    id: 'app.proHomePage.absenceForm.end',
    defaultMessage: 'End',
  },
  repeats: {
    id: 'app.proHomePage.absenceForm.repeats',
    defaultMessage: 'Repeats',
  },
  recurringAbsence: {
    id: 'app.proHomePage.absenceForm.recurringAbsence',
    defaultMessage: 'Set as recurring absence',
  },
  experts: {
    id: 'app.proHomePage.absenceForm.experts',
    defaultMessage: 'Experts',
  },
  location: {
    id: 'app.proHomePage.absenceForm.location',
    defaultMessage: 'Location',
  },
  details: {
    id: 'app.proHomePage.absenceForm.details',
    defaultMessage: 'Details',
  },
  frequency: {
    id: 'app.proHomePage.absenceForm.frequency',
    defaultMessage: 'Frequency',
  },
  endDate: {
    id: 'app.proHomePage.absenceForm.endDate',
    defaultMessage: 'End Date',
  },
  cancel: {
    id: 'app.proHomePage.absenceForm.cancel',
    defaultMessage: 'Cancel',
  },
  createAbsence: {
    id: 'app.proHomePage.absenceForm.createAbsence',
    defaultMessage: 'Create Absence',
  },
  descriptionRequired: {
    id: 'app.proHomePage.absenceForm.descriptionRequired',
    defaultMessage: 'Description is required.',
  },
  locationRequired: {
    id: 'app.proHomePage.absenceForm.locationRequired',
    defaultMessage: 'Location is required.',
  },
  detailsRequired: {
    id: 'app.proHomePage.absenceForm.detailsRequired',
    defaultMessage: 'Details is required.',
  },
  expertRequired: {
    id: 'app.proHomePage.absenceForm.expertRequired',
    defaultMessage: 'Please select an expert.',
  },
  frequencyRequired: {
    id: 'app.proHomePage.absenceForm.frequencyRequired',
    defaultMessage: 'Frequency is required.',
  },
  invalidDateTime: {
    id: 'app.proHomePage.absenceForm.invalidDateTime',
    defaultMessage: 'Please select a date and time after begin date.',
  },
});

const DUMMY_EXPERTS = CLIENTS.map(({ firstName, lastName, id }) => ({
  value: id,
  label: `${firstName} ${lastName}`,
}));

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

function AbsenceForm() {
  const {
    values: {
      fromDate,
      toDate,
      fromTime,
      toTime,
      isRepeating,
      expert,
      frequency,
      endDate,
    },
    setFieldValue,
    setTouched,
    getFieldProps,
    errors,
    touched,
    submitForm,
  } = useFormik({
    initialValues: {
      description: '',
      fromDate: moment(),
      toDate: moment(),
      fromTime: '02:30',
      toTime: '03:30',
      isRepeating: false,
      frequency: null,
      endDate: null,
      expert: null,
      location: '',
      details: '',
    },
    validationSchema: Yup.object({
      description: Yup.string().required(
        intl.formatMessage(messages.descriptionRequired),
      ),
      location: Yup.string().required(
        intl.formatMessage(messages.locationRequired),
      ),
      details: Yup.string().required(
        intl.formatMessage(messages.detailsRequired),
      ),
      expert: Yup.object({})
        .nullable()
        .required(intl.formatMessage(messages.expertRequired)),
      isRepeating: Yup.bool(),
      frequency: Yup.object({})
        .nullable()
        .when('isRepeating', {
          is: true,
          then: Yup.object({})
            .nullable()
            .required(intl.formatMessage(messages.frequencyRequired)),
        }),
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

  function handleRecurringToggle() {
    setFieldValue('isRepeating', !isRepeating);
  }

  function handleExpertChange(selected) {
    setFieldValue('expert', selected);
  }

  function handleFrequencyChange(selected) {
    setFieldValue('frequency', selected);
  }

  function handleEndDateChange(date) {
    setFieldValue('endDate', date);
  }

  function getFieldPropsWithErrors(name) {
    return {
      ...getFieldProps(name),
      error: errors[name],
      touched: touched[name],
    };
  }

  return (
    <FormContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.description)}</Label>
          <SmFormInput {...getFieldPropsWithErrors('description')} />
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
          <Label>{intl.formatMessage(messages.repeats)}</Label>
          <ValueSwitchContainer>
            <Value>{intl.formatMessage(messages.recurringAbsence)}</Value>
            <Switch
              onToggleSwitch={handleRecurringToggle}
              isSwitchedOn={isRepeating}
            />
          </ValueSwitchContainer>
        </LineItemContainer>
      </MultiLineItemContainer>
      {isRepeating && (
        <MultiLineItemContainer>
          <LineItemContainer>
            <Label>{intl.formatMessage(messages.frequency)}</Label>
            <SingleSelect
              options={REPEAT_FREQUENCY_TYPES}
              onOptionSelect={handleFrequencyChange}
              selected={frequency}
            />
            {errors.frequency && touched.frequency && (
              <ValidationError>{errors.frequency}</ValidationError>
            )}
          </LineItemContainer>
          <LineItemContainer>
            <Label>{intl.formatMessage(messages.endDate)}</Label>
            <DateTimeInput
              date={endDate}
              hideTimePicker
              onDateChange={handleEndDateChange}
            />
          </LineItemContainer>
        </MultiLineItemContainer>
      )}
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.experts)}</Label>
          <SingleSelect
            options={DUMMY_EXPERTS}
            onOptionSelect={handleExpertChange}
            selected={expert}
          />
          {errors.expert && touched.expert && (
            <ValidationError>{errors.expert}</ValidationError>
          )}
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <LineItemContainer>
          <Label>{intl.formatMessage(messages.location)}</Label>
          <SmFormInput {...getFieldPropsWithErrors('location')} />
        </LineItemContainer>
      </MultiLineItemContainer>
      <MultiLineItemContainer>
        <DetailsLineItemContainer>
          <Label>{intl.formatMessage(messages.details)}</Label>
          <SmFormInput textArea {...getFieldPropsWithErrors('details')} />
        </DetailsLineItemContainer>
      </MultiLineItemContainer>
      <Footer>
        <EmptyButton />
        <Button primary onClick={submitForm}>
          {intl.formatMessage(messages.createAbsence)}
        </Button>
      </Footer>
    </FormContainer>
  );
}

export default AbsenceForm;
