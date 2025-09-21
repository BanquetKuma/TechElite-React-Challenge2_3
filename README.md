# TechElite React 学習プロジェクト

このプロジェクトは、静的なランディングページをReactコンポーネントに変換し、CSS Modulesでスタイリングを実装し、React Hooksで動的機能を実装する**チャレンジ1-3**を完了した教育用Reactアプリケーションです。

## 📋 プロジェクト概要

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) で作成され、以下のReact、CSS Modules、React Hooksの基本概念を実践的に学習します：
- コンポーネントベースのアーキテクチャ
- Propsとデフォルト値の活用
- JSX記法とベストプラクティス
- コンポーネントの合成と再利用性
- CSS Modulesによるスコープ化されたスタイリング
- モノリシックCSSからコンポーネント単位への分割
- React Hooks（useState、useEffect）による状態管理と副作用処理
- ユーザーインタラクションとレスポンシブ対応の実装

## 🎯 実装完了内容

### チャレンジ1: Reactコンポーネント化
- ✅ モノリシックな`App.jsx`（79行）を6つの再利用可能なReactコンポーネントに分割
- ✅ 全コンポーネントにPropsとデフォルト値を実装
- ✅ Reactのベストプラクティスと命名規則に従った実装
- ✅ 適切なファイル構造と整理
- ✅ 日本語コンテンツの文字エンコーディング問題を修正
- ✅ コード品質向上のための構文チェック機能を実装

### チャレンジ2: CSS Modules実装
- ✅ モノリシックな`App.css`（~200行）を6つのCSS Moduleファイルに分割
- ✅ 全コンポーネントにCSS Modules（`.module.css`）を適用
- ✅ スコープ化されたクラス名による名前衝突の回避
- ✅ グローバルスタイルとコンポーネントスタイルの適切な分離
- ✅ CamelCase命名規則によるCSS-in-JS方式の採用
- ✅ レスポンシブデザインの維持

### チャレンジ3: React Hooks実装
- ✅ **useState Hook**によるハンバーガーメニューの状態管理
- ✅ **useEffect Hook**によるウィンドウリサイズ監視とレスポンシブ対応
- ✅ **クリーンアップ関数**によるメモリリーク防止とリソース管理
- ✅ **動的アイコン変更**（☰ ⇔ ×）による直感的なユーザーフィードバック
- ✅ **イベントリスナー**の適切な登録と解除
- ✅ **三項演算子**による条件付きレンダリングの実装
- ✅ PC/モバイル画面での自動的なメニュー制御

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

### 📁 コンポーネント詳細（CSS Modules対応）

| コンポーネント | ファイル場所 | スタイルファイル | Props | 主要機能 |
|---------------|-------------|-----------------|-------|----------|
| **Header** | `src/components/Header/Header.jsx` | `Header.module.css` | `logoText`, `navItems[]` | **React Hooks対応**ハンバーガーメニュー付きレスポンシブナビゲーション |
| **Hero** | `src/components/Hero/Hero.jsx` | `Hero.module.css` | `title`, `subtitle`, `ctaText`, `ctaLink` | カスタマイズ可能なコールトゥアクションセクション |
| **Features** | `src/components/Features/Features.jsx` | `Features.module.css` | `title`, `features[]` | アイコンと説明付きグリッドレイアウト |
| **Testimonials** | `src/components/Testimonials/Testimonials.jsx` | `Testimonials.module.css` | `title`, `testimonials[]` | お客様レビューカード |
| **Contact** | `src/components/Contact/Contact.jsx` | `Contact.module.css` | `title`, `description`, `email`, `phone` | 連絡先情報表示 |
| **Footer** | `src/components/Footer/Footer.jsx` | `Footer.module.css` | `companyName`, `socialLinks[]` | ソーシャルリンクと企業情報 |

### 🔧 技術実装

#### 適用されたReactの主要概念
1. **関数型コンポーネント**: 全コンポーネントでモダンなReact関数記法を使用
2. **分割代入によるProps**: デフォルト値付きのクリーンなパラメータ抽出
3. **配列マッピング**: リストの動的レンダリング（ナビゲーション、機能、評価）
4. **コンポーネント合成**: 関心の論理的分離
5. **React Hooks**: useState（状態管理）とuseEffect（副作用処理）の実装
6. **条件付きレンダリング**: 三項演算子による動的UI表示
7. **イベントハンドリング**: ユーザーインタラクションの処理

#### 適用されたCSS Modulesの主要概念
1. **スコープ化**: 各コンポーネントのスタイルが他に影響しない独立性
2. **自動クラス名生成**: `Button_button__3kL2x` 形式による名前衝突回避
3. **CamelCase命名**: `nav-links` → `navLinks` でJavaScript親和性向上
4. **グローバル/ローカル分離**: 共通スタイルと個別スタイルの適切な分離

#### 適用されたReact Hooksの主要概念
1. **useState Hook**: メニュー開閉状態の管理とコンポーネント再レンダリング
2. **useEffect Hook**: 副作用（ウィンドウリサイズ監視）の処理と依存関係管理
3. **クリーンアップ関数**: イベントリスナーの適切な解除によるメモリリーク防止
4. **依存関係配列**: 空配列（[]）による初回マウント時のみの実行制御
5. **状態とUIの連動**: 状態変更による自動的なUI更新（宣言的UI）

