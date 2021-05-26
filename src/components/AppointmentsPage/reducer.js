import {
  SET_APPOINTMENT,
  TOGGLE_CANCELLATION_MODAL,
  SET_ACTIVE_USER_APPOINTMENT,
  SET_ACTIVE_PAST_APPOINTMENT,
} from './constants';

const initialState = {
  userAppointments: [
    {
      id: 'mock1',
      name: 'Herr Stefan Seitz',
      initials: 'ss',
      occupation: 'Rechtsanwalt',
      appointment: '07. Januar 2021, 10:10',
      legalIssue: 'Inkasso',
      typeOfAppointment: 'Vor-Ort-Termin',
      address: 'Bunzlauer Str. 34 \n 50858 Köln',
      access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
      phoneNumber: '022341234123',
      standardMessage: 'Bitte denken Sie an den Ausweis.',
      lat: '50.9578353',
      lon: '6.827238',
    },
    {
      id: 'mock2',
      name: 'Herr jan Seitz',
      initials: 'js',
      occupation: 'Rechtsanwalt',
      appointment: '07. Januar 2021, 10:10',
      legalIssue: 'Inkasso',
      typeOfAppointment: 'Vor-Ort-Termin',
      address: 'Bunzlauer Str. 34 \n 50858 Köln',
      access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
      phoneNumber: '022341234123',
      standardMessage: 'Bitte denken Sie an den Ausweis.',
      lat: '50.9578353',
      lon: '6.827238',
    },
  ],
  pastAppointments: [
    {
      id: 'mock3',
      name: 'Herr Stefan Seitz',
      initials: 'ss',
      occupation: 'Rechtsanwalt',
      appointment: '07. Januar 2021, 10:10',
      legalIssue: 'Inkasso',
      typeOfAppointment: 'Vor-Ort-Termin',
      address: 'Bunzlauer Str. 34 \n 50858 Köln',
      access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
      phoneNumber: '022341234123',
      standardMessage: 'Bitte denken Sie an den Ausweis.',
      lat: '50.9578353',
      lon: '6.827238',
    },
    {
      id: 'mock4',
      name: 'Herr Stefan Seitz',
      initials: 'ss',
      occupation: 'Rechtsanwalt',
      appointment: '07. Januar 2021, 10:10',
      legalIssue: 'Inkasso',
      typeOfAppointment: 'Vor-Ort-Termin',
      address: 'Bunzlauer Str. 34 \n 50858 Köln',
      access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
      phoneNumber: '022341234123',
      standardMessage: 'Bitte denken Sie an den Ausweis.',
      lat: '50.9578353',
      lon: '6.827238',
    },
  ],
  activeUserAppointment: {
    id: 'mock1',
    name: 'Herr Stefan Seitz',
    initials: 'ss',
    occupation: 'Rechtsanwalt',
    appointment: '07. Januar 2021, 10:10',
    legalIssue: 'Inkasso',
    typeOfAppointment: 'Vor-Ort-Termin',
    address: 'Bunzlauer Str. 34 \n 50858 Köln',
    access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
    phoneNumber: '022341234123',
    standardMessage: 'Bitte denken Sie an den Ausweis.',
    lat: '50.9578353',
    lon: '6.827238',
  },
  activePastAppointment: {
    id: 'mock3',
    name: 'Herr Stefan Seitz',
    initials: 'ss',
    occupation: 'Rechtsanwalt',
    appointment: '07. Januar 2021, 10:10',
    legalIssue: 'Inkasso',
    typeOfAppointment: 'Vor-Ort-Termin',
    address: 'Bunzlauer Str. 34 \n 50858 Köln',
    access: 'Kostenlose Parkplätze, 1. Stock mit Aufzug, Barrierefrei',
    phoneNumber: '022341234123',
    standardMessage: 'Bitte denken Sie an den Ausweis.',
    lat: '50.9578353',
    lon: '6.827238',
  },
  isAppointmentCancellationModalShown: false,
};

const appointment = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPOINTMENT:
      return { ...state, userAppointments: action.payload };
    case TOGGLE_CANCELLATION_MODAL:
      return { ...state, isAppointmentCancellationModalShown: action.payload };
    case SET_ACTIVE_USER_APPOINTMENT:
      return { ...state, activeUserAppointment: action.payload };
    case SET_ACTIVE_PAST_APPOINTMENT:
      return { ...state, activePastAppointment: action.payload };
    default:
      return state;
  }
};

export default appointment;
