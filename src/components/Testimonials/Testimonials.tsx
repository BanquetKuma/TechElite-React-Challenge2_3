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
  return (
    <section id="testimonials">
      <div className="section-container">
        <h2>{title}</h2>
        <div className={styles.testimonialContainer}>
          {/* 📚 学習ポイント：パターンの理解と応用 */}
          {/* Featuresと同じパターン：型定義された配列をmapで処理 */}
          {testimonials.map((testimonial: TestimonialItem, index: number) => (
            <div key={index} className={styles.testimonial}>
              <p className={styles.testimonialText}>""{testimonial.comment}""</p>
              <cite className={styles.testimonialAuthor}>- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;