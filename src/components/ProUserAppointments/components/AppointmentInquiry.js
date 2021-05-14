import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaRegCalendar } from 'react-icons/fa';
import { useSetState } from 'react-use';

import { getExpiryDate, prependZero } from 'components/Shared/utils';
import { AppointmentPropType } from 'helpers/types';

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background-color: #225393;
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-right: auto;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background-color: #ffffff;
`;

const DetailsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Label = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
`;

const Title = styled(Label)`
  font-weight: 500;
  font-size: 1.2rem;
`;

function getTimeStamps(hours, minutes) {
  const prependedMinutes = prependZero(minutes);

  if (hours > 1) {
    return `${hours}:${prependedMinutes} Stunden`;
  }
  if (hours > 0) {
    return `${hours}:${prependedMinutes} Stunde`;
  }
  if (minutes > 1) {
    return `${prependedMinutes} Minuten`;
  }
  return `${prependedMinutes} Minute`;
}

function AppointmentInquiry({ inquiry, onInquiryClick }) {
  const { id, createdAt } = inquiry;

  const [{ hours, minutes }, setState] = useSetState({
    ...getExpiryDate(createdAt),
  });

  function handleOnClick() {
    onInquiryClick(inquiry);
  }

  return (
    <Container onClick={handleOnClick}>
      <IconContainer>
        <FaRegCalendar size={20} />
      </IconContainer>
      <DetailsContainer>
        <Title>Anfrage</Title>
        <Label>
          {`Sei haben noch ${getTimeStamps(
            hours,
            minutes,
          )}, um den termin zu bestatigen`}
        </Label>
      </DetailsContainer>
    </Container>
  );
}

AppointmentInquiry.propTypes = {
  inquiry: AppointmentPropType.isRequired,
  onInquiryClick: PropTypes.func,
};

AppointmentInquiry.defaultProps = {
  onInquiryClick: () => {},
};

export default AppointmentInquiry;
