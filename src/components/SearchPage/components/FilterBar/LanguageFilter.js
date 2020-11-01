import React from 'react';
import { Input, Label } from 'reactstrap';

import FilterModal from 'components/Shared/FilterModal';

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
  <FilterModal>
    {languages.map((language) => (
      <Label check>
        <Input type="checkbox" />
        {language}
      </Label>
    ))}
  </FilterModal>
);

export default LanguageFilter;
