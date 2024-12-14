import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:
    [
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
