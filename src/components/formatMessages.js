import React from 'react';
import { FormattedMessage } from 'react-intl';

const formatMessages = (message = {}, value) => {
  const { id, defaultMessage } = message;
  return (
    <FormattedMessage
      id={id}
      defaultMessage={defaultMessage}
      values={value}
    />
  );
};

export default formatMessages;
