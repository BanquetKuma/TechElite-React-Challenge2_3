import { useMemo, memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
import styles from './Testimonials.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「型定義を専用ディレクトリに分けて管理すると見通しがよい」
// Phase 1: 保守性重視の1ファイル構造で、型定義の一元管理を実現
import { TestimonialsProps, TestimonialItem } from '../../types';

// 📚 学習ポイント：同じパターンの繰り返し学習
// Featuresと同様のパターンで、オブジェクト配列と型定義の組み合わせを学習
function Testimonials({
  title = "お客様の声",
  testimonials = [
    {
      comment: "この製品は私の生活を劇的に変えました。毎日が楽しくなります。",
      author: "田中 花子さん"
    },
    {
      comment: "使いやすさが抜群です。他の製品とは比べものになりません。",
      author: "佐藤 太郎さん"
    },
    {
      comment: "サポートの質が素晴らしい。困ったときにいつでも頼れるのが心強いです。",
      author: "鈴木 一郎さん"
    }
  ]
}: TestimonialsProps) {
  // 📚 Challenge 3 学習ポイント：Featuresと同じパターンの繰り返し学習
  //
  // 【なぜ繰り返し学習が重要？】
  // - 同じパターンを複数回実装することで、理解が深まる
  // - Featuresで学んだ知識をTestimonialsで応用
  // - 「配列処理のメモ化」という共通パターンを習得
  //
  // 【Featuresとの共通点】
  // - オブジェクトの配列（features / testimonials）
  // - map関数でJSX要素の配列を生成
  // - useMemoで処理結果をメモ化
  // - React.memoでコンポーネント全体をメモ化
  //
  // 【違いは？】
  // - データの内容が違うだけ（features vs testimonials）
  // - 最適化のパターンは全く同じ！
  //
  // 【学習効果】
  // 「配列を処理するコンポーネント = useMemo + React.memo」
  // というパターンが身につく
  const testimonialItems = useMemo(() => {
    console.log('Testimonials: 配列処理を実行中...');

    return testimonials.map((testimonial: TestimonialItem, index: number) => (
      <div key={index} className={styles.testimonial}>
        <p className={styles.testimonialText}>""{testimonial.comment}""</p>
        <cite className={styles.testimonialAuthor}>- {testimonial.author}</cite>
      </div>
    ));
  }, [testimonials]);

  return (
    <section id="testimonials">
      <div className="section-container">
        <h2>{title}</h2>
        <div className={styles.testimonialContainer}>
          {/* 📚 Challenge 3 学習ポイント：パターンの応用 */}
          {/* Featuresで学んだパターンを同じように適用 */}
          {testimonialItems}
        </div>
      </div>
    </section>
  );
}

// 📚 Challenge 3 学習ポイント：パターン学習の完成
//
// 【パターンの定着】
// Features: useMemo + React.memo の初回学習
// Testimonials: 同じパターンの繰り返し（定着）
// ↓ このパターンは、配列データを扱う全てのコンポーネントで使える！
//
// 【実務での応用例】
// - 商品リスト
// - ユーザーコメント
// - 記事一覧
// - タグリスト
// など、配列をmapで処理する全ての場面で使える
//
// 【理論ファイルより引用】
// "実際に使う場合のまとめ：
//  useMemo - 重い計算や大規模なデータ処理がある場合。
//  フィルタリング、ソート、計算結果などをメモ化したい場合。"
export default memo(Testimonials);