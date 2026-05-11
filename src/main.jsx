import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";

import EventListDetails from "./components/eventListDetailsPage"
import App from './App.jsx'

const router = createHashRouter([
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
