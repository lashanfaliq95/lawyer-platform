import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/CommonComponents/NavigationBar';
import Footer from 'components/CommonComponents/Footer';
import HomePage from 'components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/"><NavigationBar /></Route>
      <Route path="/"><HomePage /></Route>
      <Route path="/"><Footer /></Route>
    </BrowserRouter>

  );
}

export default App;
