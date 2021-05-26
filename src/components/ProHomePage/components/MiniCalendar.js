import React, { useState } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import moment from 'moment';

function MiniCalendar() {
  const [focused, setFocused] = useState(true);
  const [date, setDate] = useState(moment());

  function focusChangeHandler() {
    setFocused(true);
  }

  function dateChangeHandler(pickedDate) {
    setDate(pickedDate);
  }

  return (
    <DayPickerSingleDateController
      date={date}
      onDateChange={dateChangeHandler}
      onFocusChange={focusChangeHandler}
      focused={focused}
      noBorder
    />
  );
}

export default MiniCalendar;
