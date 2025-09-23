import styles from './Features.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「配列の型定義で要素の型を指定する重要性」
// Phase 1: 保守性重視の1ファイル構造で、オブジェクト配列の型管理を統一
import { FeaturesProps, FeatureItem } from '../../types';

// 📚 学習ポイント：複雑なデフォルト値と型定義の組み合わせ
// オブジェクトの配列をデフォルト値として設定し、同時に型安全性を確保
function Features({
  title = "特徴",
  features = [
    {
      icon: "fas fa-gem",
      title: "最高品質",
      description: "厳選された素材と職人技が生み出す、比類なき品質をお届けします。"
    },
    {
      icon: "fas fa-mobile-alt", 
      title: "使いやすさ",
      description: "直感的なデザインで、誰もが簡単に使いこなせる製品です。"
    },
    {
      icon: "fas fa-headset",
      title: "24時間サポート", 
      description: "お客様のニーズに合わせて、いつでもどこでもサポートいたします。"
    }
  ]
}: FeaturesProps) {
  return (
    <section id="features">
      <div className="section-container">
        <h2>{title}</h2>
        <div className={styles.featureContainer}>
          {/* 📚 学習ポイント：map関数での型安全性 */}
          {/* featuresはFeatureItem[]型なので、featureはFeatureItem型であることが保証される */}
          {/* feature.icon, feature.title, feature.descriptionのアクセスが型安全 */}
          {features.map((feature: FeatureItem, index: number) => (
            <div key={index} className={styles.feature}>
              <i className={`${feature.icon} ${styles.featureIcon}`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;