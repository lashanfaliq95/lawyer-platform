import moment from 'moment';

import { APPOINTMENT_TYPES } from './constants';

export const CLIENTS = [
  { id: 1, firstName: 'Mike', lastName: 'Wazowski' },
  { id: 2, firstName: 'Michael', lastName: 'Scott' },
  { id: 3, firstName: 'Regina', lastName: 'Philange' },
  { id: 4, firstName: 'Dio', lastName: 'Brando' },
  { id: 5, firstName: 'Ethan', lastName: 'Winters' },
];

export const APPOINTMENTS = [
  {
    id: 1,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.UPCOMING,
    date: moment().subtract(1, 'month').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 2,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.PAST,
    date: moment().subtract(1, 'week').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 3,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.UPCOMING,
    date: moment().subtract(1, 'day').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 4,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.CANCELLED,
    date: moment().toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 5,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.UPCOMING,
    date: moment().subtract(3, 'day').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 6,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.UPCOMING,
    date: moment().subtract(1, 'year').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
  {
    id: 7,
    user: {
      firstName: 'Uzumaki',
      lastName: 'Naruto',
    },
    type: APPOINTMENT_TYPES.INQUIRIES,
    date: moment().subtract(1, 'year').toDate(),
    createdAt: moment().subtract(10, 'hours').toDate(),
  },
];
