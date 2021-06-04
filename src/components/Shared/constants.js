export const EXPERT_TYPES = {
  0: 'app.shared.notary',
  1: 'app.shared.taxConsultants',
  2: 'app.shared.consultants',
  3: 'app.shared.lawSpecializations',
  4: 'app.shared.patentLawyer',
};

export const APPOINTMENT_RANGES = {
  TODAY: 0,
  YESTERDAY: 1,
  THIS_WEEK: 2,
  THIS_MONTH: 3,
  THIS_YEAR: 4,
  CUSTOM: 5,
};

export const APPOINTMENT_TYPES = {
  INQUIRIES: 0,
  UPCOMING: 1,
  PAST: 3,
  CANCELLED: 2,
};

export const CALENDAR_FORM_TYPES = {
  INQUIRIES: 0,
  UPCOMING: 1,
  PAST: 3,
  CANCELLED: 2,
  NEW: 4,
};

export const APPOINTMENT_COLORS = [
  {
    backgroundColor: '#BDE1AE',
    textColor: '#00B548',
  },
  {
    backgroundColor: '#FF444F',
    textColor: '#FFFFFF',
  },
  {
    backgroundColor: '#B36FDA',
    textColor: '#FFFFFF',
  },
];

export const roleMap = {
  users: 1,
  experts: 2,
};

export const JOBS = {
  SPECIALIZED_LAWYER: 1,
  LAWYER: 2,
  PATENT_LAWYER: 3,
  NOTARY: 4,
  TAX_CONSULTANT: 5,
  CONSULTANT: 6,
};

export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

export const LEGAL_ISSUE_TYPES = {
  TYPE_ONE: 'TYPE_ONE',
  TYPE_TWO: 'TYPE_TWO',
};

export const OFFERED_APPOINTMENT_TYPES = {
  PERSONAL_VISIT: 'PERSONAL_VISIT',
  PHONE_APPOINTMENT: 'PHONE_APPOINTMENT',
};

export const NOTIFICATION_TYPES = {
  NONE: 'NONE',
  EMAIL: 'EMAIL',
  EMAIL_SMS: 'EMAIL_SMS',
};

export const REPEAT_FREQUENCY_TYPES = {
  EVERY_DAY: 'EVERY_DAY',
  EVERY_WEEK: 'EVERY_WEEK',
  EVERY_MONTH: 'EVERY_MONTH',
  EVERY_YEAR: 'EVERY_YEAR',
};
