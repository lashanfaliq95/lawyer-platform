import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/CommonComponents/NavigationBar';
import Footer from 'components/CommonComponents/Footer';

function App() {
  return (
    <BrowserRouter>
      <Route path="/"><NavigationBar /></Route>
      <Route path="/app" exact><div className="App"> app</div></Route>
      <Route path="/"><Footer /></Route>
    </BrowserRouter>

  );
}

export default App;
