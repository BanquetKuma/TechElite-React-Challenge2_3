import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'; // CSS Modulesをインポート

function Header({
  logoText = "My Stylish LP",
  navItems = [
    { href: "#hero", text: "ホーム" },
    { href: "#features", text: "特徴" },
    { href: "#testimonials", text: "お客様の声" },
    { href: "#contact", text: "お問い合わせ" }
  ]
}) {
  // ハンバーガーメニューの開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ハンバーガーメニューのクリックハンドラー
  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ウィンドウリサイズ監視でレスポンシブ対応
  useEffect(() => {
    // リサイズイベントのハンドラー関数
    const handleResize = () => {
      // ウィンドウ幅が768pxを超えた場合、メニューを閉じる
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // ウィンドウにリサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数：コンポーネント削除時にイベントリスナーを解除
    return () => {
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
            {navItems.map((item, index) => (
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