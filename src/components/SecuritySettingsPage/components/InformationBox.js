import React from 'react';

import formatMessages from 'components/formatMessages';
import { InfoBoxContent } from '../styles';
import messages from '../messages';

function InformationBox() {
  return (
    <InfoBoxContent secondary>
      <h6>{formatMessages(messages.infoBoxTitle)}</h6>
      <span>{formatMessages(messages.infoBoxDescription)}</span>
    </InfoBoxContent>
  );
}

export default InformationBox;
