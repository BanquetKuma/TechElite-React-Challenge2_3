import { useCallback, memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
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

  // 📚 Challenge 3 学習ポイント：useCallbackによる関数のメモ化
  //
  // 【なぜuseCallbackが必要？】
  // - 通常、コンポーネントが再レンダリングされると、内部で定義された関数も新しく作り直される
  // - 新しい関数 = 新しいオブジェクト = propsが「変わった」と判断される
  // - 結果：子コンポーネントが不要に再レンダリングされてしまう
  //
  // 【useCallbackの役割】
  // - 関数を「メモ化」（記憶）して、同じ関数を再利用する
  // - 依存配列[navigateToSection]の値が変わらない限り、同じ関数オブジェクトを返す
  // - 結果：子コンポーネントの不要な再レンダリングを防ぐ
  //
  // 【依存配列の意味】
  // - [navigateToSection]: この値が変わった時だけ、新しい関数を作り直す
  // - navigateToSectionはカスタムフックから取得した関数なので、通常は変わらない
  //
  // 【理論ファイルより引用】
  // "useCallbackは、メモ化されたコールバック関数を返すフックで、
  //  依存関係が変化したときにだけ新しい関数を作成します。"
  const handleSectionClick = useCallback((sectionId: string) => {
    navigateToSection(sectionId);
  }, [navigateToSection]);

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
                  // 📚 Challenge 3 学習ポイント：メモ化された関数の使用
                  // 【最適化前】onClick={() => navigateToSection(item.sectionId!)}
                  // ↓ 毎回新しいアロー関数が作られる = パフォーマンス低下
                  // 【最適化後】handleSectionClickを使用
                  // ↓ useCallbackでメモ化された同じ関数を再利用 = パフォーマンス向上
                  <button
                    className={styles.navButton}
                    onClick={() => handleSectionClick(item.sectionId!)}
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

// 📚 Challenge 3 学習ポイント：React.memoによるコンポーネントのメモ化
//
// 【なぜReact.memoが必要？】
// - Headerは静的なナビゲーションバーで、親（App.tsx）が再レンダリングされても
//   Headerの内容は変わらない
// - しかし、通常は親が再レンダリングされると子も自動的に再レンダリングされる
// - これは無駄なパフォーマンスコスト
//
// 【React.memoの役割】
// - 前回のpropsと今回のpropsを比較する
// - propsが同じなら、再レンダリングをスキップする
// - 結果：パフォーマンスが向上する
//
// 【Headerに最適な理由】
// - logoTextとnavItemsというpropsを受け取る
// - これらのpropsは通常変わらない（デフォルト値を使用）
// - つまり、ほとんどの場合で再レンダリングをスキップできる
//
// 【理論ファイルより引用】
// "React.memoは、関数コンポーネントをメモ化する高階コンポーネントで、
//  同じpropsが渡された場合に再レンダリングをスキップします。"
//
// 【使い方】
// export default Header;  ← 最適化前
// export default memo(Header);  ← 最適化後
export default memo(Header);