#### コード品質向上施策
- **構文チェック**: 自動コードレビュー機能の実装
- **一貫したスタイル**: 全コンポーネントで2スペースインデント
- **UTF-8エンコーディング**: 日本語文字の適切な処理
- **インポート整理**: クリーンなES6モジュールインポート

### 📈 成果指標

#### チャレンジ1の成果
- **コード行数削減**: 79 → 25行（メインAppコンポーネントで68%削減）
- **作成コンポーネント数**: 6つの再利用可能コンポーネント
- **実装Props数**: デフォルト値付き15以上の設定可能Props
- **文字エンコーディング問題修正**: 3ファイル（Features, Testimonials, Contact）

#### チャレンジ2の成果
- **CSS分割**: モノリシックな`App.css`（~200行）→ 6つのCSS Moduleファイル + グローバルスタイル（~40行）
- **スタイルスコープ化率**: 100%（全コンポーネントでCSS Modules適用）
- **クラス名衝突リスク**: 0%（自動生成されたユニークなクラス名）
- **保守性向上**: コンポーネントとスタイルの1:1対応関係確立

#### チャレンジ3の成果
- **React Hooks実装**: useState と useEffect の実践的活用
- **動的UI機能**: ハンバーガーメニューの開閉とアイコン変更
- **レスポンシブ対応**: ウィンドウサイズに応じた自動メニュー制御
- **メモリ管理**: クリーンアップ関数によるイベントリスナー適切解除
- **ユーザビリティ向上**: 直感的なアイコンフィードバック（☰ ⇔ ×）
- **パフォーマンス最適化**: 不要な再レンダリングを防ぐ依存関係管理

### 🛠️ 追加開発ツール
- **構文チェック機能**: JavaScriptとJSXの構文検証機能を実装
- **拡張.gitignore**: IDE、OS、一時ファイルの除外設定を追加
- **開発ガイドライン**: エンコーディング問題防止ガイドラインを追加

## 📦 パッケージ管理

このプロジェクトは**pnpm**を使用してパッケージ管理を最適化しています：

### pnpmの利点
- **ストレージ効率**: 複数プロジェクト間でのnode_modules共有
- **高速インストール**: シンボリックリンクによる効率的な依存関係管理
- **厳密性**: phantom dependencyを防ぐ安全な依存関係解決

### 互換性
- **npm/yarn**: 他のパッケージマネージャーとの完全な互換性
- **package.json**: 標準的な設定ファイルを使用
- **CI/CD**: 既存のビルドパイプラインとの互換性を保持

## 利用可能なスクリプト

プロジェクトディレクトリで以下のコマンドを実行できます：

### `pnpm start` または `npm start`

開発モードでアプリを実行します。\
[http://localhost:3000](http://localhost:3000) でブラウザに表示されます。

変更を加えると自動的にページが更新されます。\
コンソールにlintエラーも表示されます。

### `pnpm test` または `npm test`

インタラクティブウォッチモードでテストランナーを起動します。

### `pnpm build` または `npm run build`

本番用にアプリを`build`フォルダにビルドします。\
Reactを本番モードで正しくバンドルし、最高のパフォーマンスになるよう最適化されます。

## 📚 Challenge 3で実装されたReact Hooks詳細

### 🎯 Header.jsxでのHooks実装

#### useState による状態管理
```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```
- **目的**: ハンバーガーメニューの開閉状態を管理
- **初期値**: `false`（メニューは閉じた状態）
- **更新**: `setIsMenuOpen(!isMenuOpen)` でクリック時に状態反転

#### useEffect による副作用処理
```jsx
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```
- **目的**: ウィンドウリサイズを監視してレスポンシブ対応
- **依存関係**: 空配列`[]`により初回マウント時のみ実行
- **クリーンアップ**: コンポーネント削除時にイベントリスナーを解除

#### 動的アイコン変更
```jsx
{isMenuOpen ? '×' : '☰'}
```
- **三項演算子**: 状態に応じてアイコンを動的に変更
- **ユーザビリティ**: 視覚的フィードバックによる操作性向上

### 🎓 学習成果

Challenge 3の完了により、以下のReact Hooksの概念を実践的に習得：

1. **状態管理**: useStateによるコンポーネント内状態の制御
2. **副作用処理**: useEffectによるブラウザAPIとの連携
3. **リソース管理**: クリーンアップ関数によるメモリリーク防止
4. **レスポンシブ対応**: JavaScript によるウィンドウサイズ監視
5. **宣言的UI**: 状態変更による自動的なUI更新

## 🚀 次のステップ（Challenge 4）

- React Hook Form を使用したフォーム処理の実装
- バリデーション機能の追加
- より高度なユーザーインタラクションの実装

## 学習リソース

- [React公式ドキュメント](https://reactjs.org/)
- [React Hooks公式ガイド](https://reactjs.org/docs/hooks-intro.html)
- [useState Hook](https://reactjs.org/docs/hooks-state.html)
- [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)