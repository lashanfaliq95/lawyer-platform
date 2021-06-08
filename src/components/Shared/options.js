import intl from 'helpers/intlHelper';
import {
  TITLES as TITLE_VALUES,
  REPEAT_FREQUENCY_TYPES as REPEAT_FREQUENCY_TYPE_VALUES,
  OFFERED_APPOINTMENT_TYPES as OFFERED_APPOINTMENT_TYPE_VALUES,
  NOTIFICATION_TYPES as NOTIFICATION_TYPE_VALUES,
  LEGAL_ISSUE_TYPES as LEGAL_ISSUE_TYPE_VALUES,
  JOBS,
} from './constants';
import {
  TITLES as TITLE_LABELS,
  REPEAT_FREQUENCY_TYPES as REPEAT_FREQUENCY_TYPE_MESSAGES,
  OFFERED_APPOINTMENT_TYPES as OFFERED_APPOINTMENT_TYPE_MESSAGES,
  NOTIFICATION_TYPES as NOTIFICATION_TYPE_MESSAGES,
  LEGAL_ISSUE_TYPES as LEGAL_ISSUE_TYPE_MESSAGES,
  JOB_TITLES,
} from './messages';

export const MALE_JOB_TYPES = [
  {
    value: JOBS.SPECIALIZED_LAWYER,
    label: intl.formatMessage(JOB_TITLES.specializedLawyerMale),
  },
  {
    value: JOBS.LAWYER,
    label: intl.formatMessage(JOB_TITLES.lawyerMale),
  },
  {
    value: JOBS.PATENT_LAWYER,
    label: intl.formatMessage(JOB_TITLES.patentLawyerMale),
  },
  {
    value: JOBS.NOTARY,
    label: intl.formatMessage(JOB_TITLES.notaryMale),
  },
  {
    value: JOBS.TAX_CONSULTANT,
    label: intl.formatMessage(JOB_TITLES.taxConsultantMale),
  },
  {
    value: JOBS.CONSULTANT,
    label: intl.formatMessage(JOB_TITLES.consultantMale),
  },
];

export const FEMALE_JOB_TYPES = [
  {
    value: JOBS.SPECIALIZED_LAWYER,
    label: intl.formatMessage(JOB_TITLES.specializedLawyerFemale),
  },
  {
    value: JOBS.LAWYER,
    label: intl.formatMessage(JOB_TITLES.lawyerFemale),
  },
  {
    value: JOBS.PATENT_LAWYER,
    label: intl.formatMessage(JOB_TITLES.patentLawyerFemale),
  },
  {
    value: JOBS.NOTARY,
    label: intl.formatMessage(JOB_TITLES.notaryFemale),
  },
  {
    value: JOBS.TAX_CONSULTANT,
    label: intl.formatMessage(JOB_TITLES.taxConsultantFemale),
  },
  {
    value: JOBS.CONSULTANT,
    label: intl.formatMessage(JOB_TITLES.consultantFemale),
  },
];

export const TITLES = [
  {
    label: intl.formatMessage(TITLE_LABELS.professor),
    value: TITLE_VALUES.PROFESSOR,
  },
  {
    label: intl.formatMessage(TITLE_LABELS.doctor),
    value: TITLE_VALUES.DOCTOR,
  },
  {
    label: intl.formatMessage(TITLE_LABELS.professorDoctor),
    value: TITLE_VALUES.PROFESSOR_DOCTOR,
  },
];

export const REPEAT_FREQUENCY_TYPES = [
  {
    label: intl.formatMessage(REPEAT_FREQUENCY_TYPE_MESSAGES.everyDay),
    value: REPEAT_FREQUENCY_TYPE_VALUES.EVERY_DAY,
  },
  {
    label: intl.formatMessage(REPEAT_FREQUENCY_TYPE_MESSAGES.everyWeek),
    value: REPEAT_FREQUENCY_TYPE_VALUES.EVERY_WEEK,
  },
  {
    label: intl.formatMessage(REPEAT_FREQUENCY_TYPE_MESSAGES.everyMonth),
    value: REPEAT_FREQUENCY_TYPE_VALUES.EVERY_MONTH,
  },
  {
    label: intl.formatMessage(REPEAT_FREQUENCY_TYPE_MESSAGES.everyYear),
    value: REPEAT_FREQUENCY_TYPE_VALUES.EVERY_YEAR,
  },
];

export const LEGAL_ISSUE_TYPES = [
  {
    label: intl.formatMessage(LEGAL_ISSUE_TYPE_MESSAGES.typeOne),
    value: LEGAL_ISSUE_TYPE_VALUES.TYPE_ONE,
  },
  {
    label: intl.formatMessage(LEGAL_ISSUE_TYPE_MESSAGES.typeTwo),
    value: LEGAL_ISSUE_TYPE_VALUES.TYPE_TWO,
  },
];

export const APPOINTMENT_TYPES = [
  {
    label: intl.formatMessage(OFFERED_APPOINTMENT_TYPE_MESSAGES.personalVisit),
    value: OFFERED_APPOINTMENT_TYPE_VALUES.PERSONAL_VISIT,
  },
  {
    label: intl.formatMessage(
      OFFERED_APPOINTMENT_TYPE_MESSAGES.phoneAppointment,
    ),
    value: OFFERED_APPOINTMENT_TYPE_VALUES.PHONE_APPOINTMENT,
  },
];

