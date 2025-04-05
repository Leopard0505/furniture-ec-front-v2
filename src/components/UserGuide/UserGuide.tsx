
import { UserGuideSidebar } from '../UserGuideSidebar/UserGuideSidebar';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './UserGuide.module.scss';
import { LinkList } from '../LinkList/LinkList';
import { userGuide } from '../../constants/guide';

export function UserGuide() {

  return (
    <div className={styles.guide}>
      <SectionTitle text="はじめての方へ" />
      <div className={styles.guide__content}>
        <UserGuideSidebar />
        <div className={styles.guide__content__main}>
          {userGuide.map(({ id, title, list }) => (
            <div key={id}>
              <div id={id}></div>
              <SectionTitle text={title} />
              <LinkList className={styles.guide__content__main__link__list} items={list} />
            </div>
          ))}

          <SectionTitle text="ご注文について" id='flow' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "/guide/order#flow", to: "/guide/order#flow", text: "商品の注文の流れについて" },
            { id: "/guide/order#receipt", to: "/guide/order#receipt", text: "領収書・納品書について" },
            { id: "/guide/order#security", to: "/guide/order#security", text: "セキュリティについて" },
            { id: "/guide/order#gift", to: "/guide/order#gift", text: "ギフト対応について" },
            { id: "/guide/order#mail", to: "/guide/order#mail", text: "メールについて" }
          ]} />
          <SectionTitle text="お支払いについて" id='receipt' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "/guide/payment#method", to: "/guide/payment#method", text: "お支払い方法について" }
          ]} />
          <SectionTitle text="お届けについて" id='security' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "1", to: "/guide/order#flow", text: "商品の注文の流れについて" },
            { id: "2", to: "/guide/order#receipt", text: "領収書・納品書について" },
            { id: "3", to: "/guide/order#security", text: "セキュリティについて" },
            { id: "4", to: "/guide/order#gift", text: "ギフト対応について" },
            { id: "5", to: "/guide/order#mail", text: "メールについて" }
          ]} />
          <SectionTitle text="アフターサービスについて" id='gift' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "1", to: "/guide/order#flow", text: "商品の注文の流れについて" },
            { id: "2", to: "/guide/order#receipt", text: "領収書・納品書について" },
            { id: "3", to: "/guide/order#security", text: "セキュリティについて" },
            { id: "4", to: "/guide/order#gift", text: "ギフト対応について" },
            { id: "5", to: "/guide/order#mail", text: "メールについて" }
          ]} />
          <SectionTitle text="新規登録について" id='mail' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "1", to: "/guide/order#flow", text: "商品の注文の流れについて" },
            { id: "2", to: "/guide/order#receipt", text: "領収書・納品書について" },
            { id: "3", to: "/guide/order#security", text: "セキュリティについて" },
            { id: "4", to: "/guide/order#gift", text: "ギフト対応について" },
            { id: "5", to: "/guide/order#mail", text: "メールについて" }
          ]} />
          <SectionTitle text="その他" id='mail' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "1", to: "/guide/order#flow", text: "商品の注文の流れについて" },
            { id: "2", to: "/guide/order#receipt", text: "領収書・納品書について" },
            { id: "3", to: "/guide/order#security", text: "セキュリティについて" },
            { id: "4", to: "/guide/order#gift", text: "ギフト対応について" },
            { id: "5", to: "/guide/order#mail", text: "メールについて" }
          ]} />
          <SectionTitle text="お問い合わせ" id='mail' />
          <LinkList className={styles.guide__content__main__link__list} items={[
            { id: "1", to: "/guide/contact", text: "お問い合わせ" }
          ]} />
        </div>
      </div>
    </div>
  )
}
