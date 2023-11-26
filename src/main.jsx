import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import routes from './router'
import GlobalStyle from './styles/GlobalStyles'
import './middlewares/axiosConfig'
import './middlewares/axiosError'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>
)
