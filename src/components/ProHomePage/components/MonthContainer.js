import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
`;

const HeaderNavigationButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

function MonthContainer({ month, onMonthSelect, onYearSelect }) {
  const monthMoment = moment(month);

  function onNextMonth() {
    const monthNumber = monthMoment.get('month') + 1;
    const yearNumber = monthMoment.get('year');

    onMonthSelect(month, monthNumber);
    if (monthNumber === 0) {
      onYearSelect(month, yearNumber + 1);
    }
  }

  function onPreviousMonth() {
    const monthNumber = monthMoment.get('month') - 1;
    const yearNumber = monthMoment.get('year');

    onMonthSelect(month, monthNumber);
    if (monthNumber === 11) {
      onYearSelect(month, yearNumber - 1);
    }
  }

  return (
    <HeaderContainer>
      {moment(month).format('MMM YYYY')}
      <HeaderNavigationContainer>
        <HeaderNavigationButton onClick={onPreviousMonth}>
          <IoIosArrowBack size={15} />
        </HeaderNavigationButton>
        <HeaderNavigationButton onClick={onNextMonth}>
          <IoIosArrowForward size={15} />
        </HeaderNavigationButton>
      </HeaderNavigationContainer>
    </HeaderContainer>
  );
}

MonthContainer.propTypes = {
  month: PropTypes.shape({}).isRequired,
  onMonthSelect: PropTypes.func.isRequired,
  onYearSelect: PropTypes.func.isRequired,
};

export default MonthContainer;
