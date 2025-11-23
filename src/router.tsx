import { createBrowserRouter } from 'react-router'
import Login from "./features/auth/routes/Login"
import Items from "./features/items/routes/Items"
import ItemId from "./features/items/routes/itemId/ItemId"
import Contact from "./features/shared/routes/Contact"
import Cart from "./features/cart/routes/Cart"
import Me from "./features/orders/routes/Me"
import Orders from "./features/orders/routes/Orders"
import OrderId from "./features/orders/routes/orderId/OrderId"
import Layout from "./features/layout/layouts/Layout"
import { Signup } from "./features/auth/routes/sign-up/Signup"
import Top from "./features/items/routes/top/Top"
import { ProtectedRoute } from "./features/shared/components/ProtectedRoute/ProtectedRoute"
import { MeFavorites } from './features/favorite/routes/Favorites'
import { Checkout } from './features/checkout/routes/Checkout'
import { CheckoutComplete } from './features/checkout/routes/CheckoutComplete'

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
        children: [
          {
            index: true,
            element: <Checkout />,
          },
          {
            path: "/checkout/complete",
            element: <CheckoutComplete />,
          }
        ],
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
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>Error Page</div>
  }
])
