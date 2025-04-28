import { CartSummary } from "../../components/CartSummary/CartSummary";
import { CheckoutCouponAvailable } from "../../components/CheckoutCouponAvailable/CheckoutCouponAvailable";
import { CheckoutDeliveryAddress } from "../../components/CheckoutDeliveryAddress/CheckoutDeliveryAddress";
import { CheckoutDeliveryDateTime } from "../../components/CheckoutDeliveryDateTime/CheckoutDeliveryDateTime";
import { CheckoutPaymentMethod } from "../../components/CheckoutPaymentMethod/CheckoutPaymentMethod";
import { CheckoutPointAvailable } from "../../components/CheckoutPointAvailable/CheckoutPointAvailable";
import { PATH } from "../../constants/path";
import styles from "./Checkout.module.scss";

export function Checkout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CheckoutDeliveryAddress />
        <CheckoutDeliveryDateTime />
        <CheckoutPaymentMethod />
        <CheckoutPointAvailable />
        <CheckoutCouponAvailable />
      </div>
      <div className={styles.summary}>
        <CartSummary to={PATH.CHECKOUT_COMPLETE()} buttonText="注文を確定する" />
      </div>
    </div>
  );
}
