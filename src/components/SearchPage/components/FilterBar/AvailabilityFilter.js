import React from 'react';
import { Input, Label, Button } from 'reactstrap';

const AvailabilityFilter = () => (
  <>
    <div className="top-section">
      <Label check>
        <Input type="checkbox" />
        Today
      </Label>
      <Label check>
        <Input type="checkbox" />
        In Coming 3 days
      </Label>
    </div>
    <div className="bottom-section">
      <Button color="link">Delete</Button>
      <Button color="secondary">save</Button>
    </div>
  </>
);

export default AvailabilityFilter;
