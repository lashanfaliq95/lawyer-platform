import {
  ON_MOUSE_ENTER_CARD,
  ON_MOUSE_LEAVE_CARD,
  SET_LAWYERS,
  SET_FILTERS,
  SET_ACTIVE_FILTERS,
} from './constants';

const initialState = {
  locations: [
    {
      id: 1,
      position: [51.21873, 6.78126],
      address: 'strin 1',
      isHovered: false,
    },
    {
      id: 2,
      position: [51.24192, 6.73521],
      address: 'strin 2',
      isHovered: false,
    },
    {
      id: 3,
      position: [51.23134, 6.78211],
      address: 'strin 3',
      isHovered: false,
    },
    {
      id: 4,
      position: [51.21826, 6.78228],
      address: 'strin 3',
      isHovered: false,
    },
    {
      id: 5,
      position: [51.2325, 6.7595],
      address: 'strin 3',
      isHovered: false,
    },
    {
      id: 6,
      position: [51.2625, 6.8],
      address: 'strin 3',
      isHovered: false,
    },
  ],
  users: [
    {
      id: 1,
      name: 'Dr. Kai Rohs',
      jobDescription: 'Ausländerrecht',
      address: 'Graf-Adolf-Strasse 21, 40212, Düsseldorf, Germany',
      imgUrl:
        'http://www.anwaltskanzlei-dr-kai-rohs.de/wp-content/uploads/kai_rohs_quadrat-300x300.png',
    },
    {
      id: 2,
      name: 'Katja Jungfermann',
      jobDescription: 'Handelsrecht, Internationales Recht',
      address: 'Niederkasseler Lohweg 18, 40547, Düsseldorf, Germany',
      imgUrl:
        'https://www.clp-rechtsanwaelte.de/wpdata/wp-content/uploads/2018/01/Katja-Jungfermann_2-1030x683.jpg',
    },
    {
      id: 3,
      name: 'Dr. Rainer Borgelt',
      jobDescription: 'Wirtschaftsrecht, “Sozialrecht”',
      address: 'Taubenstr. 22, 40479, Düsseldorf, Germany',
      imgUrl:
        'https://i0.wp.com/borgelt.de/wp-content/uploads/2016/09/Rainer_Borgelt.jpg?resize=889%2C1030&ssl=1',
    },
    {
      id: 4,
      name: 'Anne Lammers',
      jobDescription: 'Zivilrecht, Unternehmensrecht, Versicherungsrecht',
      address: 'Berliner Allee 56, 40212, Düsseldorf, Germany',
      imgUrl:
        'https://www.msh-rechtsanwaelte.de/wp-content/uploads/2020/07/J.Rolfes.MSH_.AnneLammers200603.125.ret5-A5-SW-1024x658.jpg',
    },
    {
      id: 5,
      name: 'Jan Niklas Schulte',
      jobDescription: 'Medizinrecht, Ausländerrecht',
      address: 'Burggrafenstrasse 5, 40545, Düsseldorf, Germany',
      imgUrl:
        'https://www.peters-legal.com/wp-content/uploads/peters-ra-schulte-jan-niklas-1.jpg',
    },
    {
      id: 6,
      name: 'Mélanie Clerc',
      jobDescription: 'Immobilienrecht, Baurecht',
      address: 'Kaistrasse 16A, 40221, Düsseldorf, Germany',
      imgUrl:
        'https://www.franzlegal.com/files/theme_files/lawyers/teams/FRANZlegalMC2.jpg',
    },
  ],
  filters: {
    availability: [],
    specializations: [],
    languages: [],
  },
  activeFilters: {
    activeAvailability: [],
    activeSpecializations: [],
    freeFirstAppointment: false,
    appointmentWithImmediateConfirmation: false,
    activeLanguages: [],
  },
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAWYERS:
      return {
        ...state,
        users: action.payload,
        locations: action.payload.map(
          ({
            id, latitude, longitude, address,
          }) => ({
            id,
            address,
            position: [latitude, longitude],
            isHovered: false,
          }),
        ),
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          specializations: action.payload.specializations,
          languages: action.payload.languages,
        },
      };
    case SET_ACTIVE_FILTERS:
      return {
        ...state,
        activeFilters: action.payload,
      };
    case ON_MOUSE_ENTER_CARD:
      return {
        ...state,
        locations: state.locations.map((location) => {
          const updatedLocation = location;
          if (action.payload.id === location.id) {
            updatedLocation.isHovered = true;
          }

          return updatedLocation;
        }),
      };
    case ON_MOUSE_LEAVE_CARD:
      return {
        ...state,
        locations: state.locations.map((location) => {
          const updatedLocation = location;
          if (action.payload.id === location.id) {
            updatedLocation.isHovered = false;
          }
          return updatedLocation;
        }),
      };
    default:
      return state;
  }
};

export default search;
