import { memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
import styles from './Hero.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「Props の型定義で再利用性・保守性が向上」
// Phase 1: 保守性重視の1ファイル構造で、型定義の一元管理を実現
import { HeroProps } from '../../types';

// 📚 学習ポイント：オプショナルプロパティとデフォルト値の関係
// ?付きのプロパティは「渡されない可能性がある」ことを意味
// デフォルト値を設定することで、コンポーネントの再利用性が向上
function Hero({
  title = "新しい体験をあなたに",
  subtitle = "革新的な製品で、あなたの日常をより豊かに、より便利に。",
  ctaText = "今すぐ体験する",
  ctaLink = "#contact"
}: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className="section-container">
        {/* 📚 学習ポイント：型安全性の恩恵 */}
        {/* titleはstring型であることが保証されているため、安全に使用可能 */}
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{subtitle}</p>
        <a href={ctaLink} className={styles.ctaButton}>{ctaText}</a>
      </div>
    </section>
  );
}

// 📚 Challenge 3 学習ポイント：propsを持つコンポーネントのメモ化
//
// 【Heroの特徴】
// - 4つのpropsを受け取る（title, subtitle, ctaText, ctaLink）
// - 全てのpropsにデフォルト値が設定されている
// - 状態（state）は持たない
// - イベントハンドラーも持たない
//
// 【FooterとHeroの違い】
// Footer: 3つのシンプルなstring props
// Hero: 4つのstring props + より複雑なJSX構造
// ↓ でも、React.memoの使い方は同じ！
//
// 【React.memoの動作（Heroの場合）】
// 1. Home（親コンポーネント）が再レンダリングされる
// 2. React.memo が前回のpropsと今回のpropsを比較
//    - Heroにpropsを渡していない場合、全てデフォルト値
//    - デフォルト値は常に同じ
// 3. propsが同じ → Heroの再レンダリングをスキップ ✅
//
// 【propsを渡した場合の動作例】
// <Hero title="カスタムタイトル" />
//
// - 親が再レンダリング
// - React.memoがpropsをチェック
// - title="カスタムタイトル"は前回と同じ？
//   - 同じ → 再レンダリングスキップ ✅
//   - 違う → 再レンダリング実行 ✅（正しい動作）
//
// 【学習のポイント】
// React.memoは「propsが変わった時は再レンダリングする」のが正しい動作。
// 「propsが変わらない時に再レンダリングしない」ことで最適化する。
//
// 【理論ファイルより引用】
// "React.memoは、関数コンポーネントをメモ化する高階コンポーネントで、
//  同じpropsが渡された場合に再レンダリングをスキップします。"
//
// 【段階的学習の進行】
// Footer（最もシンプル） → Hero（propsあり） → Features（配列処理あり）
export default memo(Hero);