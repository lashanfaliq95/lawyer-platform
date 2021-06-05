import intl from 'helpers/intlHelper';
import moment from 'moment';
import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { defineMessages } from 'react-intl';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GENDER } from 'components/Shared/constants';

const messages = defineMessages({
  myAccount: {
    id: 'app.proAccountPage.titlePane.myAccount',
    defaultMessage: 'My Account',
  },
  malePrefix: {
    id: 'app.proAccountPage.titlePane.malePrefix',
    defaultMessage: 'Mr. ',
  },
  femalePrefix: {
    id: 'app.proAccountPage.titlePane.femalePrefix',
    defaultMessage: 'Miss. ',
  },
  goodMorning: {
    id: 'app.proAccountPage.titlePane.goodMorning',
    defaultMessage: 'Good morning',
  },
  goodAfternoon: {
    id: 'app.proAccountPage.titlePane.goodAfternoon',
    defaultMessage: 'Good afternoon',
  },
  goodEvening: {
    id: 'app.proAccountPage.titlePane.goodEvening',
    defaultMessage: 'Good evening',
  },
  logout: {
    id: 'app.proAccountPage.titlePane.logout',
    defaultMessage: 'Logout',
  },
});

const Container = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-size: 1.3rem;
`;

const ActionContainer = styled.div`
  display: flex;
`;

const LogoutButton = styled.button`
  border: none;
  background-color: #1c4880;
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin: auto;
  border-radius: 20px;

  svg {
    margin-right: 0.5rem;
  }
`;

const GREETING_LIMIT = {
  MORNING: {
    LOWER_LIMIT: moment('05:00', 'HH:mm'),
    UPPER_LIMIT: moment('11:00', 'HH:mm'),
  },
  AFTERNOON: {
    LOWER_LIMIT: moment('11:00', 'HH:mm'),
    UPPER_LIMIT: moment('18:00', 'HH:mm'),
  },
};

function TitlePane({ gender, name }) {
  function getGreetingFromTimeOfDay() {
    const current = moment();

    if (
      current.isSameOrAfter(GREETING_LIMIT.MORNING.LOWER_LIMIT, 'hour') &&
      current.isBefore(GREETING_LIMIT.MORNING.UPPER_LIMIT, 'hour')
    ) {
      return intl.formatMessage(messages.goodMorning);
    }
    if (
      current.isSameOrAfter(GREETING_LIMIT.AFTERNOON.LOWER_LIMIT, 'hour') &&
      current.isBefore(GREETING_LIMIT.AFTERNOON.UPPER_LIMIT, 'hour')
    ) {
      return intl.formatMessage(messages.goodAfternoon);
    }
    return intl.formatMessage(messages.goodEvening);
  }

  function getPrefixBasedOnGender() {
    return gender === GENDER.MALE
      ? intl.formatMessage(messages.malePrefix)
      : intl.formatMessage(messages.femalePrefix);
  }
  return (
    <Container>
      <TitleContainer>
        <Title>{intl.formatMessage(messages.myAccount)}</Title>
        <SubTitle>{`${getGreetingFromTimeOfDay()}, ${getPrefixBasedOnGender()} ${name}`}</SubTitle>
      </TitleContainer>
      <ActionContainer>
        <LogoutButton>
          <IoExitOutline size={20} />
          {intl.formatMessage(messages.logout)}
        </LogoutButton>
      </ActionContainer>
    </Container>
  );
}

TitlePane.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
};

TitlePane.defaultProps = {
  name: 'Jasper Kyd',
  gender: GENDER.MALE,
};

export default TitlePane;
