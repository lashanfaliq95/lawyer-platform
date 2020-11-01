import React, { useState, useEffect } from 'react';
import { Input, Label } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import FilterModal from './FilterModal';
import messages from '../../messages';

const lawSpecializations = [
  'Agrarrecht',
  'Allgemeines Vertragsrecht',
  'Anwaltshaftung',
  'Arbeitsrecht',
  'Arzthaftungsrecht',
  'Ausländerrecht & Asylrecht',
  'Bankrecht & Kapitalmarktrecht',
  'Baurecht & Architektenrecht',
  'BeamtenrechtsearchTerm',
  'Betreuungsrecht',
  'Betriebliche Altersversorgung',
  'Datenschutzrecht',
  'Designrecht',
  'Erbrecht',
  'Familienrecht',
  'Forderungseinzug & Inkassorecht',
];

const notarySpecializations = [
  'Erbrecht',
  'Familienrecht',
  'Handelsrecht & Gesellschaftsrecht',
  'Immobilienrecht',
  'Vorsorgevollmacten',
  'Sonstige Beglaubigungen & Beurkundung',
];

const SpecializationFilter = () => {
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
      const lawResults = filteredLawSpecialization.filter(
        (specialization) => specialization.toLowerCase().includes(searchTerm),
      );
      const notaryResults = filteredNotarySpecialization.filter(
        (specialization) => specialization.toLowerCase().includes(searchTerm),
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
        <h4>{formatMessages(messages.lawyer)}</h4>
        {filteredLawSpecialization.map((specialization) => (
          <Label check>
            <Input type="checkbox" />
            {specialization}
          </Label>
        ))}
      </div>
      <div className="notary">
        <h4>{formatMessages(messages.notary)}</h4>
        {filteredNotarySpecialization.map((specialization) => (
          <Label check>
            <Input type="checkbox" />
            {specialization}
          </Label>
        ))}
      </div>
    </FilterModal>
  );
};

export default SpecializationFilter;
