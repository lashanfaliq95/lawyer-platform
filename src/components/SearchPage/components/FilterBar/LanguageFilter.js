import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';
import { arrayOf } from 'prop-types';

import FilterModal from './FilterModal';

const LanguageFilter = ({ languages }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const onChange = (e) => {
    if (selectedLanguages.indexOf(e.target.value) >= 0) {
      const updatedLanguages = [...selectedLanguages];
      const index = selectedLanguages.indexOf(e.target.value);
      updatedLanguages.splice(index, 1);
      setSelectedLanguages(updatedLanguages);
    } else {
      const updatedLanguages = [...selectedLanguages];
      updatedLanguages.push(e.target.value);
      setSelectedLanguages(updatedLanguages);
    }
  };

  return (
    <FilterModal>
      {languages.map(({ id, language }) => (
        <Label check>
          <Input value={id} type="checkbox" onChange={onChange} />
          {language}
        </Label>
      ))}
    </FilterModal>
  );
};

LanguageFilter.propTypes = {
  languages: arrayOf().isRequired,
};

export default LanguageFilter;
