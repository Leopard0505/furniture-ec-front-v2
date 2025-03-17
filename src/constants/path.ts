export const PATH = {
  TOP: () => "/",
  ITEMS: () => "/items",
  LOGIN: () => "/login",
  SIGNUP: () => "/sign-up",
  ITEM_ID: (id: string) => `/items/${id}`,
  CART: () => "/cart",
  PURCHASE: () => "/purchase",
  PURCHASE_COMPLETE: () => "/purchase/complete",
  ME: () => "/me",
  ME_ORDERS: () => "/me/orders",
  ME_ORDERS_ORDER_ID: (id: string) => `/me/orders/${id}`,
  CONTACT: () => "/contact",
};
