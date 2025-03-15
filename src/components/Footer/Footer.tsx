import styles from './Footer.module.scss'
import { FooterCopyright } from '../FooterCopyright/FooterCopyright';
import { FooterMenu } from '../FooterMenu/FooterMenu';

export default function Footer() {

  return (
    <footer className={styles.footer}>
        {/* <Announce /> */}
        {/* <Notice /> */}
        <section className={styles.bussinessHours}>
          <p className={styles.bussinessHoursTitle}>営業時間のご案内</p>
          <p className={styles.bussinessHoursText}>ご注文：365日24時間いつでもOK！！</p>
        </section>
        <FooterMenu />
        <FooterCopyright />
      </footer>
  )
}
