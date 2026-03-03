import { Link } from 'react-router';
import { UserGuideSidebar } from '../UserGuideSidebar/UserGuideSidebar';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './UserGuide.module.scss';
import { userGuide } from '../../constants/guide';

export function UserGuide() {
  return (
    <div className={styles.guide}>
      <SectionTitle text="はじめての方へ" />
      <div className={styles.guide__content}>
        <UserGuideSidebar />
        <div className={styles.guide__content__main}>
          {userGuide.map(({ id, title, list }) => (
            <section key={id} className={styles.guide__section}>
              <SectionTitle text={title} id={id} />
              {list.map((item) => (
                <div key={item.id} id={item.id} className={styles.guide__section__item}>
                  <h4 className={styles.guide__section__item__title}>{item.text}</h4>
                  <GuideContent sectionId={item.id} />
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function GuideContent({ sectionId }: { sectionId: string }) {
  if (sectionId === 'contact') {
    return (
      <div className={styles.guide__content__text}>
        ご不明な点がございましたら、
        <Link to="/contact" className={styles.guide__contact__link}>
          お問い合わせページ
        </Link>
        よりお気軽にご連絡ください。
      </div>
    );
  }
  const content = guideContents[sectionId as keyof typeof guideContents];
  return <div className={styles.guide__content__text}>{content}</div>;
}

const guideContents: Record<string, string> = {
  flow: `当サイトでのご注文の流れをご説明します。

1. 商品をカートに追加
お気に入りの商品をカートに追加してください。

2. カートの確認
カート内の商品・数量・お届け先をご確認ください。

3. お支払い方法の選択
クレジットカード、銀行振込などからお選びいただけます。

4. ご注文の確定
内容をご確認の上、ご注文を確定してください。

5. 注文確認メールの送付
ご注文確定後、確認メールをお送りします。`,
  receipt: `領収書・納品書について

【領収書】
ご希望の場合は、お支払い完了後にお届けいたします。ご注文時の備考欄に「領収書希望」とご記入ください。

【納品書】
商品お届け時に同梱いたします。`,
  security: `セキュリティについて

当サイトでは、お客様の個人情報を保護するため、SSL（Secure Socket Layer）による暗号化通信を採用しています。クレジットカード情報など、重要なデータは暗号化されて送信されます。`,
  gift: `ギフト対応について

ギフト包装をご希望の場合は、ご注文時の備考欄にその旨をご記入ください。のし紙のご希望がある場合もあわせてお知らせください。`,
  mail: `メールについて

ご注文確定後、以下のメールをお送りします。
・注文確認メール
・発送完了メール

メールが届かない場合は、迷惑メールフォルダをご確認いただくか、お問い合わせください。`,
  method: `お支払い方法について

【クレジットカード】
VISA、Mastercard、JCB、American Expressをご利用いただけます。

【銀行振込】
ご注文後、7日以内にお振込みください。振込手数料はお客様のご負担となります。

【代金引換】
商品お届け時に代金をお支払いください。代引手数料が別途かかります。`,
  shipping: `商品の発送について

【発送時期】
ご注文確定後、通常3〜7営業日以内に発送いたします。在庫状況により変動する場合がございます。

【配送業者】
ヤマト運輸、佐川急便など、地域に応じて最適な配送業者でお届けします。`,
  amount: `送料について

【送料】
購入金額に応じて送料が異なります。カート画面でご確認ください。

【送料無料】
一定金額以上のご購入で送料無料となります。`,
  return: `返品・返金について

【返品期限】
商品到着後8日以内にご連絡ください。

【返品条件】
未使用・未開封の商品に限り返品をお受けいたします。

【返金】
返品確認後、1〜2週間程度でご指定の口座へお振込みいたします。`,
  register: `会員登録について

会員登録により、以下の特典をご利用いただけます。
・注文履歴の確認
・お届け先の登録
・お気に入り商品の保存

新規登録は無料です。`,
  login: `ログインID・パスワードについて

【パスワードを忘れた場合】
ログインページの「パスワードをお忘れの方」より、再設定メールをお送りします。

【ログインできない場合】
メールアドレスとパスワードに誤りがないかご確認ください。`,
  change: `登録情報の変更・退会について

【登録情報の変更】
マイページより、お届け先やメールアドレスなどの変更が可能です。

【退会】
マイページの設定より退会手続きが可能です。退会後も注文履歴の確認は一定期間可能です。`,
  environment: `利用環境について

【推奨環境】
・Windows: Microsoft Edge、Google Chrome（最新版）
・Mac: Safari、Google Chrome（最新版）
・スマートフォン: iOS Safari、Android Chrome（最新版）

JavaScriptを有効にしてお使いください。`,
};
