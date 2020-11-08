import React from 'react'
import { render } from 'react-dom'
import Welcome from './welcome.js'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'


const locale = "es" // or whatever you need it to be
const catalog = require(`./locales/${locale}.js`)
i18n.load(locale, catalog.messages)
i18n.activate(locale)

const App = () => (
  <I18nProvider i18n={i18n}>
    <Welcome  name="Joe" />
  </I18nProvider>
)

render(<App />, document.getElementById('root'))