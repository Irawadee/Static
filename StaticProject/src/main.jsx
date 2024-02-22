import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Why can not import all at once from ./Pages

import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Booking from "./Pages/Booking.jsx";
import BookingConfirm from "./Pages/BookingConfirm.jsx";
import Error from "./Pages/Error.jsx";
import NotFound from "./Pages/NotFound.jsx";

// The command set to set routers among websites.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "bookingconfirm",
    element: <BookingConfirm />,
  },
  {
    path: "notfound",
    element: <NotFound />,
  },
  {
    path: "error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
