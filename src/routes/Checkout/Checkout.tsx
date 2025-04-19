import { CheckoutCouponAvailable } from "../../components/CheckoutCouponAvailable/CheckoutCouponAvailable";
import { CheckoutDeliveryAddress } from "../../components/CheckoutDeliveryAddress/CheckoutDeliveryAddress";
import { CheckoutDeliveryDateTime } from "../../components/CheckoutDeliveryDateTime/CheckoutDeliveryDateTime";
import { CheckoutPaymentMethod } from "../../components/CheckoutPaymentMethod/CheckoutPaymentMethod";
import { CheckoutPointAvailable } from "../../components/CheckoutPointAvailable/CheckoutPointAvailable";

export function Checkout() {
  return (
    <div>
      <CheckoutDeliveryAddress />
      <CheckoutDeliveryDateTime />
      <CheckoutPaymentMethod />
      <CheckoutPointAvailable />
      <CheckoutCouponAvailable />
    </div>
  );
}
