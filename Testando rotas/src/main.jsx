import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import mainRoutes from './routes/mainRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={mainRoutes} />
)
