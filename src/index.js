import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Baingan from './Components/Baingan';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bada from './Components/Bada';
import Contact from './Components/Contact';
import Mudda from './Components/Mudda';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <Baingan/>,
  },
  {
    path: "Bhupinder_Jogi",
    element: <Bada/>,
  },
  {
    path: "Contact_Us",
    element: <Contact/>,
  },
  {
    path: "Mudda",
    element: <Mudda/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

