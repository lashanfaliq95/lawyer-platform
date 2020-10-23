import { ON_MOUSE_ENTER_CARD, ON_MOUSE_LEAVE_CARD } from './constants';

const initialState = {
  locations: [
    {
      id: 1, position: [52.150002, 10.333333], address: 'strin 1', isHovered: false,
    },
    {
      id: 2, position: [52.150002, 20], address: 'strin 2', isHovered: false,
    },
    {
      id: 3, position: [42.150002, 20], address: 'strin 3', isHovered: false,
    },
    {
      id: 4, position: [45.150002, 20], address: 'strin 3', isHovered: false,
    },
    {
      id: 5, position: [42.150002, 12], address: 'strin 3', isHovered: false,
    },
    {
      id: 6, position: [60.150002, 20], address: 'strin 3', isHovered: false,
    },
    {
      id: 7, position: [20.150002, 10], address: 'strin 3', isHovered: false,
    },
  ],
  users: [
    {
      id: 1, name: 'lashan', jobDescription: 'lawyer', address: 'no 7, st beads road badulla',
    },
    {
      id: 2, name: 'rishan', jobDescription: 'lawyer', address: 'no 7, st beads road badulla',
    },
    {
      id: 3, name: 'Inshira', jobDescription: 'consultont', address: 'no 7, st beads road badulla',
    },
    {
      id: 4, name: 'Inshira', jobDescription: 'consultont', address: 'no 7, st beads road badulla',
    },
    {
      id: 5, name: 'Inshira', jobDescription: 'consultont', address: 'no 7, st beads road badulla',
    },
    {
      id: 6, name: 'Inshira', jobDescription: 'consultont', address: 'no 7, st beads road badulla',
    },
    {
      id: 7, name: 'Inshira', jobDescription: 'consultont', address: 'no 7, st beads road badulla',
    },
  ],
};

const search = (state = initialState, action) => {
  switch (action.type) {
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
