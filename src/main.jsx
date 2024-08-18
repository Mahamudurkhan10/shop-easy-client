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


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     <QueryClientProvider client={queryClient}>
   
    <RouterProvider router={router} />

    </QueryClientProvider>
    
  </StrictMode>,
)
