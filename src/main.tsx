import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import AudioProvider from './components/AudioProvider.tsx'

/*
TODO:
- disable text highlighting during long press
- settings (lock screen, enable sound/vibration)
- add version?
- add install button
- warning modals before resetting state
- start state
- fix nav buttons
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
