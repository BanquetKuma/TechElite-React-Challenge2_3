# TechElite React 学習プロジェクト

このプロジェクトは、静的なランディングページをReactコンポーネントに変換する**チャレンジ1**の一部として作成された教育用Reactアプリケーションです。

## 📋 プロジェクト概要

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) で作成され、以下のReactの基本概念を実践的に学習します：
- コンポーネントベースのアーキテクチャ
- Propsとデフォルト値の活用
- JSX記法とベストプラクティス
- コンポーネントの合成と再利用性

## 🎯 チャレンジ1の実装内容

### 完了した作業
- ✅ モノリシックな`App.jsx`（79行）を6つの再利用可能なReactコンポーネントに分割
- ✅ 全コンポーネントにPropsとデフォルト値を実装
- ✅ Reactのベストプラクティスと命名規則に従った実装
- ✅ 適切なファイル構造と整理
- ✅ 日本語コンテンツの文字エンコーディング問題を修正
- ✅ コード品質向上のための構文チェックエージェントを作成

### コンポーネント構成

#### 変更前の構造
```
App.jsx (79行) - 全てのHTMLコンテンツを含むモノリシックなコンポーネント
```

#### 変更後の構造
```
App.jsx (25行) - クリーンなコンポーネント合成
├── Header.jsx - 設定可能なロゴとメニュー項目を持つナビゲーション
├── Hero.jsx - カスタマイズ可能なコンテンツを持つメインセクション
├── Features.jsx - アイコン対応の機能グリッド
├── Testimonials.jsx - お客様の声カルーセル
├── Contact.jsx - 問い合わせフォームセクション
└── Footer.jsx - ソーシャルリンクと企業情報を含むフッター
```

### 📁 コンポーネント詳細

| コンポーネント | ファイル場所 | Props | 主要機能 |
|---------------|-------------|-------|----------|
| **Header** | `src/components/Header/Header.jsx` | `logoText`, `navItems[]` | ハンバーガーメニュー付きレスポンシブナビゲーション |
| **Hero** | `src/components/Hero/Hero.jsx` | `title`, `subtitle`, `ctaText`, `ctaLink` | カスタマイズ可能なコールトゥアクションセクション |
| **Features** | `src/components/Features/Features.jsx` | `title`, `features[]` | アイコンと説明付きグリッドレイアウト |
| **Testimonials** | `src/components/Testimonials/Testimonials.jsx` | `title`, `testimonials[]` | お客様レビューカード |
| **Contact** | `src/components/Contact/Contact.jsx` | `title`, `description`, `email`, `phone` | 連絡先情報表示 |
| **Footer** | `src/components/Footer/Footer.jsx` | `companyName`, `socialLinks[]` | ソーシャルリンクと企業情報 |

### 🔧 技術実装

#### 適用されたReactの主要概念
1. **関数型コンポーネント**: 全コンポーネントでモダンなReact関数記法を使用
2. **分割代入によるProps**: デフォルト値付きのクリーンなパラメータ抽出
3. **配列マッピング**: リストの動的レンダリング（ナビゲーション、機能、評価）
4. **コンポーネント合成**: 関心の論理的分離

#### コード品質向上施策
- **構文チェック**: 自動コードレビュー用カスタムエージェント設定
- **一貫したスタイル**: 全コンポーネントで2スペースインデント
- **UTF-8エンコーディング**: 日本語文字の適切な処理
- **インポート整理**: クリーンなES6モジュールインポート

### 📈 成果指標
- **コード行数削減**: 79 → 25行（メインAppコンポーネントで68%削減）
- **作成コンポーネント数**: 6つの再利用可能コンポーネント
- **実装Props数**: デフォルト値付き15以上の設定可能Props
- **文字エンコーディング問題修正**: 3ファイル（Features, Testimonials, Contact）

### 🛠️ 追加開発ツール
- **スクリプト構文チェックエージェント**: `/.claude/agents/script-syntax-checker.md`
- **拡張.gitignore**: IDE、OS、一時ファイルの除外設定を追加
- **CLAUDE.md更新**: エンコーディング問題防止ガイドラインを追加

## 利用可能なスクリプト

プロジェクトディレクトリで以下のコマンドを実行できます：

### `npm start`

開発モードでアプリを実行します。\
[http://localhost:3000](http://localhost:3000) でブラウザに表示されます。

変更を加えると自動的にページが更新されます。\
コンソールにlintエラーも表示されます。

### `npm test`

インタラクティブウォッチモードでテストランナーを起動します。

### `npm run build`

本番用にアプリを`build`フォルダにビルドします。\
Reactを本番モードで正しくバンドルし、最高のパフォーマンスになるよう最適化されます。

## 学習リソース

Reactについて詳しくは [React公式ドキュメント](https://reactjs.org/) をご覧ください。