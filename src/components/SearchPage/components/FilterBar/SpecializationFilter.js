import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { arrayOf, func, bool, shape, number } from 'prop-types';

import Icon from 'components/Shared/Icon';
import { setFilters } from '../../actions';
import FilterModal from './FilterModal';
import messages from '../../messages';

const getSelectedSpecializations = (lawSpecializations) => {
  const selectedSpecialization = [];
  lawSpecializations.forEach((specialization) => {
    if (specialization.isChecked) {
      selectedSpecialization.push(specialization.id);
    }
  });
  return selectedSpecialization;
};

const getUpdatedSpecializations = (specializations, activeSpecializations) => {
  return specializations.map((specialization) => {
    const updatedSpecialization = { ...specialization };
    if (activeSpecializations.includes(specialization.id)) {
      updatedSpecialization.isChecked = true;
    }
    return updatedSpecialization;
  });
};

const resetSpecialization = (specializations) =>
  specializations.map((specialization) => ({
    ...specialization,
    isHidden: false,
  }));

const getIsSearchTermLawyer = (searchTerm) =>
  searchTerm.toLowerCase() === 'lawyer' ||
  searchTerm.toLowerCase() === 'anwalt' ||
  searchTerm.toLowerCase() === 'anwälte' ||
  searchTerm.toLowerCase() === 'anwältin' ||
  searchTerm.toLowerCase() === 'anwältinnen';

const SpecializationFilter = ({
  specializations,
  activeSpecializations,
  setFilters: setSpecializationFiltersAction,
  isFilterActive,
  intl,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLawSpecialization, setFilteredLawSpecialization] = useState(
    getUpdatedSpecializations(specializations, activeSpecializations),
  );
  const [
    isLawyerSpecializationSelected,
    setIsLawyerSpecializationSelected,
  ] = useState(false);

  const isSearchTermLawyer = getIsSearchTermLawyer(searchTerm);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLawSpecialization(
        resetSpecialization(filteredLawSpecialization),
      );
    } else if (isSearchTermLawyer) {
      setFilteredLawSpecialization(
        resetSpecialization(filteredLawSpecialization),
      );
    } else {
      const lawResults = filteredLawSpecialization.map((specialization) => {
        const updatedSpecialization = { ...specialization };
        if (
          !updatedSpecialization.specialization
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          updatedSpecialization.isHidden = true;
        }
        return updatedSpecialization;
      });
      setFilteredLawSpecialization(lawResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const onChangeLawyerSpecializations = (e) => {
    let isSingleLawyerSpecializationSelected = false;
    const selectedSpecialization = filteredLawSpecialization.map(
      (specialization) => {
        const updatedSpecialization = { ...specialization };
        if (parseInt(e.target.value, 10) === updatedSpecialization.id) {
          updatedSpecialization.isChecked = !updatedSpecialization.isChecked;
        }
        if (updatedSpecialization.isChecked) {
          isSingleLawyerSpecializationSelected = true;
        }
        return updatedSpecialization;
      },
    );
    setIsLawyerSpecializationSelected(isSingleLawyerSpecializationSelected);
    setFilteredLawSpecialization(selectedSpecialization);
  };

  const onClickSave = () => {
    setSpecializationFiltersAction({
      activeSpecializations: getSelectedSpecializations(
        filteredLawSpecialization,
      ),
    });
    onClose();
  };

  const onClickCancel = () => {
    setFilteredLawSpecialization([...specializations]);
  };

  return (
    <FilterModal
      className='specialization-filter'
      onClickSave={onClickSave}
      onClickCancel={onClickCancel}
      isCancelBtnDisabled={
        isLawyerSpecializationSelected ? false : !isFilterActive
      }
    >
      <div className='search-input-specialization'>
        <Icon name='search' className='search-icon' color='grey' />
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          onPaste={(e) => setSearchTerm(e.clipboardData.getData('Text'))}
          value={searchTerm}
          placeholder={intl.formatMessage(messages.searchSpecialization)}
          onKeyDown={(e) => {
            const key = e.keyCode || e.charCode;
            if (key === 8 || key === 46) {
              setFilteredLawSpecialization([...specializations]);
            }
          }}
          className='search-input'
        />
      </div>
      <div className='specialization'>
        <div className='content'>
          {filteredLawSpecialization &&
            filteredLawSpecialization
              .filter(({ isHidden }) => !isHidden)
              .map(({ specialization, id, isChecked }) => (
                <div className='specialization-element'>
                  <Label check key={id}>
                    <Input
                      type='checkbox'
                      value={id}
                      checked={isChecked || false}
                      onChange={onChangeLawyerSpecializations}
                    />
                    <div className='specialization-text'>{specialization}</div>
                  </Label>
                </div>
              ))}
        </div>
      </div>
    </FilterModal>
  );
};

SpecializationFilter.propTypes = {
  specializations: arrayOf(shape({})).isRequired,
  setFilters: func.isRequired,
  isFilterActive: bool.isRequired,
  intl: shape.isRequired,
  onClose: func.isRequired,
  activeSpecializations: arrayOf(shape(number)).isRequired,
};

export default injectIntl(connect(null, { setFilters })(SpecializationFilter));
