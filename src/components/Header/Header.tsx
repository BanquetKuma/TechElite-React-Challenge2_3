// 📚 学習ポイント：React Hooksを使用する場合はReactインポートが必要
// useState, useEffect等のフックを使う際の適切なインポート方法
import { useState, useEffect } from 'react';
import styles from './Header.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「コンポーネントでの型インポート例」
// 型定義を一元管理し、プロジェクト全体で一貫した型を使用
// Phase 1: 保守性重視の1ファイル構造で型管理を最適化
import { HeaderProps, NavItem } from '../../types';

// 📚 学習ポイント：TypeScriptでのReact Hooksの型定義
// useState<boolean> - ジェネリクスでstateの型を明示的に指定
function Header({
  logoText = "My Stylish LP",
  navItems = [
    { href: "#hero", text: "ホーム" },
    { href: "#features", text: "特徴" },
    { href: "#testimonials", text: "お客様の声" },
    { href: "#contact", text: "お問い合わせ" }
  ]
}: HeaderProps) {
  // 📚 学習ポイント：useStateフックの型定義
  // useState<boolean>で状態の型を明示的に指定
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // 📚 学習ポイント：イベントハンドラーの型定義
  // React.MouseEvent<HTMLDivElement> - クリックイベントの正確な型指定
  const handleHamburgerClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 📚 学習ポイント：useEffectフックの型安全性
  // イベントリスナーのクリーンアップ関数の型も自動推論
  useEffect(() => {
    // リサイズイベントのハンドラー関数
    const handleResize = (): void => {
      // ウィンドウ幅が768pxを超えた場合、メニューを閉じる
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // ウィンドウにリサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数：コンポーネント削除時にイベントリスナーを解除
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 依存関係配列を空にして、初回マウント時に一度だけ実行

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>{logoText}</div>
        <nav>
          <div 
            className={styles.hamburger} 
            onClick={handleHamburgerClick}
          >
            {/* メニューの開閉状態に応じてアイコンを動的に変更 */}
            {isMenuOpen ? '×' : '☰'}
          </div>
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {/* 📚 学習ポイント：map関数での型安全性 */}
            {/* navItemsの型がNavItem[]と定義されているため、item.hrefやitem.textのアクセスが安全 */}
            {navItems.map((item: NavItem, index: number) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;