import styles from './Header.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：React RouterのLinkコンポーネントをインポート
// 理論ファイルより：「React Router を使用したリンクへの変更例」
import { Link } from 'react-router-dom';
// 📚 学習ポイント：カスタムフックのインポート
// 環境非依存のナビゲーション制御機能を提供
import { useNavigation } from '../../hooks/useNavigation';
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 新しい拡張性重視の型定義を使用
import { HeaderPropsWithSection, NavItemWithSection } from '../../types';

// 📚 学習ポイント：環境非依存ナビゲーションの実装
// JavaScript制御によりハードコードを排除し、拡張性を向上
function Header({
  logoText = "My Stylish LP",
  navItems = [
    // 📚 学習ポイント：セクション対応ナビゲーション設計
    // sectionId を使用してJavaScript制御によるセクション移動を実現
    { sectionId: "hero", text: "ホーム" },
    { sectionId: "features", text: "特徴" },
    { sectionId: "testimonials", text: "お客様の声" },
    { sectionId: "contact", text: "お問い合わせ" },
    // 📚 学習ポイント：ページ遷移は従来通りhrefを使用
    // 課題要件：「私たちについて」リンクの追加
    { href: "/about", text: "私たちについて" }
  ]
}: HeaderPropsWithSection) {
  // 📚 学習ポイント：カスタムフックの使用
  // 環境非依存のナビゲーション機能を取得
  const { navigateToSection } = useNavigation();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>{logoText}</div>
        <nav>
          <ul className={styles.navLinks}>
            {/* 📚 学習ポイント：新しいナビゲーション型での型安全性 */}
            {/* navItemsの型がNavItemWithSection[]と定義され、sectionIdとhrefの使い分けが型安全 */}
            {navItems.map((item: NavItemWithSection, index: number) => (
              <li key={index}>
                {/* 📚 学習ポイント：セクションリンクとページリンクの適切な処理 */}
                {/* sectionId が存在する場合はJavaScript制御、href の場合は React Router */}
                {item.sectionId ? (
                  // 📚 学習ポイント：JavaScript制御によるセクションナビゲーション
                  // 環境非依存でクロスページ対応のセクション移動を実現
                  <button 
                    className={styles.navButton}
                    onClick={() => navigateToSection(item.sectionId!)}
                  >
                    {item.text}
                  </button>
                ) : (
                  // 📚 学習ポイント：React RouterのLinkコンポーネント
                  // ページ遷移（"/about"等）には従来通りLinkを使用
                  <Link to={item.href!}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;