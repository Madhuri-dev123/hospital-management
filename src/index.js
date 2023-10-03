import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import AddHospital from './features/AdminDashboard/AddHospital';
import Home from './Home/Home';
import AddBed from './features/AdminDashboard/AddBed';
import HospitalDetails from './features/Hospital/HospitalDetails';
//import Home from './Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
        children:[
          {
            path:"/admindashboard/addhospital",
            element: <AddHospital></AddHospital>
          },
          {
            path:"/admindashboard/addbed",
            element: <AddBed></AddBed>
          }
        ]
      },
      {
        path:"/details/:id",
        element: <HospitalDetails></HospitalDetails>

      },
      {
        path: "",
        element: <Home></Home>
      }
    ]
  }
])
  
    
  




createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();