export const NOTIFICATION_TYPES = [
  {
    label: intl.formatMessage(NOTIFICATION_TYPE_MESSAGES.none),
    value: NOTIFICATION_TYPE_VALUES.NONE,
  },
  {
    label: intl.formatMessage(NOTIFICATION_TYPE_MESSAGES.email),
    value: NOTIFICATION_TYPE_VALUES.EMAIL,
  },
  {
    label: intl.formatMessage(NOTIFICATION_TYPE_MESSAGES.emailAndSms),
    value: NOTIFICATION_TYPE_VALUES.EMAIL_SMS,
  },
];

export const SPECIALIZATION_TYPES = [
  { value: 0, label: 'Agrarrecht' },
  { value: 1, label: 'Allgemeines Vertragsrecht' },
  { value: 2, label: 'Anwaltshaftung' },
  { value: 3, label: 'Arbeitsrecht' },
  { value: 4, label: 'Arzthaftungsrecht' },
  { value: 5, label: 'Ausländerrecht & Asylrecht' },
  { value: 6, label: 'Bankrecht & Kapitalmarktrecht' },
  { value: 7, label: 'Baurecht & Architektenrecht' },
  { value: 8, label: 'Beamtenrecht' },
  { value: 9, label: 'Betreuungsrecht' },
  { value: 10, label: 'Betriebliche Altersversorgung' },
  { value: 11, label: 'Datenschutzrecht' },
  { value: 12, label: 'Designrecht' },
  { value: 13, label: 'Erbrecht' },
  { value: 14, label: 'Familienrecht' },
  { value: 15, label: 'Forderungseinzug & Inkassorecht' },
  { value: 16, label: 'Gewerblicher Rechtsschutz' },
  { value: 17, label: 'Grundstücksrechts & Immobilienrecht' },
  { value: 18, label: 'Insolvenzrecht' },
  { value: 19, label: 'Internationales Recht' },
  { value: 20, label: 'Internationales Wirtschaftsrecht' },
  { value: 21, label: 'IT-Recht' },
  { value: 22, label: 'Jagdrecht' },
  { value: 23, label: 'Kaufrecht' },
  { value: 24, label: 'Maklerrecht' },
  { value: 25, label: 'Markenrecht' },
  { value: 26, label: 'Mediation' },
  { value: 27, label: 'Medizinrecht' },
  { value: 28, label: 'Mietrechts & Wohnungseigenturmsrecht' },
  { value: 29, label: 'Migrationsrecht' },
  { value: 30, label: 'Öffentliches Baurecht' },
  { value: 31, label: 'Öffentliches Rechts' },
  { value: 32, label: 'Opferhilfe' },
  { value: 33, label: 'Ordnungswidrigkeitenrecht' },
  { value: 34, label: 'Patentrecht' },
  { value: 35, label: 'Pferderecht' },
  { value: 36, label: 'Pflegerecht' },
  { value: 37, label: 'Rechts rund ums Tier' },
  { value: 38, label: 'Reiserecht' },
  { value: 39, label: 'Schadensersatzrecht & Schmerzensgeldrecht' },
  { value: 40, label: 'Schiedsgerichtsbarkeit' },
  { value: 41, label: 'Schulrecht' },
  { value: 42, label: 'Schwerbehindertenrecht' },
  { value: 43, label: 'Sozialrecht' },
  { value: 44, label: 'Sozialversicherungsrecht' },
  { value: 45, label: 'Sportrecht' },
  { value: 46, label: 'Steuerrecht' },
  { value: 47, label: 'Strafrecht' },
  { value: 48, label: 'Transportrecht & Speditionsrecht' },
  { value: 49, label: 'Umweltrecht' },
  { value: 50, label: 'Unterhaltsrecht' },
  { value: 51, label: 'Unternehmensrecht & Betriebsnachfolge' },
  { value: 52, label: 'Urheberrecht & Medienrecht' },
  { value: 53, label: 'Vereinsrecht & Verbandsrecht' },
  { value: 54, label: 'Verfassungsrecht' },
  { value: 55, label: 'Vergaberecht' },
  { value: 56, label: 'Verkehrsrecht' },
  { value: 57, label: 'Versicherungsrecht' },
  { value: 58, label: 'Verwaltungsrecht' },
  { value: 59, label: 'Werkvertragsrecht' },
  { value: 60, label: 'Wettbewerbsrecht' },
  { value: 61, label: 'Wirtschaftsrecht' },
  { value: 62, label: 'Zivilprozessrecht' },
  { value: 63, label: 'Zivilrecht' },
  { value: 64, label: 'Zwangsvollstreckungsrecht' },
  { value: 65, label: 'Erbrecht' },
  { value: 66, label: 'Familienrecht' },
  { value: 67, label: 'Handelsrecht & Gesellschaftsrecht' },
  { value: 68, label: 'Immobilienrecht' },
  { value: 69, label: 'Vorsorgevollmacten' },
  { value: 70, label: 'Sonstige Beglaubigungen & Beurkundung' },
];
