import React from 'react';
import styles from './Hero.module.css'; // CSS Modulesをインポート

function Hero({
  title = "新しい体験をあなたに",
  subtitle = "革新的な製品で、あなたの日常をより豊かに、より便利に。",
  ctaText = "今すぐ体験する",
  ctaLink = "#contact"
}) {
  return (
    <section className={styles.hero}>
      <div className="section-container">
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{subtitle}</p>
        <a href={ctaLink} className={styles.ctaButton}>{ctaText}</a>
      </div>
    </section>
  );
}

export default Hero;