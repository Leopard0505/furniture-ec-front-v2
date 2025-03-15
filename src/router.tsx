import { createBrowserRouter } from "react-router-dom"
import App from "./routes/App"
import Login from "./routes/login/Login"
import Items from "./routes/items/Items"
import ItemId from "./routes/items/itemId/ItemId"
import Contact from "./routes/contact/Contact"
import Cart from "./routes/cart/Cart"
import Purchase from "./routes/purchase/Purchase"
import Complete from "./routes/purchase/complete/Complete"
import Me from "./routes/me/Me"
import Orders from "./routes/me/orders/Orders"
import OrderId from "./routes/me/orders/orderId/OrderId"
import Layout from "./layouts/mainLayout/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <App />,
      },
      {
        path: "/items",
        element: <Items />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/items/:itemId",
    element: <ItemId />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
    children: [
      {
        path: "/purchase/complete",
        element: <Complete />,
      }
    ],
  },
  {
    path: "/me",
    element: <Me />,
    children: [
      {
        path: "/me/orders",
        element: <Orders />,
        children: [
          {
            path: "/me/orders/:orderId",
            element: <OrderId />,
          }
        ],
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>Error Page</div>
  }
])
