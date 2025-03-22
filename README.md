<a id="top"></a>

# 家具 EC サイト (Furniture EC)

[![lint](https://github.com/Leopard0505/furniture-ec-front-v2/actions/workflows/lint.yml/badge.svg)](https://github.com/Leopard0505/furniture-ec-front-v2/actions/workflows/lint.yml)
[![Build](https://github.com/Leopard0505/furniture-ec-front-v2/actions/workflows/build.yml/badge.svg)](https://github.com/Leopard0505/furniture-ec-front-v2/actions/workflows/build.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF.svg)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-8.0.0-4B32C3.svg)](https://eslint.org/)
[![Coverage Status](https://coveralls.io/repos/github/Leopard0505/furniture-ec-front-v2/badge.svg?branch=main)](https://coveralls.io/github/Leopard0505/furniture-ec-front-v2?branch=main)
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Leopard0505_furniture-ec-front-v2&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Leopard0505_furniture-ec-front-v2&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Leopard0505_furniture-ec-front-v2&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Leopard0505_furniture-ec-front-v2&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Leopard0505_furniture-ec-front-v2&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Leopard0505_furniture-ec-front-v2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## プロジェクト概要

このプロジェクトは、React + TypeScript + Vite を使用して構築された家具の EC サイトです。

バックエンドは [furniture-ec-api](https://github.com/Leopard0505/furniture-ec-api) を参照してください。

## 技術スタック

- React 18
- TypeScript
- Vite
- ESLint

## 開発環境のセットアップ

### 必要条件

- Node.js 18.0.0 以上
- npm 9.0.0 以上

### インストール

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# Lint
npm run lint

# ビルド
npm run build
```

## CI/CD

### 継続的インテグレーション (CI)

GitHub Actions を使用して以下のチェックを自動実行しています：

- コードのビルド
- 型チェック
- リントチェック

## 開発ガイドライン

最後にチケットの起票方法、ブランチ戦略、PR の作成方法など、コード以外の開発ルールを記載しておきましょう。

### 設計資料

- [プロジェクト構造](ARCHITECTURE.md#プロジェクト構造)
- [API 仕様](ARCHITECTURE.md#api-仕様)
- [画面構成](ARCHITECTURE.md#画面構成)
- [パフォーマンス最適化](ARCHITECTURE.md#パフォーマンス最適化)

### 開発資料

- [コーディング規約](DEVELOPERS.md#コーディング規約)
- [ブランチ戦略](DEVELOPERS.md#ブランチ戦略)
- [コミットメッセージ](DEVELOPERS.md#コミットメッセージ)
- [Issue の作成方法](DEVELOPERS.md#issue-の作成方法)
- [PR の作成方法](DEVELOPERS.md#pr-の作成方法)

### サイトでバグを見つけたら

バグを発見した場合は、以下の手順で報告をお願いします：

1. バグの再現手順

   - 具体的な操作手順
   - 発生する状況の詳細な説明
   - 再現頻度（毎回/時々/特定の条件下でのみ）

2. 期待される動作

   - 本来あるべき動作の説明
   - 正しい動作の例

3. 実際の動作

   - 現在発生している問題の詳細
   - エラーメッセージ（表示される場合）

4. 環境情報

   - 使用しているブラウザとバージョン
   - OS の種類とバージョン
   - デバイスの種類（PC/スマートフォン/タブレット）

5. スクリーンショット

   - 問題が発生している画面のキャプチャ
   - 可能であれば、問題の前後の状態も含める

6. その他の情報
   - 問題が発生した日時
   - 特定の商品や機能に関連する問題の場合、その詳細

> [!NOTE]
> これらの情報を[Issue](https://github.com/Leopard0505/furniture-ec-front-v2/issues)に記載して報告してください。
> 報告する際は[Issue の作成方法](DEVELOPERS.md#issue-の作成方法)を参考にしてください。

### よくある質問（FAQ）

1. 開発環境のセットアップについて

   - Node.js のバージョンが合わない場合の対処方法
   - 依存パッケージのインストールでエラーが発生した場合の対処方法
   - 開発サーバーが起動しない場合の確認事項

2. デプロイについて

   - デプロイの手順と確認事項
   - 環境変数の設定方法
   - デプロイ後の動作確認方法

3. テストについて

   - テストの実行方法
   - テストカバレッジの確認方法
   - E2E テストの実行環境

## ライセンス

このプロジェクトは[MIT ライセンス](LICENSE)の下で公開されています。

<p align="right">(<a href="#top">トップへ</a>)</p>
