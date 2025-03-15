# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# API 設計

| 内容                   | メソッド | URL                 | 認証 |
| ---------------------- | -------- | ------------------- | ---- |
| ログイン               | POST     | /api/login          |      |
| ログアウト             | POST     | /api/logout         | ◯    |
| ユーザー登録           | POST     | /api/register       | ◯    |
| カテゴリ一覧           | GET      | /api/categories     |      |
| 商品一覧（ランキング） | GET      | /api/items/ranking  |      |
| 商品一覧（新着）       | GET      | /api/items/new      |      |
| 商品詳細               | GET      | /api/items/{itemID} |      |
| カート内容             | GET      | /api/cart           | ◯    |
| 商品をカートに追加     | POST     | /api/cart           | ◯    |
| 商品をカートから削除   | DELETE   | /api/cart/{itemID}  | ◯    |
| 購入                   | POST     | /api/purchase       | ◯    |
|                        |          |                     |      |

# 画面設計

| 内容                       | URL                  |
| -------------------------- | -------------------- |
| ログイン　　　　　　　　　 | /login               |
| ユーザー登録　　　　　     | /sign-up             |
| トップ                     | /                    |
| 商品詳細                   | /items/{itemID}      |
| カート                     | /cart                |
| 購入                       | /purchase            |
| 購入完了                   | /purchase/complete   |
| マイページ                 | /me                  |
| 注文履歴                   | /me/orders           |
| 注文詳細                   | /me/orders/{orderID} |
| お問い合わせ               | /contact             |
