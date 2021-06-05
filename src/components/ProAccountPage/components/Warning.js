import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import intl from 'helpers/intlHelper';

const messages = defineMessages({
  messagePrefix: {
    id: 'app.proAccountPage.warning.messagePrefix',
    defaultMessage: 'Please enter your payment information within',
  },
  messageSuffix: {
    id: 'app.proAccountPage.warning.messageSuffix',
    defaultMessage: 'to maintain your account activated',
  },
  messageSingleDay: {
    id: 'app.proAccountPage.warning.messageSingleDay',
    defaultMessage:
      'You only have time until tomorrow to enter your payment information to maintain your account activated',
  },
  days: {
    id: 'app.proAccountPage.warning.messageSuffix',
    defaultMessage: 'days',
  },
});

const Container = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: #ffc000;
  padding: 0.5rem;
`;

function Warning({ days }) {
  return (
    <Container>
      {(() => {
        if (days === 1) {
          return intl.formatMessage(messages.messageSingleDay);
        }
        return `${intl.formatMessage(
          messages.messagePrefix,
        )} ${days} ${intl.formatMessage(messages.days)} ${intl.formatMessage(
          messages.messageSuffix,
        )}`;
      })()}
    </Container>
  );
}

Warning.propTypes = {
  days: PropTypes.number,
};

Warning.defaultProps = {
  days: 2,
};

export default Warning;
