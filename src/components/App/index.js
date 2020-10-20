import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from 'components/HomePage';
import SearchPage from 'components/SearchPage';
import LoginCardPage from 'components/LoginPage/components/LoginCardPage';
import ForgotPwdCardPage from 'components/LoginPage/components/ForgotPwdCardPage';
import RegisterCardPage from 'components/LoginPage/components/RegisterCardPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/search" exact><SearchPage /></Route>
      <Route path="/" exact><HomePage /></Route>
      <Route
        path="/auth"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/login`} component={LoginCardPage} exact />
            <Route path={`${url}/forgot-pwd`} component={ForgotPwdCardPage} exact />
            <Route path={`${url}/register`} component={RegisterCardPage} exact />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
