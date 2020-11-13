import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import {
  Row, Col, Container, Button,
} from 'reactstrap';
import {
  func, string, shape, bool, number,
} from 'prop-types';
import './styles.scss';

import HS from 'components/Shared/HorizontalSeparator';
import Icon from 'components/Shared/Icon';
import Loader from 'components/Shared/Loader';
import formatMessages from 'components/formatMessages';

import {
  addWeeksToDate, subWeeksFromDate, getWeeksDayDateMonth, getStartDate,
} from 'utils/date';
import { getLawyerAvailability } from 'components/SearchPage/actions';
import messages from '../../messages';
import EmptySlot from './components/EmptySlot';
import { MONTH_OF_YEAR, DAY_OF_WEEK } from './constants';

const Calender = ({
  id,
  className,
  getLawyerAvailability: getLawyerAvailabilityAction,
  availability,
  isLoading,
  currentId,
}) => {
  const [currentDate, setCurrentDate] = useState(getStartDate(new Date()));
  const [calenderHeader, setCalenderHeader] = useState(getWeeksDayDateMonth(currentDate, true));
  const [slotsShown, setSlotsShown] = useState(4);

  const onClickNextWeek = () => {
    const updatedDate = addWeeksToDate(currentDate, 1);
    setCalenderHeader(getWeeksDayDateMonth(updatedDate, true));
    getLawyerAvailabilityAction({ startDate: updatedDate, id });
    setCurrentDate(updatedDate);
  };

  const onClickPreviousWeek = () => {
    const updatedDate = subWeeksFromDate(currentDate, 1);
    setCalenderHeader(getWeeksDayDateMonth(updatedDate));
    getLawyerAvailabilityAction({ startDate: updatedDate, id });
    setCurrentDate(updatedDate);
  };
  const result = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  let isEmpty = false;
  if (availability) {
    Object.keys(availability).forEach((dayOfWeek) => {
      for (let i = 0; i < slotsShown; i += 1) {
        result[dayOfWeek].push(availability[dayOfWeek][i] ? (
          <button className="slot" type="button">
            10.30
          </button>
        ) : <EmptySlot />);
      }
    });
  } else {
    isEmpty = true;
  }

  return (
    <Container className={className}>
      {isLoading && currentId === id ? (
        <Loader isLoading={isLoading} className="calender-loader" />
      ) : (
        <>
          <Row className="calender-header">
            <Icon name="chevron-left" size="large" onClick={onClickPreviousWeek} />
            {
              calenderHeader.length > 0
              && calenderHeader.map(({ month, dayOfMonth, dayOfWeek }) => (
                <Col key={`${month}${dayOfMonth}`}>
                  <div className="day-name">{formatMessages(DAY_OF_WEEK[dayOfWeek])}</div>
                  <div className="date">
                    {`${dayOfMonth}. `}
                    {formatMessages(MONTH_OF_YEAR[month])}
                  </div>
                </Col>
              ))
            }
            <Icon name="chevron-right" size="large" onClick={onClickNextWeek} />
          </Row>
          <div className="separator">
            <HS color="#ced4da" />
          </div>

          <Row className="body">
            {isEmpty ? (
              <div className="no-appointments-overlay">
                <div className="message">
                  <div className="next-slot">
                    <Button className="next-slot-btn" color="link">
                      <p className="text">Nächster Termin am 25. Januar 2021</p>

                      <Icon name="chevron-right" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                { Object.keys(result).map((dayOfWeek) => (
                  <Col>
                    {result[dayOfWeek]}
                  </Col>
                ))}
              </>
            )}
          </Row>
        </>
      )}
      {!isEmpty && !(isLoading && currentId === id) ? (
        <>
          <div className="separator">
            <HS color="#ced4da" />
          </div>

          <Row className="bottom-button">
            {slotsShown === 4 ? <Button color="link" onClick={() => { setSlotsShown(9); }}>{formatMessages(messages.displayMore)}</Button> : null}
            {slotsShown === 9 ? <Button color="link" onClick={() => { setSlotsShown(4); }}>{formatMessages(messages.displayLess)}</Button>
              : null}
          </Row>
        </>
      ) : null}
    </Container>
  );
};

Calender.propTypes = {
  className: string,
  id: number.isRequired,
  getLawyerAvailability: func.isRequired,
  isLoading: bool,
  availability: shape(),
  currentId: string,
};

Calender.defaultProps = {
  className: '',
  isLoading: false,
  availability: null,
  currentId: null,
};

const mapStateToProps = (state, props) => ({
  availability: state.search.availability[props.id],
  isLoading: state.search.availability.isAvailabilityLoading,
  currentId: state.search.availability.currentId,
});

export default injectIntl(connect(mapStateToProps, { getLawyerAvailability })(Calender));
