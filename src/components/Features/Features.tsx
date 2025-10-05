import { useMemo, memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
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
  // 📚 Challenge 3 学習ポイント：useMemoによる配列処理のメモ化
  //
  // 【なぜuseMemoが必要？】
  // - map関数は配列を処理して新しい配列（JSX要素の配列）を返す
  // - コンポーネントが再レンダリングされるたびに、map関数も再実行される
  // - featuresが変わっていない場合、この再計算は無駄なコスト
  //
  // 【useMemoの役割】
  // - 計算結果（map関数の結果）を「メモ化」（記憶）する
  // - 依存配列[features]の値が変わらない限り、前回の計算結果を再利用
  // - 結果：不要な再計算を防ぎ、パフォーマンスが向上
  //
  // 【依存配列の意味】
  // - [features]: featuresが変わった時だけ再計算する
  // - featuresが同じなら、前回の計算結果を返す
  //
  // 【理論ファイルより引用】
  // "useMemoは、メモ化された値を返すフックで、
  //  依存関係が変化したときにだけ再計算を行います。"
  //
  // 【実際の動作フロー】
  // 1. 初回レンダリング: map関数を実行 → 結果をメモ化
  // 2. 再レンダリング（featuresが同じ）: メモ化した結果を返す（map実行しない）✅
  // 3. 再レンダリング（featuresが変更）: map関数を再実行 → 新しい結果をメモ化 ✅
  const featureItems = useMemo(() => {
    // 📚 開発時の確認用ログ（本番では削除可能）
    // このログが表示される = map関数が実行された
    console.log('Features: 配列処理を実行中...');

    return features.map((feature: FeatureItem, index: number) => (
      <div key={index} className={styles.feature}>
        <i className={`${feature.icon} ${styles.featureIcon}`}></i>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ));
  }, [features]); // 依存配列: featuresが変わった時だけ再計算

  return (
    <section id="features">
      <div className="section-container">
        <h2>{title}</h2>
        <div className={styles.featureContainer}>
          {/* 📚 Challenge 3 学習ポイント：メモ化された値の使用 */}
          {/* 最適化前: {features.map(...)} ← 毎回map実行 */}
          {/* 最適化後: {featureItems} ← メモ化された結果を再利用 */}
          {featureItems}
        </div>
      </div>
    </section>
  );
}

// 📚 Challenge 3 学習ポイント：React.memo + useMemo の組み合わせ
//
// 【2段階の最適化】
// 1. useMemo: コンポーネント内部の処理を最適化
//    - featuresが変わらない → map関数を再実行しない
//
// 2. React.memo: コンポーネント全体を最適化
//    - propsが変わらない → コンポーネントを再レンダリングしない
//
// 【組み合わせの効果】
// - 親（Home）が再レンダリング
//   → React.memoがpropsをチェック
//   → propsが同じ
//   → Featuresコンポーネント全体がスキップ ✅
//
// - propsが変わった場合（featuresが更新）
//   → Featuresコンポーネントが再レンダリング
//   → useMemoが依存配列をチェック
//   → featuresが変わった
//   → map関数を再実行 ✅（正しい動作）
//
// 【理論ファイルより引用】
// "コンポーネントの分割とメモ化：
//  大きなコンポーネントを小さく分割し、必要に応じてメモ化する。"
//
// 【段階的学習の進行】
// Hero（React.memoのみ） → Features（React.memo + useMemo）
// ↓ 次は Testimonials で同じパターンを繰り返し学習
export default memo(Features);