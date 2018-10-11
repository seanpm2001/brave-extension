/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import BraveShields from './containers/braveShields'

chrome.storage.local.get('state', (obj) => {
  const store: any = new Store({
    portName: 'BRAVE'
  })

  store.ready()
    .then(() => {
      const mountNode: HTMLElement | null = document.querySelector('#root')
      ReactDOM.render(
        <Provider store={store}>
          <BraveShields />
        </Provider>,
        mountNode
      )
    })
    .catch(() => {
      console.error('Problem mounting brave shields')
    })
})
