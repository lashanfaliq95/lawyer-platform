import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { arrayOf, func } from 'prop-types';

import formatMessages from 'components/formatMessages';
import { setSpecializationFilters } from '../../actions';
import FilterModal from './FilterModal';
import messages from '../../messages';

const SpecializationFilter = ({
  lawSpecializations,
  notarySpecializations,
  setSpecializationFilters: setSpecializationFiltersAction,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLawSpecialization, setFilteredLawSpecialization] = useState(
    lawSpecializations,
  );
  const [
    filteredNotarySpecialization,
    setFilteredNotarySpecialization,
  ] = useState(notarySpecializations);
  const [selectedSpecializations, setSelectedSpecialization] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLawSpecialization(lawSpecializations);
      setFilteredNotarySpecialization(notarySpecializations);
    } else {
      const lawResults = filteredLawSpecialization
        .filter((
          { specilization },
        ) => specilization.toLowerCase().includes(searchTerm));

      const notaryResults = filteredNotarySpecialization.filter(
        ({ specilization }) => specilization.toLowerCase().includes(searchTerm),
      );
      setFilteredLawSpecialization(lawResults);
      setFilteredNotarySpecialization(notaryResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const onChange = (e) => {
    if (selectedSpecializations.indexOf(e.target.value) >= 0) {
      const updatedLanguages = [...selectedSpecializations];
      const index = selectedSpecializations.indexOf(e.target.value);
      updatedLanguages.splice(index, 1);
      setSelectedSpecialization(updatedLanguages);
    } else {
      const updatedLanguages = [...selectedSpecializations];
      updatedLanguages.push(e.target.value);
      setSelectedSpecialization(updatedLanguages);
    }
  };

  const onClickSave = () => {
    setSpecializationFiltersAction({
      activeSpecializations: selectedSpecializations,
    });
  };

  return (
    <FilterModal
      className="top-section-specialization"
      onClickSave={onClickSave}
    >
      <div className="specialization">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Enter Search term"
          className="search-input"
        />
        <h4 className="title">{formatMessages(messages.lawyer)}</h4>
        <div className="content">
          {filteredLawSpecialization
            && filteredLawSpecialization.map(({ specilization, id }) => (
              <Label check>
                <Input type="checkbox" value={id} onChange={onChange} />
                {specilization}
              </Label>
            ))}
        </div>
      </div>
      <div className="notary">
        <h4 className="title">{formatMessages(messages.notary)}</h4>
        <div className="content">
          {filteredNotarySpecialization
            && filteredNotarySpecialization.map(({ specilization, id }) => (
              <Label check>
                <Input type="checkbox" value={id} onChange={onChange} />
                {specilization}
              </Label>
            ))}
        </div>
      </div>
    </FilterModal>
  );
};

SpecializationFilter.propTypes = {
  lawSpecializations: arrayOf({}).isRequired,
  notarySpecializations: arrayOf({}).isRequired,
  setSpecializationFilters: func.isRequired,
};

export default connect(null, { setSpecializationFilters })(
  SpecializationFilter,
);
