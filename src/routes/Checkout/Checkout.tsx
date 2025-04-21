import { CartSummary } from "../../components/CartSummary/CartSummary";
import { CheckoutCouponAvailable } from "../../components/CheckoutCouponAvailable/CheckoutCouponAvailable";
import { CheckoutDeliveryAddress } from "../../components/CheckoutDeliveryAddress/CheckoutDeliveryAddress";
import { CheckoutDeliveryDateTime } from "../../components/CheckoutDeliveryDateTime/CheckoutDeliveryDateTime";
import { CheckoutPaymentMethod } from "../../components/CheckoutPaymentMethod/CheckoutPaymentMethod";
import { CheckoutPointAvailable } from "../../components/CheckoutPointAvailable/CheckoutPointAvailable";
import styles from "./Checkout.module.scss";

export function Checkout() {
  return (
    <div className={styles.wrapper}>
      <div>
        <CheckoutDeliveryAddress />
        <CheckoutDeliveryDateTime />
        <CheckoutPaymentMethod />
        <CheckoutPointAvailable />
        <CheckoutCouponAvailable />
      </div>
      <div className={styles.summary}>
        <CartSummary />
      </div>
    </div>
  );
}
