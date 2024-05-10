import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import routers from './router/routers.jsx'
import { ContextUsersProvider } from './context/contextusers.jsx'
import { RouterProvider } from "react-router-dom"
import paginalogin from './pages/login.jsx'
import dashboard from './pages/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <ContextUsersProvider>
          <RouterProvider router={routers}>
      </RouterProvider>
        </ContextUsersProvider>
)