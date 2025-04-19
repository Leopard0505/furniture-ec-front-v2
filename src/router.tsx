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
import { MeFavorites } from './routes/me/Favorites'
import { Checkout } from './routes/Checkout/Checkout'

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
        children: [
          {
            index: true,
            element: <Items />,
          },
          {
            path: "/items/:itemId",
            element: <ItemId />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/me",
        children: [
          {
            index: true,
            element: <Me />,
          },
          {
            path: "/me/orders",
            children: [
              {
                index: true,
                element: <Orders />,
              },
              {
                path: "/me/orders/:orderId",
                element: <OrderId />,
              }
            ],
          },
          {
            path: "/me/favorites",
            element: <MeFavorites />,
          },
        ],
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
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>Error Page</div>
  }
])
