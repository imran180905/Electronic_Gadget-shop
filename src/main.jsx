import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/Pages/About";
import { Cart } from "./Components/Pages/Cart";
import ErrorPage from "./Components/Pages/Error";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import "./index.css";
import { productsAndCartData } from "./loaders/getCart&ProductData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        loader: () => fetch("products.json"),
      },
      {
        path: "cart",
        element: <Cart />,
        loader: productsAndCartData,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
