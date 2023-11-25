import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import AudioProvider from './components/AudioProvider.tsx'

/*
- settings (lock screen, enable sound/vibration)
- BUG: going to prev interval, when it will be the first, should reset to 0, or there should be a reset?
- add install button
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
      <AudioProvider>
        <App />
      </AudioProvider>
    </Provider>
  </React.StrictMode>,
)
