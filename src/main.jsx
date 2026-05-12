import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import EventListDetails from "./components/eventListDetailsPage"
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
  },
  {
    path:"/eventList/:id",
    element:<EventListDetails/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
