import React from 'react';
import { Input, Label, Button } from 'reactstrap';

const languages = [
  'Englisch',
  'Arabisch',
  'Französisch',
  'Gebärdensprache',
  'Italienisch',
  'Persisch',
  'Polnisch',
  'Portugiesisch',
  'Rumänisch',
  'Russisch',
  'Türkisch',
];

const LanguageFilter = () => (
  <>
    <div className="top-section language">
      {languages.map((language) => (
        <Label check>
          <Input type="checkbox" />
          {language}
        </Label>
      ))}
    </div>
    <div className="bottom-section">
      <Button color="link">Delete</Button>
      <Button color="secondary">save</Button>
    </div>
  </>
);

export default LanguageFilter;
