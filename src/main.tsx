import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "../src/pages/Home"
import Details from "../src/pages/Details"

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/home'
      },
      {
        element: <Details />,
        path: "/details/:name"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
