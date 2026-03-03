import { createBrowserRouter } from 'react-router'
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
import Layout from "./layouts/Layout"
import { Signup } from "./routes/sign-up/Signup"
import Top from "./routes/top/Top"
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute"
import Guide from "./routes/guide/Guide"
import OrderProcessGuide from './routes/guide/OrderProcessGuide'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Top />,
      },
      {
        path: "/items",
        element: <Items />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/sign-up",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Signup />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/items/:itemId",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ItemId />,
      },
    ],
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
    path: "/guide",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Guide />,
      },
      {
        path: "/guide/order-process",
        element: <OrderProcessGuide />,
      }
    ]
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
