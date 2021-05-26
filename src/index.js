import React from 'react';
import ReactDOM from 'react-dom';
import { RawIntlProvider } from 'react-intl';

import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from 'components/App';
import intl from 'helpers/intlHelper';

library.add(fab, fas);

ReactDOM.render(
  <React.StrictMode>
    <RawIntlProvider value={intl}>
      <App />
    </RawIntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
