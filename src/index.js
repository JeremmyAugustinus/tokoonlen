import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/product",
    element: <Product />,
  },{
    path: "/account",
    element: <Account />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/register",
    element: <Register />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
