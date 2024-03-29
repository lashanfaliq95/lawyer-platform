export const MARKER_CLICK = 'MARKER_CLICK';
export const ON_MOUSE_ENTER_CARD = 'ON_MOUSE_ENTER_CARD';
export const ON_MOUSE_LEAVE_CARD = 'ON_MOUSE_LEAVE_CARD';
export const GET_LAWYERS = 'GET_LAWYERS';
export const SET_LAWYERS = 'SET_LAWYERS';
export const SET_ACTIVE_FILTERS = 'SET_ACTIVE_FILTERS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_SPECIALIZATION_FILTERS = 'SET_SPECIALIZATION_FILTERS';
export const SET_IMMEDIATE_CONFIRMATION_FILTER =
  'SET_IMMEDIATE_CONFIRMATION_FILTER';
export const SEARCH_BY_NAME_OR_FIRM_OR_LOCATION =
  'SEARCH_BY_NAME_OR_FIRM_OR_LOCATION';
export const GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM =
  'GET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM';
export const GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS =
  'GET_SEARCH_SUGGESTIONS_FOR_LOCATIONS';
export const SET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM =
  'SET_SEARCH_SUGGESTIONS_FOR_NAME_OR_FIRM';
export const SET_SEARCH_SUGGESTIONS_FOR_LOCATION =
  'SET_SEARCH_SUGGESTIONS_FOR_LOCATION';
export const GET_LAWYER_AVAILABILITY = 'GET_LAWYER_AVAILABILITY';
export const SET_LAWYER_AVAILABILITY = 'SET_LAWYER_AVAILABILITY';
export const LOAD_LAWYER_AVAILABILITY = 'LOAD_LAWYER_AVAILABILITY';
export const GET_LAWYER_DETAILS = 'GET_LAWYER_DETAILS';
export const SET_LAWYER_DETAILS = 'SET_LAWYER_DETAILS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const LAWYER = 'Lawyer';
export const NOTARY = 'Notary';
export const CONSULTANT = 'Consultant';
export const EXPERT = 'Expert';
export const MALE = 'male';
export const FEMALE = 'female';
export const CITY_OF_COLOGNE = 'Köln';

export const languages = [
  { id: 1, language: 'Arabisch' },
  { id: 2, language: 'Englisch' },
  { id: 3, language: 'Französisch' },
  { id: 4, language: 'Gebärdensprache' },
  { id: 5, language: 'Italienisch' },
  { id: 6, language: 'Persisch' },
  { id: 7, language: 'Polnisch' },
  { id: 8, language: 'Portugiesisch' },
  { id: 9, language: 'Rumänisch' },
  { id: 10, language: 'Russisch' },
  { id: 11, language: 'Spanisch' },
  { id: 12, language: 'Türkisch' },
];

export const specializations = [
  'Agrarrecht',
  'Allgemeines Vertragsrecht',
  'Anwaltshaftung',
  'Arbeitsrecht',
  'Arzthaftungsrecht',
  'Ausländerrecht & Asylrecht',
  'Bankrecht & Kapitalmarktrecht',
  'Baurecht & Architektenrecht',
  'Beamtenrecht',
  'Betreuungsrecht',
  'Betriebliche Altersversorgung',
  'Datenschutzrecht',
  'Designrecht',
  'Erbrecht',
  'Familienrecht',
  'Forderungseinzug & Inkassorecht',
  'Gewerblicher Rechtsschutz',
  'Grundstücksrechts & Immobilienrecht',
  'Insolvenzrecht',
  'Internationales Recht',
  'Internationales Wirtschaftsrecht',
  'IT-Recht',
  'Jagdrecht',
  'Kaufrecht',
  'Maklerrecht',
  'Markenrecht',
  'Mediation',
  'Medizinrecht',
  'Mietrechts & Wohnungseigenturmsrecht',
  'Migrationsrecht',
  'Öffentliches Baurecht',
  'Öffentliches Rechts',
  'Opferhilfe',
  'Ordnungswidrigkeitenrecht',
  'Patentrecht',
  'Pferderecht',
  'Pflegerecht',
  'Rechts rund ums Tier',
  'Reiserecht',
  'Schadensersatzrecht & Schmerzensgeldrecht',
  'Schiedsgerichtsbarkeit',
  'Schulrecht',
  'Schwerbehindertenrecht',
  'Sozialrecht',
  'Sozialversicherungsrecht',
  'Sportrecht',
  'Steuerrecht',
  'Strafrecht',
  'Transportrecht & Speditionsrecht',
  'Umweltrecht',
  'Unterhaltsrecht',
  'Unternehmensrecht & Betriebsnachfolge',
  'Urheberrecht & Medienrecht',
  'Vereinsrecht & Verbandsrecht',
  'Verfassungsrecht',
  'Vergaberecht',
  'Verkehrsrecht',
  'Versicherungsrecht',
  'Verwaltungsrecht',
  'Werkvertragsrecht',
  'Wettbewerbsrecht',
  'Wirtschaftsrecht',
  'Zivilprozessrecht',
  'Zivilrecht',
  'Zwangsvollstreckungsrecht',
  'Erbrecht',
  'Familienrecht',
  'Handelsrecht & Gesellschaftsrecht',
  'Immobilienrecht',
  'Vorsorgevollmacten',
  'Sonstige Beglaubigungen & Beurkundung',
];

