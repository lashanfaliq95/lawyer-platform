import React, { useState, useEffect } from 'react';
import { Input, Label } from 'reactstrap';
import { arrayOf } from 'prop-types';

import formatMessages from 'components/formatMessages';
import FilterModal from './FilterModal';
import messages from '../../messages';

const SpecializationFilter = ({ lawSpecializations, notarySpecializations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLawSpecialization, setFilteredLawSpecialization] = useState(
    lawSpecializations,
  );
  const [filteredNotarySpecialization, setFilteredNotarySpecialization] = useState(
    notarySpecializations,
  );

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLawSpecialization(lawSpecializations);
      setFilteredNotarySpecialization(notarySpecializations);
    } else {
      console.log(filteredLawSpecialization);
      const lawResults = filteredLawSpecialization.filter(
        ({ specilization }) => specilization.toLowerCase().includes(searchTerm),
      );
      const notaryResults = filteredNotarySpecialization.filter(
        ({ specilization }) => specilization.toLowerCase().includes(searchTerm),
      );
      setFilteredLawSpecialization(lawResults);
      setFilteredNotarySpecialization(notaryResults);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <FilterModal className="top-section-specialization">
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
            <Input type="checkbox" value={id} />
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
            <Input type="checkbox" value={id} />
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
};

export default SpecializationFilter;
