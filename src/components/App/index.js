import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from 'components/HomePage';
import SearchPage from 'components/SearchPage';
import LoginCardPage from 'components/LoginPage/components/LoginCardPage';
import ForgotPwdCardPage from 'components/LoginPage/components/ForgotPwdCardPage';
import RegisterCardPage from 'components/LoginPage/components/RegisterCardPage';

const App = () => (
  <BrowserRouter>
    <Route path="/search" exact component={SearchPage} />
    <Route path="/" exact component={HomePage} />
    <Route path="/auth/login" exact component={LoginCardPage} />
    <Route path="/auth/forgot-pwd" exact component={ForgotPwdCardPage} />
    <Route path="/auth/register" exact component={RegisterCardPage} />
  </BrowserRouter>
);

export default App;
