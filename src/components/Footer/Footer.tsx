import { memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
import styles from './Footer.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「型定義を専用ディレクトリに分けて管理すると見通しがよい」
// Phase 1: 保守性重視の1ファイル構造で、型定義の一元管理を実現
import { FooterProps } from '../../types';

// 📚 学習ポイント：シンプルから複雑への学習プログレッション
// フッターはシンプルな文字列Propsのみで、TypeScriptの基礎を理解しやすい
function Footer({
  year = "2023",
  companyName = "My Stylish LP",
  rightsText = "All rights reserved."
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="section-container">
        {/* 📚 学習ポイント：型安全な文字列補間 */}
        {/* year, companyName, rightsTextはall string型であることが保証されている */}
        &copy; {year} {companyName}. {rightsText}
      </div>
    </footer>
  );
}

// 📚 Challenge 3 学習ポイント：React.memoの最もシンプルな使用例
//
// 【Footerの特徴】
// - 3つのstring型のpropsのみを受け取る（year, companyName, rightsText）
// - 状態（state）を持たない
// - イベントハンドラーも持たない
// - 完全に静的な表示コンポーネント
//
// 【なぜFooterは最適な学習教材？】
// 1. シンプル：複雑な処理がないので、React.memoの効果だけに集中できる
// 2. 明確：propsが変わらない = 再レンダリング不要、という関係が分かりやすい
// 3. 効果的：親（App.tsx）の再レンダリングを完全にスキップできる
//
// 【React.memoの動作（Footerの場合）】
// 1. App.tsx が再レンダリングされる
// 2. React.memo が前回のpropsと今回のpropsを比較
//    - 前回: { year: "2023", companyName: "My Stylish LP", rightsText: "..." }
//    - 今回: { year: "2023", companyName: "My Stylish LP", rightsText: "..." }
// 3. 同じ！ → Footerの再レンダリングをスキップ ✅
//
// 【理論ファイルより引用】
// "React.memoは、関数コンポーネントをメモ化する高階コンポーネントで、
//  同じpropsが渡された場合に再レンダリングをスキップします。"
//
// 【メモ化の効果】
// - CPU使用率の削減
// - ユーザー体験の向上
// - 特にページ遷移やフォーム入力時のパフォーマンス改善
//
// 【Headerとの比較】
// - Header: React.memo + useCallback（イベントハンドラーあり）
// - Footer: React.memo のみ（イベントハンドラーなし）
// ↓ 段階的学習：シンプルから複雑へ
export default memo(Footer);