import React from 'react'
import { render } from 'react-dom'
import Welcome from './welcome.js'

import { I18nProvider } from '@lingui/react'

const locale = "es" // or whatever you need it to be
const catalog = require(`./locales/${locale}/messages.js`)
const App = () => (
  <I18nProvider language={locale} catalogs={catalog}>
    <Welcome />
  </I18nProvider>
)

render(<App />, document.getElementById('app'))