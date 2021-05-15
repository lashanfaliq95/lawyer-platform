import { createIntl, createIntlCache } from 'react-intl';
import translatedMessages from 'assets/lang/translatedMessages';

const cache = createIntlCache();

const intl = createIntl(
  {
    messages: translatedMessages,
    locale: 'de',
    defaultLocale: 'en',
  },
  cache,
);

export default intl;
