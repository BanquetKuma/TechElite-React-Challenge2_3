// 📚 学習ポイント：カスタムフックの作成
// React Router を活用したナビゲーション機能を再利用可能な形で実装
// 環境非依存で拡張性の高いナビゲーション制御を実現

import { useNavigate } from 'react-router-dom';

// 📚 学習ポイント：カスタムフックの型定義
// 戻り値の型を明示することで、使用側での型安全性を確保
interface UseNavigationReturn {
  navigateToSection: (sectionId: string) => void;
}

// 📚 学習ポイント：カスタムフックの命名規則
// use で始まる名前にすることで、React のフック規則に従う
export const useNavigation = (): UseNavigationReturn => {
  // 📚 学習ポイント：React Router のナビゲーション機能
  // useNavigate フックでプログラマティックなページ遷移を実現
  const navigate = useNavigate();

  // 📚 学習ポイント：セクションナビゲーションの実装
  // クロスページ対応とページ内スクロールの両方に対応した汎用的な実装
  const navigateToSection = (sectionId: string): void => {
    // 現在のページがホームページでない場合
    if (window.location.pathname !== '/') {
      // 📚 学習ポイント：React Router のプログラマティックナビゲーション
      // ホームページに遷移してからセクションにスクロール
      navigate('/');
      
      // 📚 学習ポイント：非同期処理でのタイミング制御
      // ページ遷移完了を待ってからスクロール実行（タイミング問題を回避）
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',  // スムーズなスクロールアニメーション
            block: 'start'       // 要素をビューポートの上部に配置
          });
        }
      }, 100); // 100ms の遅延でページ読み込み完了を待つ
    } else {
      // 📚 学習ポイント：同一ページ内でのスクロール
      // 既にホームページにいる場合は直接スクロール
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // 📚 学習ポイント：カスタムフックの戻り値
  // オブジェクト形式で返すことで、将来的な機能追加に対応しやすくする
  return {
    navigateToSection
  };
};