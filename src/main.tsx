import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import { Home } from "./pages/Home/index.tsx";
import { Cart } from "./pages/Cart/index.tsx";
import { ErroPages } from "./pages/ErroPages.tsx";
import { Success } from "./pages/Success/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPages />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId/success",
        element: <Success />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
