import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/CommonComponents/NavigationBar';
import Footer from 'components/CommonComponents/Footer';
import HomePage from 'components/HomePage';
import LoginPage from 'components/LoginPage';
import SearchPage from 'components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/"><NavigationBar /></Route>
      <Route path="/login" exact><LoginPage /></Route>
      <Route path="/search" exact><SearchPage /></Route>
      <Route path="/home"><HomePage /></Route>
      <Route path="/"><Footer /></Route>
    </BrowserRouter>
  );
}

export default App;
