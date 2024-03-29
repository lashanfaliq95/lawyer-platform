import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'react-dates/initialize';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';

import HomePage from 'components/HomePage';
import AppointmentsPage from 'components/AppointmentsPage';
import HelpPage from 'components/HelpPage';
import HelpPageContactForm from 'components/HelpPage/components/ContactForm';
import MyAccountPage from 'components/MyAccountPage';
import SearchPage from 'components/SearchPage';
import LawyerDetailsPage from 'components/LawyerDetailsPage';
import LoginCardPage from 'components/LoginPage/components/LoginCardPage';
import ForgotPwdCardPage from 'components/LoginPage/components/ForgotPwdCardPage';
import RegisterCardPage from 'components/LoginPage/components/RegisterCardPage';
import ResetPwdCardPage from 'components/LoginPage/components/ResetPwdCardPage';
import UnprotectedRoute from 'components/Shared/UnprotectedRoute';
import ProRegistrationPage from 'components/ProRegistrationPage';
import ProConfirmationPage from 'components/ProConfirmationPage';
import ProLoginPage from 'components/ProLoginPage';
import ProHomePage from 'components/ProHomePage';
import ProUserAppointments from 'components/ProUserAppointments';
import ProAppointment from 'components/ProAppointment';
import ProtectedRoute from 'components/Shared/ProtectedRoute';
import AppointmentConfirmationPage from 'components/AppointmentConfirmationPage';
import AppointmentSuccessPage from 'components/AppointmentSuccessPage';
import ProClientPage from 'components/ProClientPage';
import ProMessagePage from 'components/ProMessagePage';
import ProAccountPage from 'components/ProAccountPage';

import reducers from 'reducers';
import sagas from 'sagas';
import PersonalSettingsPage from 'components/PersonalSettingsPage';
import SecuritySettingsPage from 'components/SecuritySettingsPage';
import PublicProfilePage from 'components/PublicProfilePage';
import LegalIssueSettingsPage from 'components/LegalIssueSettingsPage';
import CalendarSettingsPage from 'components/CalendarSettingsPage';
import LocationSettingsPage from 'components/LocationSettingsPage';
import HelpSettingsPage from 'components/HelpSettingsPage';
import PaymentSettingsPage from 'components/PaymentSettingsPage';
import UserSettingsPage from 'components/UserSettingsPage';
import NotFoundPage from './components/NotFoundPage';

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
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/appointments' exact component={AppointmentsPage} />
        <Route path='/help' exact component={HelpPage} />
        <Route path='/help/contact' exact component={HelpPageContactForm} />
        <ProtectedRoute path='/account' exact component={MyAccountPage} />
        <Route path='/search' exact component={SearchPage} />
        <Route
          path='/search/lawyer-details/:id'
          exact
          component={LawyerDetailsPage}
        />
        <Route
          path='/appointment-confirmation'
          exact
          component={AppointmentConfirmationPage}
        />
        <Route
          path='/appointment-success'
          exact
          component={AppointmentSuccessPage}
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
        <UnprotectedRoute path='/pro/login' exact component={ProLoginPage} />
        <Route path='/pro/register' exact component={ProRegistrationPage} />
        <Route
          path='/pro/confirmation/:token'
          exact
          component={ProConfirmationPage}
        />
        <Route path='/pro/appointments' exact component={ProUserAppointments} />
        <Route path='/pro/appointments/:id' exact component={ProAppointment} />
        <Route path='/pro/clients' exact component={ProClientPage} />
        <Route path='/pro/messages' exact component={ProMessagePage} />
        <Route path='/pro/my-account' exact component={ProAccountPage} />
        <Route
          path='/pro/my-account/personal'
          exact
          component={PersonalSettingsPage}
        />
        <Route
          path='/pro/my-account/security-settings'
          exact
          component={SecuritySettingsPage}
        />
        <Route
          path='/pro/my-account/public-profile'
          exact
          component={PublicProfilePage}
        />
        <Route
          path='/pro/my-account/users'
          exact
          component={UserSettingsPage}
        />
        <Route
          path='/pro/my-account/legal-issues'
          exact
          component={LegalIssueSettingsPage}
        />
        <Route
          path='/pro/my-account/calendar-settings'
          exact
          component={CalendarSettingsPage}
        />
        <Route
          path='/pro/my-account/locations'
          exact
          component={LocationSettingsPage}
        />
        <Route path='/pro/my-account/help' exact component={HelpSettingsPage} />
        <Route
          path='/pro/my-account/payment-and-invoices'
          exact
          component={PaymentSettingsPage}
        />
        <Route path='/pro' exact component={ProHomePage} />
        <Route path='/404-not-found' component={NotFoundPage} />
        <Redirect from='*' to='/404-not-found' />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
