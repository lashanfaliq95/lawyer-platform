import React, { useEffect } from 'react';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import { useSetState, usePrevious } from 'react-use';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
`;

const Title = styled.span`
  display: block;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const FooterRightPane = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  ${({ primary, preset, selected }) => {
    if (preset) {
      if (selected) {
        return css`
          background-color: #05a698;
          color: #ffffff;
          margin-right: 0.5rem;
        `;
      }
      return css`
        border: 1px solid #d2d2d2;
        background-color: transparent;
        margin-right: 0.5rem;
      `;
    }
    if (primary) {
      return css`
        background-color: #05a698;
        color: #ffffff;
      `;
    }
    return css`
      color: #05a698;
    `;
  }}
`;

const PRESET_OPTIONS = [
  {
    title: 'Letzten 7 Tage',
    start: moment().subtract(7, 'days'),
    end: moment(),
  },
  {
    title: 'Letzten 14 Tage',
    start: moment().subtract(14, 'days'),
    end: moment(),
  },
  {
    title: 'Letzten 30 Tage',
    start: moment().subtract(30, 'days'),
    end: moment(),
  },
  {
    title: 'Letzten 90 Tage',
    start: moment().subtract(90, 'days'),
    end: moment(),
  },
];

function FilterPaneDatePicker({
  filterStartDate,
  filterEndDate,
  isOpen,
  onFilterDateSelect,
  toggleIsOpen,
}) {
  const [{ startDate, endDate, focusedInput }, setState] = useSetState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });
  const wasOpen = usePrevious(isOpen);

  function handleOnDatesReset() {
    const obj = {};
    if (!startDate || !filterStartDate.isSame(startDate, 'day')) {
      obj.startDate = filterStartDate;
    }
    if (!endDate || !filterStartDate.isSame(endDate, 'day')) {
      obj.endDate = filterEndDate;
    }
    setState({
      ...obj,
    });
  }

  useEffect(() => {
    handleOnDatesReset();
    //  eslint-disable-next-line
  }, [filterStartDate, filterEndDate]);

  useEffect(() => {
    if (wasOpen && !isOpen) {
      handleOnDatesReset();
    }
    //  eslint-disable-next-line
  }, [isOpen]);

  function handleOnDatesChange({
    startDate: updatedStartDate,
    endDate: updatedEndDate,
  }) {
    setState({
      startDate: updatedStartDate,
      endDate: updatedEndDate,
    });
  }

  function handleOnFocusedInputChange(updatedFocusedInput) {
    const obj = updatedFocusedInput === END_DATE ? { endDate: null } : {};
    setState({
      focusedInput: updatedFocusedInput,
      ...obj,
    });
  }

  function handleOnClearDates() {
    toggleIsOpen();
  }

  function handleOnFilterDateChanged() {
    onFilterDateSelect({ startDate, endDate });
    setTimeout(() => {
      toggleIsOpen();
    }, 250);
  }

  return (
    <Container>
      <Title>Datumsbereich wählen</Title>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={handleOnDatesChange}
        focusedInput={focusedInput || START_DATE}
        onFocusChange={handleOnFocusedInputChange}
        numberOfMonths={3}
        initialVisibleMonth={() => moment().subtract(1, 'month')}
      />
      <Footer>
        <Button onClick={handleOnClearDates}>Löschen</Button>
        <FooterRightPane>
          {PRESET_OPTIONS.map(({ title, start, end }) => {
            const isSelected =
              startDate &&
              endDate &&
              start.isSame(startDate, 'day') &&
              end.isSame(endDate, 'day');

            function handleOnPresetSelection() {
              setState({ startDate: start, endDate: end });
            }

            return (
              <Button
                preset
                primary
                key={title}
                selected={isSelected}
                onClick={handleOnPresetSelection}
              >
                {title}
              </Button>
            );
          })}
          <Button primary onClick={handleOnFilterDateChanged}>
            Speichern
          </Button>
        </FooterRightPane>
      </Footer>
    </Container>
  );
}

FilterPaneDatePicker.propTypes = {
  filterStartDate: PropTypes.shape({
    isSame: PropTypes.func,
  }).isRequired,
  filterEndDate: PropTypes.shape({
    isSame: PropTypes.func,
  }).isRequired,
  isOpen: PropTypes.bool,
  onFilterDateSelect: PropTypes.func.isRequired,
  toggleIsOpen: PropTypes.func,
};

FilterPaneDatePicker.defaultProps = {
  isOpen: false,
  toggleIsOpen: () => {},
};

export default FilterPaneDatePicker;
