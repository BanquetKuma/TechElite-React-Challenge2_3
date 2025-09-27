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

export default Hero;