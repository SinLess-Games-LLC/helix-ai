import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/app'
import { store } from './configs/store.config'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { HelixTheme } from './configs/mui.theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={HelixTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
