import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './components/App';
import translatedMessages from './assets/lang/translatedMessages';

library.add(fab, fas);

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={translatedMessages} locale="de" defaultLocale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
