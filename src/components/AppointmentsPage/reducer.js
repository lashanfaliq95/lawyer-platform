import { SET_APPOINTMENT, TOGGLE_CANCELLATION_MODAL } from './constants';

const initialState = {
  userAppointments: [{
    id: 'mock1',
    name: 'Her stefan steiz',
    initials: 'ss',
    occupation: 'reshwalte',
    appointment: '7.January 2021, 10:10',
  },
  {
    id: 'mock2',
    name: 'Her beigan steiz',
    initials: 'bs',
    occupation: 'anwalte',
    appointment: '10.January 2021, 10:10',
  }],
  pastAppointments: [{
    id: 'mock3',
    name: 'Her stefan steiz',
    initials: 'ss',
    occupation: 'reshwalte',
    appointment: '7.January 2021, 10:10',
  },
  {
    id: 'mock4',
    name: 'Her beigan steiz',
    initials: 'bs',
    occupation: 'anwalte',
    appointment: '10.January 2021, 10:10',
  }],
  selectedAppointmentDetails: {
    id: 'mock1',
    name: 'Her stefan steiz',
    initials: 'ss',
    occupation: 'reshwalte',
    appointment: '7.January 2021, 10:10',
    legalIssue: 'Inkasso',
    typeOfAppointment: 'Vor-ort-termin',
    address: 'Bunzaler str. 54',
    access: 'Kostenplos parklatze 1 slot',
    phoneNumber: '022341234123',
    standardMessage: 'Bitte denken Sie an den Ausweis',
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
    default:
      return state;
  }
};

export default appointment;
