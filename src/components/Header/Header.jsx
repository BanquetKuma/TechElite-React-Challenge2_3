import React, { useState } from 'react';
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

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>{logoText}</div>
        <nav>
          <div 
            className={styles.hamburger} 
            onClick={handleHamburgerClick}
          >
            ☰
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