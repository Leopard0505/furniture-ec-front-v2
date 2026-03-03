---
name: github-issue-to-commit
description: Reads requirements from a GitHub issue, plans implementation, executes the work, and commits. Use when the user asks to implement a GitHub issue, work on an issue, or mentions an issue number/URL to implement.
---

# GitHub Issue → 実装 → コミット

GitHub Issue から要件を読み取り、計画を立て、実装し、コミットまで実行するワークフロー。

## 前提

- GitHub MCP (user-github) の `get_issue` を使用
- ワークスペースの feature-planning / task-implementation ルールに準拠

## ワークフロー

```
Task Progress:
- [ ] Step 1: Issue を取得して要件を把握
- [ ] Step 2: 計画を作成
- [ ] Step 3: 実装
- [ ] Step 4: 検証・コミット
```

### Step 1: Issue を取得して要件を把握

1. **Issue の特定**
   - ユーザーが Issue 番号を指定 → その番号を使用
   - URL 指定（例: `https://github.com/owner/repo/issues/123`）→ 番号を抽出
   - 未指定の場合はユーザーに確認

2. **owner / repo の取得**
   - 現在のワークスペースの git remote から取得: `git remote get-url origin`
   - 例: `git@github.com:Leopard0505/furniture-ec-front-v2.git` → owner: `Leopard0505`, repo: `furniture-ec-front-v2`

3. **Issue 取得**
   - `call_mcp_tool` で `user-github` の `get_issue` を呼ぶ
   - 引数: `owner`, `repo`, `issue_number`

4. **要件の整理**
   - タイトル、本文、ラベル、コメントから要件・受け入れ条件を抽出

### Step 2: 計画を作成

feature-planning ルールに従い、以下を含む計画を提示:

| 項目 | 内容 |
|------|------|
| 目的 | Issue で求められていること |
| 対象 | 影響するファイル・コンポーネント |
| 実装ステップ | 1, 2, 3... の順序 |
| 変更対象 | 新規・修正ファイル一覧 |
| 受け入れ条件 | 完了の基準 |

大規模な場合はユーザーに確認を求める。

### Step 3: 実装

task-implementation ルールに従う:

1. Todo リストで進捗管理
2. 計画のステップに沿って実装
3. 各ステップ完了時に Lint 確認 (`ReadLints`)
4. 方針変更時は計画を更新してから続行

### Step 4: 検証・コミット

1. **受け入れ条件**を満たしているか確認
2. **`/commit` を実行**してコミット（変更がある場合）
3. コミットメッセージは Issue を参照: `fix: #123 〇〇を実装` など

## MCP 呼び出し例

```json
{
  "server": "user-github",
  "toolName": "get_issue",
  "arguments": {
    "owner": "Leopard0505",
    "repo": "furniture-ec-front-v2",
    "issue_number": 123
  }
}
```

## ブランチ

Issue 番号に応じたブランチが既にある場合（例: `feature/ISSUE-123`）は、そのブランチで作業。なければ `develop` から `feature/ISSUE-123` を作成して作業。
