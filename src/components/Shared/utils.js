import moment from 'moment';
import intl from 'helpers/intlHelper';

import { APPOINTMENT_RANGES } from 'components/Shared/constants';
import { DAYS, MONTHS, JOB_TITLES } from './messages';
import { JOBS, GENDER } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getLocation = (setPosition) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
};

export function getIndicesOf(searchStr, sourceString) {
  const source = sourceString.toLowerCase();
  const search = searchStr.toLowerCase();

  const searchStrLen = search.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0;
  const indices = [];

  while (source.indexOf(search, startIndex) > -1) {
    const index = source.indexOf(search, startIndex);
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

export function prependZero(number) {
  if (number < 9) return `0${number}`;
  return number;
}

export function getExpiryDate(createdAt) {
  const expiryDateInMinutes = moment(createdAt)
    .add(1, 'day')
    .diff(moment(), 'minutes');

  return {
    hours: Math.floor(expiryDateInMinutes / 60),
    minutes: expiryDateInMinutes % 60,
  };
}

export function getLocalizedMonth(momentObj) {
  return MONTHS[moment(momentObj).format('MMMM').toLowerCase()];
}

export function getLocalizedDayOfWeek(momentObj) {
  return DAYS[moment(momentObj).format('dddd').toLowerCase()];
}

export function mapCustomAppointments(arr, format) {
  const items = {};

  arr.forEach((appointment) => {
    const date = moment(appointment.date).format('YYYY-MM');
    if (!items[date]) {
      items[date] = [appointment];
    } else {
      items[date].push(appointment);
    }
  });

  return Object.keys(items)
    .sort((a, b) => moment(a).diff(moment(b.date)))
    .map((date) => {
      return {
        title: `${format(getLocalizedMonth(date))} ${moment(date).format(
          'YYYY',
        )}`,
        appointments: items[date],
      };
    });
}

export function isSameOrAfterAndIsBefore(
  date,
  isSameOrAfterDate,
  isBeforeDate,
) {
  return (
    moment(date).isSameOrAfter(moment(isSameOrAfterDate), 'day') &&
    moment(date).isBefore(moment(isBeforeDate), 'day')
  );
}

export function getAppointmentsFiltered(arr, type, format = () => {}) {
  switch (type) {
    case APPOINTMENT_RANGES.TODAY:
      return arr.filter((d) => moment(d.date).isSame(moment(), 'day'));
    case APPOINTMENT_RANGES.YESTERDAY:
      return arr.filter((d) =>
        moment(d.date).isSame(moment().subtract(1, 'day'), 'day'),
      );
    case APPOINTMENT_RANGES.THIS_WEEK:
      return arr.filter((d) =>
        isSameOrAfterAndIsBefore(
          d.date,
          moment().startOf('week'),
          moment().subtract(1, 'day'),
        ),
      );
    case APPOINTMENT_RANGES.THIS_MONTH:
      return arr.filter((d) =>
        isSameOrAfterAndIsBefore(
          d.date,
          moment().startOf('month'),
          moment().startOf('week'),
        ),
      );
    case APPOINTMENT_RANGES.THIS_YEAR:
      return arr.filter((d) =>
        isSameOrAfterAndIsBefore(
          d.date,
          moment().startOf('year'),
          moment().startOf('month'),
        ),
      );
    case APPOINTMENT_RANGES.CUSTOM:
      // eslint-disable-next-line no-case-declarations
      const filteredAppointments = arr.filter((d) =>
        moment(d.date).isBefore(moment().startOf('year'), 'day'),
      );
      return mapCustomAppointments(filteredAppointments, format);
    default:
      return [];
  }
}

export const getJobTitle = (expertId, gender) => {
  const { formatMessage } = intl;
  const { MALE } = GENDER;

  switch (expertId) {
    case JOBS.SPECIALIZED_LAWYER:
      return formatMessage(
        gender === MALE
          ? JOB_TITLES.specializedLawyerMale
          : JOB_TITLES.specializedLawyerFemale,
      );
    case JOBS.LAWYER:
      return formatMessage(
        gender === MALE ? JOB_TITLES.lawyerMale : JOB_TITLES.lawyerFemale,
      );
    case JOBS.PATENT_LAWYER:
      return formatMessage(
        gender === MALE
          ? JOB_TITLES.patentLawyerMale
          : JOB_TITLES.patentLawyerFemale,
      );
    case JOBS.NOTARY:
      return formatMessage(
        gender === MALE ? JOB_TITLES.notaryMale : JOB_TITLES.notaryFemale,
      );
    case JOBS.TAX_CONSULTANT:
      return formatMessage(
        gender === MALE
          ? JOB_TITLES.taxConsultantMale
          : JOB_TITLES.taxConsultantFemale,
      );
    case JOBS.CONSULTANT:
      return formatMessage(
        gender === MALE
          ? JOB_TITLES.consultantMale
          : JOB_TITLES.consultantFemale,
      );
    default:
      return null;
  }
};
