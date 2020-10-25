import React from 'react';
import { Input, Label, Button } from 'reactstrap';

const FreeFirstAppointment = () => (
  <>
    <div className="top-section">
      <Label check>
        <Input type="checkbox" />
        Today
      </Label>
      <Label className="custom-toggle custom-toggle-default">
        <Input type="checkbox" />
        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF" data-label-on="ON" />

      </Label>

    </div>
    <div className="bottom-section">
      <Button color="link">Delete</Button>
      <Button color="secondary">save</Button>
    </div>
  </>
);

export default FreeFirstAppointment;
