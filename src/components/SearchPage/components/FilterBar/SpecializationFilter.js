import React, { useState, useEffect } from 'react';
import { Input, Label, Button } from 'reactstrap';

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
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <div className="top-section">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Enter Search term"
        />
        <h4>Lawyers</h4>
        {filteredLawSpecialization.map((specialization) => (
          <Label check>
            <Input type="checkbox" />
            {specialization}
          </Label>
        ))}
      </div>
      <div className="top-section notary">
        <h4>Notaries</h4>
        {filteredNotarySpecialization.map((specialization) => (
          <Label check>
            <Input type="checkbox" />
            {specialization}
          </Label>
        ))}
      </div>
      <div className="bottom-section">
        <Button color="link">Delete</Button>
        <Button color="secondary">save</Button>
      </div>
    </>
  );
};

export default SpecializationFilter;
