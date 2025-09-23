import styles from './Footer.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「型定義を専用ディレクトリに分けて管理すると見通しがよい」
// Phase 1: 保守性重視の1ファイル構造で、型定義の一元管理を実現
import { FooterProps } from '../../types';

// 📚 学習ポイント：シンプルから複雑への学習プログレッション
// フッターはシンプルな文字列Propsのみで、TypeScriptの基礎を理解しやすい
function Footer({
  year = "2023",
  companyName = "My Stylish LP",
  rightsText = "All rights reserved."
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="section-container">
        {/* 📚 学習ポイント：型安全な文字列補間 */}
        {/* year, companyName, rightsTextはall string型であることが保証されている */}
        &copy; {year} {companyName}. {rightsText}
      </div>
    </footer>
  );
}

export default Footer;