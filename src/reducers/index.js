import { combineReducers } from 'redux';

import search from 'components/SearchPage/reducer';
import login from 'components/LoginPage/reducer';
import appointments from 'components/AppointmentsPage/reducer';

export default combineReducers({ search, login, appointments });
