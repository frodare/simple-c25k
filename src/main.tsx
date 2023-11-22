import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'

/*
- trigger an alarm sound / vibration?
- add a background image
- keep screen active
- prevent screen rotation
- warning modals before resetting state
- start state
- warmup / cooldownhttps://www.reddit.com/r/PWA/comments/xojew1/subfolders_pwa/
- fix nav buttons
- replay button
- lock button
- install linter
- setup build pipeline
- add more tests
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
