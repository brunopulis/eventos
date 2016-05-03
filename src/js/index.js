'use strict'

import React from 'react'
import { render } from 'react-dom'
import App from './containers/app/index'

render(
  <App />,
  document.querySelector('[data-js="app"]')
)
