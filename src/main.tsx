import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'

/*
- fix PWA install from subfolder https://www.reddit.com/r/PWA/comments/xojew1/subfolders_pwa/
- add current progress to timeline bar
- workout finish detection
- add total amount of intervals to intervalStatus
- prevent screen rotation
- warning modals before resetting state
- start state
- add a background image
- warmup / cooldownhttps://www.reddit.com/r/PWA/comments/xojew1/subfolders_pwa/
- fix nav buttons
- replay button
- lock button
- keep screen active
- can we trigger an alarm sound / vibration?
- install linter
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
