import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact><div className="App">App</div></Route>
    </BrowserRouter>
  );
}

export default App;
