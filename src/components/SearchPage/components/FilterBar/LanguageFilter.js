import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import {
  arrayOf, func, bool, shape,
} from 'prop-types';

import { setLanguageFilters } from '../../actions';
import FilterModal from './FilterModal';

const getSelectedLanguages = (languages) => {
  const selectedLanguages = [];
  languages.forEach((language) => {
    if (language.isChecked) {
      selectedLanguages.push(language.id);
    }
  });
  return selectedLanguages;
};

const LanguageFilter = ({
  languages,
  setLanguageFilters: setLanguageFiltersAction,
  isFilterActive,
  onClose,
}) => {
  const [updatedLanguages, setUpdatedLanguages] = useState([...languages]);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  const onChange = (e) => {
    let isAtLeastSingleLanguageSelected = false;
    const selectedLanguages = updatedLanguages.map((language) => {
      const updatedLanguage = { ...language };
      if (parseInt(e.target.value, 10) === updatedLanguage.id) {
        updatedLanguage.isChecked = !updatedLanguage.isChecked;
      }
      if (updatedLanguage.isChecked) {
        isAtLeastSingleLanguageSelected = true;
      }
      return updatedLanguage;
    });
    setIsLanguageSelected(isAtLeastSingleLanguageSelected);
    setUpdatedLanguages(selectedLanguages);
  };

  const onClickSave = () => {
    setLanguageFiltersAction({
      activeLanguages: getSelectedLanguages(updatedLanguages),
    });
    onClose();
  };

  const onClickCancel = () => {
    setUpdatedLanguages([...languages]);
  };

  return (
    <FilterModal
      className='specialization-filter'
      onClickSave={onClickSave}
      onClickCancel={onClickCancel}
      isCancelBtnDisabled={isLanguageSelected ? false : !isFilterActive}
    >
      <div className='specialization'>
        <div className='content'>
          {updatedLanguages.map(({ id, language, isChecked }) => (
            <div className='specialization-element'>
              <Label check key={id}>
                <Input
                  value={id}
                  type='checkbox'
                  checked={isChecked}
                  onChange={onChange}
                />
                <div className='specialization-text'>{language}</div>
              </Label>
            </div>
          ))}
        </div>
      </div>
    </FilterModal>
  );
};

LanguageFilter.propTypes = {
  languages: arrayOf(shape({})).isRequired,
  setLanguageFilters: func.isRequired,
  isFilterActive: bool.isRequired,
  onClose: func.isRequired,
};

export default connect(null, { setLanguageFilters })(LanguageFilter);
