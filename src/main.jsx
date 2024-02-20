import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contract from "./pages/Contract";
import Gallery from "./pages/Gallery";
import Plans from "./pages/Plan";
import Trainers from "./pages/Trainers";
import Notfound from "./components/Notfound";
import ProgramDetails from "./components/ProgramDetails";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contract", element: <Contract /> },
      { path: "gallery", element: <Gallery/> },
      { path: "plans", element: <Plans /> },
      { path: "trainers/:name", element: <Trainers /> },
      { path: "program-details/:id", element: <ProgramDetails /> },
      { path: "*", element: <Notfound /> }, // 404 route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
