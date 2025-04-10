import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { store } from './stores/store'
import './assets/scss/_reset.scss'
import './index.css'
import './assets/css/variables.css'
import './assets/css/color.css'
import { router } from './router'
import { config } from './constants/cookie'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <CookiesProvider defaultSetOptions={config}>
        <RouterProvider router={router} />
      </CookiesProvider>
    </StrictMode>
  </Provider>,
)
