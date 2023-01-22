import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import {routes} from "./routes/routes"
import "./index.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />

);
