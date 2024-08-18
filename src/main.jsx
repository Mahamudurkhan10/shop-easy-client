import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { router } from './Router/router';
import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
