import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from 'components/HomePage';
import AppointmentsPage from 'components/AppointmentsPage';
import HelpPage from 'components/HelpPage';
import HelpPageContactForm from 'components/HelpPage/components/ContatctForm';
import SearchPage from 'components/SearchPage';
import LawyerDetailsPage from 'components/LawyerDetailsPage';
import LoginCardPage from 'components/LoginPage/components/LoginCardPage';
import ForgotPwdCardPage from 'components/LoginPage/components/ForgotPwdCardPage';
import RegisterCardPage from 'components/LoginPage/components/RegisterCardPage';
import ResetPwdCardPage from 'components/LoginPage/components/ResetPwdCardPage';
import UnprotectedRoute from 'components/Shared/UnprotectedRoute';
import ProRegistrationPage from 'components/ProRegistrationPage';

import reducers from 'reducers';
import sagas from 'sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' exact component={HomePage} />
      <Route path='/appointments' exact component={AppointmentsPage} />
      <Route path='/help' exact component={HelpPage} />
      <Route path='/help/contact' exact component={HelpPageContactForm} />
      <Route path='/search' exact component={SearchPage} />
      <Route
        path='/search/lawyer-details/:id'
        exact
        component={LawyerDetailsPage}
      />
      <UnprotectedRoute path='/auth/login' exact component={LoginCardPage} />
      <UnprotectedRoute
        path='/auth/forgot-pwd'
        exact
        component={ForgotPwdCardPage}
      />
      <UnprotectedRoute
        path='/auth/register'
        exact
        component={RegisterCardPage}
      />
      <Route path='/auth/reset/:token' exact component={ResetPwdCardPage} />
      <Route path='/pro' exact component={ProRegistrationPage} />
    </BrowserRouter>
  </Provider>
);

export default App;
