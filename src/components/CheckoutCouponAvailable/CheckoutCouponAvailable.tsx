import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutCouponAvailable.module.scss";

export function CheckoutCouponAvailable() {

  return (
    <div className={styles.wrapper}>
      <SectionTitle text="ご利用可能なクーポン" />
      <div>利用可能クーポン 200円</div>
      <div>利用可能クーポン 1,000円</div>
    </div>
  );
}
