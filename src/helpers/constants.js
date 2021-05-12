export const USER_ID = 'USER_ID';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const USER_ROLE = 'USER_ROLE';

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

export const APPOINTMENT_SECTION = [
  {
    type: APPOINTMENT_RANGES.TODAY,
    title: 'Today',
  },
  {
    type: APPOINTMENT_RANGES.YESTERDAY,
    title: 'Yesterday',
  },
  {
    type: APPOINTMENT_RANGES.THIS_WEEK,
    title: 'This Week',
  },
  {
    type: APPOINTMENT_RANGES.THIS_MONTH,
    title: 'This Month',
  },
  {
    type: APPOINTMENT_RANGES.THIS_YEAR,
    title: 'This Year',
  },
];

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
