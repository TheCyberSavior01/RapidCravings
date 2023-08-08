import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import CheckOut from "../pages/CheckOut";
import ProtectedRoute from "./ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/checkout",
        element: <ProtectedRoute><CheckOut /></ProtectedRoute>
      }
    ],
  },
]);
