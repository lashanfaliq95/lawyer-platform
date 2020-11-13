import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import {
  arrayOf, func, bool, shape,
} from 'prop-types';

import formatMessages from 'components/formatMessages';
import { setSpecializationFilters } from '../../actions';
import FilterModal from './FilterModal';
import messages from '../../messages';

const getSelectedSpecializations = (
  lawSpecializations,
  notarySpecializations,
) => {
  const selectedSpecialization = [];
  lawSpecializations.forEach((specialization) => {
    if (specialization.isChecked) {
      selectedSpecialization.push(specialization.id);
    }
  });
  notarySpecializations.forEach((specialization) => {
    if (specialization.isChecked) {
      selectedSpecialization.push(specialization.id);
    }
  });
  return selectedSpecialization;
};

const resetSpecialization = (specializations) => specializations.map((specialization) => ({
  ...specialization,
  isHidden: false,
}));

const getIsSearchTermLawyer = (searchTerm) => searchTerm.toLowerCase() === 'lawyer'
  || searchTerm.toLowerCase() === 'anwalt'
  || searchTerm.toLowerCase() === 'anwälte'
  || searchTerm.toLowerCase() === 'anwältin'
  || searchTerm.toLowerCase() === 'anwältinnen';

const getIsSearchTermNotary = (searchTerm) => searchTerm.toLowerCase() === 'notarinnen'
  || searchTerm.toLowerCase() === 'notary'
  || searchTerm.toLowerCase() === 'notar'
  || searchTerm.toLowerCase() === 'notarin'
  || searchTerm.toLowerCase() === 'notare';

const SpecializationFilter = ({
  lawSpecializations,
  notarySpecializations,
  setSpecializationFilters: setSpecializationFiltersAction,
  isFilterActive,
  intl,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLawSpecialization, setFilteredLawSpecialization] = useState([
    ...lawSpecializations,
  ]);
  const [
    filteredNotarySpecialization,
    setFilteredNotarySpecialization,
  ] = useState([...notarySpecializations]);
  const [
    isNotarySpecializationSelected,
    setIsNotarySpecializationSelected,
  ] = useState(false);
  const [
    isLawyerSpecializationSelected,
    setIsLawyerSpecializationSelected,
  ] = useState(false);

  const isSearchTermLawyer = getIsSearchTermLawyer(searchTerm);
  const isSearchTermNotary = getIsSearchTermNotary(searchTerm);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLawSpecialization(
        resetSpecialization(filteredLawSpecialization),
      );
      setFilteredNotarySpecialization(
        resetSpecialization(notarySpecializations),
      );
    } else if (isSearchTermLawyer) {
      setFilteredLawSpecialization(
        resetSpecialization(filteredLawSpecialization),
      );
    } else if (isSearchTermNotary) {
      setFilteredNotarySpecialization(
        resetSpecialization(notarySpecializations),
      );
    } else {
      const lawResults = filteredLawSpecialization.map((specialization) => {
        const updatedSpecialization = { ...specialization };
        if (
          !updatedSpecialization.specilization
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          updatedSpecialization.isHidden = true;
        }
        return updatedSpecialization;
      });
      const notaryResults = filteredNotarySpecialization.map(
        (specialization) => {
          const updatedSpecialization = { ...specialization };
          if (
            !updatedSpecialization.specilization
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            updatedSpecialization.isHidden = true;
          }
          return updatedSpecialization;
        },
      );
      setFilteredLawSpecialization(lawResults);
      setFilteredNotarySpecialization(notaryResults);
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

  const onChangeNotarySpecialization = (e) => {
    let isSingleNotarySpecializationSelected = false;
    const selectedSpecialization = filteredNotarySpecialization.map(
      (specialization) => {
        const updatedSpecialization = { ...specialization };
        if (parseInt(e.target.value, 10) === updatedSpecialization.id) {
          updatedSpecialization.isChecked = !updatedSpecialization.isChecked;
        }
        if (updatedSpecialization.isChecked) {
          isSingleNotarySpecializationSelected = true;
        }
        return updatedSpecialization;
      },
    );
    setIsNotarySpecializationSelected(isSingleNotarySpecializationSelected);
    setFilteredNotarySpecialization(selectedSpecialization);
  };

  const onClickSave = () => {
    setSpecializationFiltersAction({
      activeSpecializations: getSelectedSpecializations(
        filteredLawSpecialization,
        filteredNotarySpecialization,
      ),
    });
    onClose();
  };

  const onClickCancel = () => {
    setFilteredLawSpecialization([...lawSpecializations]);
    setFilteredNotarySpecialization([...notarySpecializations]);
  };

  return (
    <FilterModal
      className="top-section-specialization"
      onClickSave={onClickSave}
      onClickCancel={onClickCancel}
      isCancelBtnDisabled={
        isNotarySpecializationSelected || isLawyerSpecializationSelected
          ? false
          : !isFilterActive
      }
    >
      <div className="notary">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          onPaste={(e) => setSearchTerm(e.clipboardData.getData('Text'))}
          value={searchTerm}
          placeholder={intl.formatMessage(messages.searchSpecialization)}
          className="search-input"
        />
        {!isSearchTermLawyer ? (
          <>
            <h4 className="title">{formatMessages(messages.notary)}</h4>
            <div className="content">
              {filteredNotarySpecialization
                && filteredNotarySpecialization.map(
                  ({
                    specilization, id, isChecked, isHidden,
                  }) => !isHidden && (
                  <Label check key={id}>
                    <Input
                      type="checkbox"
                      value={id}
                      checked={isChecked}
                      onChange={onChangeNotarySpecialization}
                    />
                    {specilization}
                  </Label>
                  ),
                )}
            </div>
          </>
        ) : null}
      </div>
      <div className="specialization">
        {!isSearchTermNotary ? (
          <>
            <h4 className="title">{formatMessages(messages.lawyer)}</h4>
            <div className="content">
              {filteredLawSpecialization
                && filteredLawSpecialization.map(
                  ({
                    specilization, id, isChecked, isHidden,
                  }) => !isHidden && (
                  <Label check key={id}>
                    <Input
                      type="checkbox"
                      value={id}
                      checked={isChecked}
                      onChange={onChangeLawyerSpecializations}
                    />
                    {specilization}
                  </Label>
                  ),
                )}
            </div>
          </>
        ) : null}
      </div>
    </FilterModal>
  );
};

SpecializationFilter.propTypes = {
  lawSpecializations: arrayOf(shape({})).isRequired,
  notarySpecializations: arrayOf(shape({})).isRequired,
  setSpecializationFilters: func.isRequired,
  isFilterActive: bool.isRequired,
  intl: shape.isRequired,
  onClose: func.isRequired,
};

export default injectIntl(connect(null, { setSpecializationFilters })(
  SpecializationFilter,
));
