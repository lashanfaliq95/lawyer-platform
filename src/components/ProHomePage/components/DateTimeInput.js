import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { DayPickerSingleDateController } from 'react-dates';
import { defineMessages } from 'react-intl';
import { FaTimes } from 'react-icons/fa';

import intl from 'helpers/intlHelper';
import useDropdown, { Dropdown } from 'hooks/useDropdown';
import {
  getLocalizedMonth,
  getLocalizedShortDayOfWeek,
  getTimeSlots,
} from 'components/Shared/utils';
import MonthContainer from './MonthContainer';

const messages = defineMessages({
  placeholder: {
    id: 'app.dateTimeInput.placeholder',
    defaultMessage: 'Select',
  },
});

const Container = styled.div`
  display: flex;

  * {
    outline: none;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  font-size: 13px;
  position: relative;
`;

const TimeButton = styled.button`
  background-color: transparent;
  border: none;
  height: 100%;
  border-bottom: 2px solid #d2d2d2;
  padding: 5px;

  ${({ selected }) =>
    selected &&
    css`
      border-color: #006ea9;
    `};
`;

const TimeSlotButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  text-align: start;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d2d2d2;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #006ea9 !important;
      color: #ffffff;
    `}
`;

const TimePickerDropdownContainer = styled.div`
  background-color: #ffffff;
  flex: 1;
  max-height: 200px;
  width: 200px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  ${TimeSlotButton}:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const DatePickerButton = styled(TimeButton)`
  flex: 1;
  font-size: 13px;
  text-align: start;
  padding: 5px 0;
`;

const DatePickerContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
`;

const DateClearButton = styled(DatePickerButton)`
  flex: unset;
  padding: 5px;

  &:hover {
    svg {
      fill: #006ea9;
      transition: all 0.3s ease-in-out;
    }
  }
`;

function DateTimeInput({
  date,
  onDateChange,
  time,
  onTimeChange,
  hideTimePicker,
  hideDateClear,
}) {
  const [focused, setFocused] = useState(false);
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);

  function handleFocusChange() {
    setFocused(!focused);
  }

  function handleOnTimeChange(selected) {
    onTimeChange(selected);
    setTimePickerOpen(false);
  }

  function handleOnTimePickerClose() {
    setTimePickerOpen(false);
  }

  function handleOnTimePickerClick() {
    setTimePickerOpen(true);
  }

  function handleOnDateClearClick() {
    onDateChange(null);
  }

  const { ref: timePickerRef } = useDropdown({
    onClose: handleOnTimePickerClose,
    onClickOutside: handleOnTimePickerClose,
  });

  const {
    ref: datePickerRef,
    isOpen: isDatePickerOpen,
    toggleIsOpen: handleDatePickerClose,
    hasLayoutLoaded: hasDatePickerLoaded,
  } = useDropdown({
    calculateHeight: true,
  });

  function handleDateChange(selected) {
    onDateChange(selected);
    handleDatePickerClose();
  }

  const timeSlotsArray = getTimeSlots();

  return (
    <Container>
      <DatePickerContainer>
        <DatePickerButton
          onClick={handleDatePickerClose}
          selected={isDatePickerOpen}
        >
          {date
            ? `${intl.formatMessage(
              getLocalizedShortDayOfWeek(date),
            )}, ${date.format('DD')}. ${intl.formatMessage(
              getLocalizedMonth(date),
            )}`
            : intl.formatMessage(messages.placeholder)}
        </DatePickerButton>
        {!hideDateClear && (
          <DateClearButton onClick={handleOnDateClearClick}>
            <FaTimes color='#d2d2d2' />
          </DateClearButton>
        )}

        <Dropdown
          ref={datePickerRef}
          isOpen={isDatePickerOpen}
          hasLayoutLoaded={hasDatePickerLoaded}
          width='auto'
        >
          <DatePickerContainer>
            <DayPickerSingleDateController
              date={date}
              onDateChange={handleDateChange}
              onFocusChange={handleFocusChange}
              focused={focused}
              noBorder
              renderMonthElement={(props) => <MonthContainer {...props} />}
              noNavButtons
              hideKeyboardShortcutsPanel
            />
          </DatePickerContainer>
        </Dropdown>
      </DatePickerContainer>
      {!hideTimePicker && (
        <TimeContainer>
          <TimeButton
            onClick={handleOnTimePickerClick}
            selected={isTimePickerOpen}
          >
            {time}
          </TimeButton>
          <Dropdown
            ref={timePickerRef}
            isOpen={isTimePickerOpen}
            right='0'
            left='auto'
          >
            <TimePickerDropdownContainer>
              {timeSlotsArray.map((timeSlot) => {
                function handleOnTimeClick() {
                  handleOnTimeChange(timeSlot);
                }

                return (
                  <TimeSlotButton
                    onClick={handleOnTimeClick}
                    selected={time === timeSlot}
                  >
                    {timeSlot}
                  </TimeSlotButton>
                );
              })}
            </TimePickerDropdownContainer>
          </Dropdown>
        </TimeContainer>
      )}
    </Container>
  );
}

DateTimeInput.propTypes = {
  date: PropTypes.shape({
    format: PropTypes.func,
  }),
  onDateChange: PropTypes.func.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  hideTimePicker: PropTypes.bool,
  hideDateClear: PropTypes.bool,
};

DateTimeInput.defaultProps = {
  date: null,
  time: null,
  hideTimePicker: false,
  hideDateClear: false,
};

export default DateTimeInput;
