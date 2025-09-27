// 📚 学習ポイント：Aboutページコンポーネント
// React Routerでルーティングされるページも通常のReactコンポーネントです
// 特別な props や設定は必要ありません

import { useEffect } from 'react';
import styles from './About.module.css';
// 📚 学習ポイント：React RouterのLinkコンポーネントをインポート
// ボタンクリックでページ遷移を実現するために使用
import { Link } from 'react-router-dom';

// 📚 学習ポイント：ページコンポーネントの型定義
// ルーティング用のコンポーネントでも、通常のコンポーネントと同じ型定義
// 今回はPropsを受け取らないシンプルなコンポーネント
function About() {
  // 📚 学習ポイント：ページ表示時のスクロール位置制御
  // React Routerでページ遷移時、前ページのスクロール位置が保持される問題を解決
  useEffect(() => {
    // ページトップに瞬時にスクロール（アニメーションなし）
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // スムーズではなく瞬時に移動
    });
  }, []); // 依存関係配列を空にして、コンポーネントマウント時に一度だけ実行
  return (
    <div className={styles.about}>
      <div className="section-container">
        {/* 📚 学習ポイント：セマンティックHTML */}
        {/* ページの主要コンテンツは<main>タグで囲むことで、アクセシビリティが向上 */}
        <main className={styles.content}>
          <h1 className={styles.title}>私たちについて</h1>
          
          <section className={styles.introduction}>
            <p className={styles.lead}>
              My Stylish LPは、革新的な製品とサービスを通じて、お客様の日常をより豊かにすることを目指しています。私たちは常に最高品質と使いやすさを追求し、24時間体制でサポートを提供しています。
            </p>
          </section>

          <section className={styles.mission}>
            <p className={styles.text}>
              2023年の設立以来、私たちは多くのお客様から信頼を頂き、日々成長を続けています。お客様の声に耳を傾け、常に改善を重ねることで、より良い製品とサービスを提供し続けます。
            </p>
          </section>

          <div className={styles.cta}>
            {/* 📚 学習ポイント：React RouterのLinkをボタンスタイルで使用 */}
            {/* 存在しないパス（/details）を指定してNotFoundページに遷移 */}
            <Link to="/details" className={styles.ctaButton}>
              詳細を見る
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

// 📚 学習ポイント：エクスポート
// 他のファイルから import できるようにデフォルトエクスポート
export default About;