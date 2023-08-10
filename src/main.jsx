import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/MainRoute'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <HelmetProvider>
      {/* <QueryClientProvider client={QueryClient}> */}
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      {/* </QueryClientProvider> */}
    </HelmetProvider>
  </AuthProvider>
</React.StrictMode>
)
