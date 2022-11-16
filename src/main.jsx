import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider,createBrowserRouter} from "react-router-dom"
const router=createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />

  
)
