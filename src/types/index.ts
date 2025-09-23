// 📚 学習ポイント：共通型定義ファイルの作成
// 理論ファイルより：「型定義を専用ディレクトリ（typesなど）に分けて管理すると見通しがよい」
// プロジェクト全体で使用する型定義を一元管理することで、保守性とコードの再利用性を向上

// ==========================================
// 📋 ナビゲーション関連の型定義
// ==========================================

// Header コンポーネントで使用するナビゲーションアイテムの型
export interface NavItem {
  href: string;  // リンク先URL（必須）
  text: string;  // 表示テキスト（必須）
}

// ==========================================
// 🎯 コンテンツ関連の型定義
// ==========================================

// Features コンポーネントで使用する特徴アイテムの型
export interface FeatureItem {
  icon: string;        // Font Awesomeのアイコンクラス名（必須）
  title: string;       // 特徴のタイトル（必須）
  description: string; // 特徴の説明文（必須）
}

// Testimonials コンポーネントで使用するお客様の声アイテムの型
export interface TestimonialItem {
  comment: string; // お客様のコメント（必須）
  author: string;  // コメントの作者（必須）
}

// ==========================================
// 📝 フォーム関連の型定義
// ==========================================

// Contact コンポーネントで使用するフォーム入力データの型
// React Hook Form と組み合わせて型安全なフォーム処理を実現
export interface ContactFormInput {
  name: string;       // お名前（必須フィールド）
  email: string;      // メールアドレス（必須フィールド）
  phone?: string;     // 電話番号（オプショナルフィールド）
  message?: string;   // メッセージ（オプショナルフィールド）
}

// ==========================================
// 🎨 コンポーネントProps関連の型定義
// ==========================================

// 📚 学習ポイント：Props型定義の一元管理
// 各コンポーネントのProps型を共通ファイルで管理することで、
// 型の一貫性を保ち、変更時の影響範囲を明確にする

// Header コンポーネントのProps型
export interface HeaderProps {
  logoText?: string;     // ロゴテキスト（オプショナル）
  navItems?: NavItem[];  // ナビゲーションアイテムの配列（オプショナル）
}

// Hero コンポーネントのProps型
export interface HeroProps {
  title?: string;    // メインタイトル（オプショナル）
  subtitle?: string; // サブタイトル（オプショナル）
  ctaText?: string;  // CTAボタンのテキスト（オプショナル）
  ctaLink?: string;  // CTAボタンのリンク先（オプショナル）
}

// Features コンポーネントのProps型
export interface FeaturesProps {
  title?: string;           // セクションのタイトル（オプショナル）
  features?: FeatureItem[]; // 特徴アイテムの配列（オプショナル）
}

// Testimonials コンポーネントのProps型
export interface TestimonialsProps {
  title?: string;                // セクションのタイトル（オプショナル）
  testimonials?: TestimonialItem[]; // お客様の声アイテムの配列（オプショナル）
}

// Contact コンポーネントのProps型
export interface ContactProps {
  title?: string;      // セクションのタイトル（オプショナル）
  submitText?: string; // 送信ボタンのテキスト（オプショナル）
}

// Footer コンポーネントのProps型
export interface FooterProps {
  year?: string;       // 著作権表示年（オプショナル）
  companyName?: string; // 会社名（オプショナル）
  rightsText?: string;  // 著作権テキスト（オプショナル）
}

// ==========================================
// 📚 学習ポイント：型定義ファイルの利点
// ==========================================

/*
1. 一元管理: すべての型定義を一箇所で管理
2. 再利用性: 複数のコンポーネントで同じ型を再利用可能
3. 一貫性: プロジェクト全体で統一された型命名・構造
4. 保守性: 型の変更時に影響範囲が明確
5. 可読性: 型定義から各コンポーネントの構造が理解しやすい

理論ファイルより：
「明確な命名規則を持つことで他の開発者にもわかりやすいコードになる」
*/