export const specializationsFilters = [
  { id: 0, specialization: 'Agrarrecht' },
  { id: 1, specialization: 'Allgemeines Vertragsrecht' },
  { id: 2, specialization: 'Anwaltshaftung' },
  { id: 3, specialization: 'Arbeitsrecht' },
  { id: 4, specialization: 'Arzthaftungsrecht' },
  { id: 5, specialization: 'Ausländerrecht & Asylrecht' },
  { id: 6, specialization: 'Bankrecht & Kapitalmarktrecht' },
  { id: 7, specialization: 'Baurecht & Architektenrecht' },
  { id: 8, specialization: 'Beamtenrecht' },
  { id: 9, specialization: 'Betreuungsrecht' },
  { id: 10, specialization: 'Betriebliche Altersversorgung' },
  { id: 11, specialization: 'Datenschutzrecht' },
  { id: 12, specialization: 'Designrecht' },
  { id: 13, specialization: 'Erbrecht' },
  { id: 14, specialization: 'Familienrecht' },
  { id: 15, specialization: 'Forderungseinzug & Inkassorecht' },
  { id: 16, specialization: 'Gewerblicher Rechtsschutz' },
  { id: 17, specialization: 'Grundstücksrechts & Immobilienrecht' },
  { id: 18, specialization: 'Insolvenzrecht' },
  { id: 19, specialization: 'Internationales Recht' },
  { id: 20, specialization: 'Internationales Wirtschaftsrecht' },
  { id: 21, specialization: 'IT-Recht' },
  { id: 22, specialization: 'Jagdrecht' },
  { id: 23, specialization: 'Kaufrecht' },
  { id: 24, specialization: 'Maklerrecht' },
  { id: 25, specialization: 'Markenrecht' },
  { id: 26, specialization: 'Mediation' },
  { id: 27, specialization: 'Medizinrecht' },
  { id: 28, specialization: 'Mietrechts & Wohnungseigenturmsrecht' },
  { id: 29, specialization: 'Migrationsrecht' },
  { id: 30, specialization: 'Öffentliches Baurecht' },
  { id: 31, specialization: 'Öffentliches Rechts' },
  { id: 32, specialization: 'Opferhilfe' },
  { id: 33, specialization: 'Ordnungswidrigkeitenrecht' },
  { id: 34, specialization: 'Patentrecht' },
  { id: 35, specialization: 'Pferderecht' },
  { id: 36, specialization: 'Pflegerecht' },
  { id: 37, specialization: 'Rechts rund ums Tier' },
  { id: 38, specialization: 'Reiserecht' },
  { id: 39, specialization: 'Schadensersatzrecht & Schmerzensgeldrecht' },
  { id: 40, specialization: 'Schiedsgerichtsbarkeit' },
  { id: 41, specialization: 'Schulrecht' },
  { id: 42, specialization: 'Schwerbehindertenrecht' },
  { id: 43, specialization: 'Sozialrecht' },
  { id: 44, specialization: 'Sozialversicherungsrecht' },
  { id: 45, specialization: 'Sportrecht' },
  { id: 46, specialization: 'Steuerrecht' },
  { id: 47, specialization: 'Strafrecht' },
  { id: 48, specialization: 'Transportrecht & Speditionsrecht' },
  { id: 49, specialization: 'Umweltrecht' },
  { id: 50, specialization: 'Unterhaltsrecht' },
  { id: 51, specialization: 'Unternehmensrecht & Betriebsnachfolge' },
  { id: 52, specialization: 'Urheberrecht & Medienrecht' },
  { id: 53, specialization: 'Vereinsrecht & Verbandsrecht' },
  { id: 54, specialization: 'Verfassungsrecht' },
  { id: 55, specialization: 'Vergaberecht' },
  { id: 56, specialization: 'Verkehrsrecht' },
  { id: 57, specialization: 'Versicherungsrecht' },
  { id: 58, specialization: 'Verwaltungsrecht' },
  { id: 59, specialization: 'Werkvertragsrecht' },
  { id: 60, specialization: 'Wettbewerbsrecht' },
  { id: 61, specialization: 'Wirtschaftsrecht' },
  { id: 62, specialization: 'Zivilprozessrecht' },
  { id: 63, specialization: 'Zivilrecht' },
  { id: 64, specialization: 'Zwangsvollstreckungsrecht' },
  { id: 65, specialization: 'Erbrecht' },
  { id: 66, specialization: 'Familienrecht' },
  { id: 67, specialization: 'Handelsrecht & Gesellschaftsrecht' },
  { id: 68, specialization: 'Immobilienrecht' },
  { id: 69, specialization: 'Vorsorgevollmacten' },
  { id: 70, specialization: 'Sonstige Beglaubigungen & Beurkundung' },
];
