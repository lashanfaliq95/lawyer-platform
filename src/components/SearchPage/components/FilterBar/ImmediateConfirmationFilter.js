import React from 'react';
import { Button } from 'reactstrap';

import ToggleSwitch from 'components/Shared/ToggleSwitch';

const ImmediateConfirmationFilter = () => (
  <>
    <div className="top-section">
      <ToggleSwitch label="Immediate confirmation" />
    </div>
    <div className="bottom-section">
      <Button color="link">Delete</Button>
      <Button color="secondary">save</Button>
    </div>
  </>
);

export default ImmediateConfirmationFilter;
