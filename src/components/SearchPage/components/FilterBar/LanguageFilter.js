import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { arrayOf, func } from 'prop-types';

import { setLanguageFilters } from '../../actions';
import FilterModal from './FilterModal';

const LanguageFilter = ({ languages, setLanguageFilters: setLanguageFiltersAction }) => {
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

  const onClickSave = () => {
    setLanguageFiltersAction({ activeLanguages: selectedLanguages });
  };

  return (
    <FilterModal onClickSave={onClickSave}>
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
  setLanguageFilters: func.isRequired,
};

export default connect(null, { setLanguageFilters })(LanguageFilter);
