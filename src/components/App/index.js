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
      <Route path="/auth/login" exact><LoginCardPage /></Route>
      <Route path="/auth/forgot-pwd" exact><ForgotPwdCardPage /></Route>
      <Route path="/auth/register" exact><RegisterCardPage /></Route>
    </BrowserRouter>
  );
}

export default App;
