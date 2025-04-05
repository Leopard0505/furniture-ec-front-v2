interface UserGuideItem {
  id: string;
  to: string;
  text: string;
}

export interface UserGuide {
  id: string;
  title: string;
  list: UserGuideItem[];
}

export const userGuide: UserGuide[] = [
  {
    id: "order",
    title: "ご注文について",
    list: [
      { id: "flow", to: "/guide/order#flow", text: "商品の注文の流れについて" },
      {
        id: "receipt",
        to: "/guide/order#receipt",
        text: "領収書・納品書について",
      },
      {
        id: "security",
        to: "/guide/order#security",
        text: "セキュリティについて",
      },
      { id: "gift", to: "/guide/order#gift", text: "ギフト対応について" },
      { id: "mail", to: "/guide/order#mail", text: "メールについて" },
    ],
  },
  {
    id: "payment",
    title: "お支払いについて",
    list: [
      {
        id: "method",
        to: "/guide/payment#method",
        text: "お支払い方法について",
      },
    ],
  },
  {
    id: "delivery",
    title: "お届けについて",
    list: [
      {
        id: "shipping",
        to: "/guide/delivery#shipping",
        text: "商品の発送について",
      },
      { id: "amount", to: "/guide/delivery#amount", text: "送料について" },
    ],
  },
  {
    id: "return",
    title: "アフターサービスについて",
    list: [
      {
        id: "return",
        to: "/guide/after-service#return",
        text: "返品・返金について",
      },
    ],
  },
  {
    id: "account",
    title: "新規登録について",
    list: [
      {
        id: "register",
        to: "/guide/account#register",
        text: "会員登録について",
      },
      {
        id: "login",
        to: "/guide/account#login",
        text: "ログインID・パスワードについて",
      },
      {
        id: "change",
        to: "/guide/account#change",
        text: "登録情報の変更・退会について",
      },
    ],
  },
  {
    id: "other",
    title: "その他",
    list: [
      {
        id: "environment",
        to: "/guide/other#environment",
        text: "利用環境について",
      },
    ],
  },
  {
    id: "contact",
    title: "お問い合わせ",
    list: [
      { id: "contact", to: "/guide/contact#contact", text: "お問い合わせ" },
    ],
  },
];
