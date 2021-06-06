import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { arrayOf, func, bool, shape, number } from 'prop-types';

import { setFilters } from '../../actions';
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

const getUpdatedLanguages = (languages, activeLanguages) => {
  return languages.map((language) => {
    const updatedLanguages = { ...language };
    if (activeLanguages.includes(language.id)) {
      updatedLanguages.isChecked = true;
    }
    return updatedLanguages;
  });
};

const LanguageFilter = ({
  languages,
  activeLanguages,
  setFilters: setLanguageFiltersAction,
  isFilterActive,
  onClose,
}) => {
  const [updatedLanguages, setUpdatedLanguages] = useState(
    getUpdatedLanguages(languages, activeLanguages),
  );
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
                  checked={isChecked || false}
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
  setFilters: func.isRequired,
  isFilterActive: bool.isRequired,
  onClose: func.isRequired,
  activeLanguages: arrayOf(shape(number)).isRequired,
};

export default connect(null, { setFilters })(LanguageFilter);
