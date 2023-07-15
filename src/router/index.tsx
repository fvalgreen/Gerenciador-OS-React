import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import NewTicket from "../views/NewTicket";

export const getRouter = (token: string, nivelAcesso: string) => {
  if (!token) {
    return createBrowserRouter([
      {
        path: "*",
        id: "login",
        element: <Login />,
      },
      {
        path: "/register",
        id: "register",
        element: <Register />,
      },
    ]);
  } else {
    return createBrowserRouter([
      {
        path: "*",
        id: "home",
        element: <Home />,
      },
      {
        path: "/newTicket",
        id: "newTicket",
        element: <NewTicket />,
      },
    ]);
  }
};
