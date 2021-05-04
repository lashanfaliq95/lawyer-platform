import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import classnames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 1rem 0.5rem;
  border-radius: 10px;
`;

const ArrowContainer = styled.div``;

const ArrowButton = styled.button`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Calendar = styled.div`
  flex: 1;
  display: flex;
`;

const CalendarItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CalendarItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0rem;
  border-bottom: 1px solid #d2d2d2;
`;

const Label = styled.label`
  font-size: 12px;
  padding: 0.25rem;
  margin: 0;
  text-align: center;
`;

const BoldLabel = styled(Label)`
  font-weight: 700;
`;

const CalendarSlotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.1rem;
`;

const CalendarSlotsEmpty = styled(BoldLabel)`
  padding: 0.5rem 0rem;
  margin: 0.2rem 0.1rem;
`;

const CalendarSlots = styled(CalendarSlotsEmpty)`
  background-color: #cbecfa;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: #0089cd;
  }
`;

const TIME_SLOTS = [];

function populateTimeSlots() {
  const date = moment().set('minute', 0);

  for (let i = 0; i < 20; i += 1) {
    const newDate = date.add(15, 'minute');
    TIME_SLOTS.push(`${newDate.format('HH')}:${newDate.format('mm')}`);
  }
}

populateTimeSlots();

function getRandomInt(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

function getRandomTimeStamps(numberOfElements) {
  return TIME_SLOTS.slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfElements);
}

function getTimeSpan(today) {
  const dates = [];
  const current = moment(today);
  const start = moment(today).startOf('week');

  for (let i = 0; i < 7; i += 1) {
    const date = moment(start).add(i, 'day');

    dates.push({
      id: i,
      date: date.toDate(),
      slots: getRandomTimeStamps(getRandomInt(0, 5)),
      isPast: date.isSameOrBefore(current, 'day'),
    });
  }

  return dates;
}

function getMaximumTimeSlots(dates) {
  if (dates.length === 0) {
    return 0;
  }
  return dates.slice().sort((x, y) => y.slots.length - x.slots.length)[0].slots
    .length;
}

function getRemainderTimeSlotsComponents(remainder) {
  const arr = [];

  for (let i = 0; i < remainder; i += 1) {
    arr.push(<CalendarSlotsEmpty>-</CalendarSlotsEmpty>);
  }

  return arr;
}

function TimeSlots({ selected, onSelectedDateTimeChange }) {
  const [currentDate, setCurrentDate] = useState(null);
  const [dates, setDates] = useState(getTimeSpan(currentDate));

  const maximumTimeslots = getMaximumTimeSlots(dates);

  function handleOnNextClick() {
    setCurrentDate(moment(currentDate).add(1, 'week').toDate());
  }

  function handleOnPreviousClick() {
    setCurrentDate(moment(currentDate).subtract(1, 'week').toDate());
  }

  function handleOnSelectedDateTimeChange(date, timeslot) {
    const [hours, minutes] = timeslot.split(':');
    onSelectedDateTimeChange(
      moment(date).set('hour', hours).set('minute', minutes).toDate(),
    );
  }

  useEffect(() => {
    setCurrentDate(selected || new Date());
    //  eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!currentDate) {
      return;
    }
    setDates(getTimeSpan(currentDate));
  }, [currentDate]);

  return (
    <Container>
      <ArrowContainer>
        <ArrowButton onClick={handleOnPreviousClick}>
          <IoIosArrowBack size={20} color='#0094DE' />
        </ArrowButton>
      </ArrowContainer>
      <Calendar>
        {dates.map(({ id, date, slots }) => {
          const dateMoment = moment(date);
          const dayOfWeek = dateMoment.format('dddd');
          const dayOfMonth = dateMoment.format('D. MMM');
          const remainderComponents = getRemainderTimeSlotsComponents(
            maximumTimeslots - slots.length,
          );

          return (
            <CalendarItem key={id}>
              <CalendarItemHeader>
                <BoldLabel>{dayOfWeek}</BoldLabel>
                <Label>{dayOfMonth}</Label>
              </CalendarItemHeader>
              <CalendarSlotsContainer>
                {slots.map((slot) => {
                  const [hours, minutes] = slot.split(':');
                  const active =
                    selected &&
                    moment(dateMoment)
                      .set('hour', hours)
                      .set('minute', minutes)
                      .isSame(moment(selected));

                  return (
                    <CalendarSlots
                      className={classnames({ active })}
                      onClick={() => {
                        handleOnSelectedDateTimeChange(date, slot);
                      }}
                    >
                      {slot}
                    </CalendarSlots>
                  );
                })}
                {remainderComponents}
              </CalendarSlotsContainer>
            </CalendarItem>
          );
        })}
      </Calendar>
      <ArrowContainer>
        <ArrowButton onClick={handleOnNextClick}>
          <IoIosArrowForward size={20} color='#0094DE' />
        </ArrowButton>
      </ArrowContainer>
    </Container>
  );
}

TimeSlots.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onSelectedDateTimeChange: PropTypes.func.isRequired,
};

TimeSlots.defaultProps = {
  selected: null,
};

export default TimeSlots;
