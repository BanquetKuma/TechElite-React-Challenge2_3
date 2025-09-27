// 📚 学習ポイント：404エラーページコンポーネント
// ユーザーが存在しないページにアクセスした時に表示される
// ユーザーフレンドリーなデザインで、迷子になったユーザーを助ける

// 📚 学習ポイント：React Hooksのインポート
// useEffect でページ遷移時の処理を実装
import { useEffect } from 'react';
import styles from './NotFound.module.css';
// 📚 学習ポイント：React RouterのLinkコンポーネント
// ホームに戻るリンクを提供するために使用
import { Link } from 'react-router-dom';

function NotFound() {
  // 📚 学習ポイント：ページ遷移時のスクロール位置リセット
  // SPAでは前のページのスクロール位置が保持されることがある
  // ユーザー体験向上のため、404ページは常に上部から表示する
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // アニメーションなしで即座にスクロール
    });
  }, []); // 空の依存関係配列でコンポーネントマウント時に一度だけ実行
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        {/* 📚 学習ポイント：大きな404表示 */}
        {/* 視覚的にエラーであることを明確に伝える */}
        <h1 className={styles.errorCode}>404</h1>
        
        <h2 className={styles.title}>ページが見つかりません</h2>
        
        <p className={styles.message}>
          申し訳ございません。お探しのページは存在しないか、
          移動または削除された可能性があります。
        </p>
        
        {/* 📚 学習ポイント：ユーザーの次のアクション */}
        {/* エラーページでも、ユーザーが次に何をすべきか明確に示す */}
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            ホームへ戻る
          </Link>
        </div>
        
        {/* 📚 学習ポイント：追加の情報 */}
        {/* エラーページでも、ユーザーを助ける情報を提供 */}
        <div className={styles.suggestions}>
          <p className={styles.suggestionsTitle}>こちらもお試しください：</p>
          <ul className={styles.suggestionsList}>
            <li>URLが正しく入力されているか確認してください</li>
            <li>ブラウザの戻るボタンで前のページに戻ってください</li>
            <li>ホームページから目的のページをお探しください</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 📚 学習ポイント：エラーページも通常のコンポーネント
// React Routerで使用するために、通常通りエクスポート
export default NotFound;