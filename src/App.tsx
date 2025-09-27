// 📚 学習ポイント：React 17以降の新しいJSX変換を使用
// import React が不要になりました（tsconfig.jsonの"jsx": "react-jsx"により自動処理）
import './App.css';
// 📚 学習ポイント：React Routerのインポート
// 理論ファイルより：BrowserRouterをRouterという名前でインポート
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 既存のコンポーネント
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// 📚 学習ポイント：新しいページコンポーネントのインポート
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

// 📚 学習ポイント：ホームページ用のコンポーネントを作成
// ルーティングを導入するため、既存のコンテンツをHomeコンポーネントに分離
function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  );
}

// 📚 学習ポイント：TypeScript関数コンポーネントの現代的な書き方
// 戻り値の型は自動推論されるため、明示的な型注釈は省略可能
// これにより、よりシンプルで読みやすいコードになります
function App() {
  return (
    // 📚 学習ポイント：Routerでアプリ全体を囲む
    // これにより、ルーティング機能が有効になります
    <Router>
      <div className="App">
        {/* 📚 学習ポイント：Headerは常に表示される */}
        {/* ルーティングの外側に配置することで、ページ遷移時も表示され続ける */}
        <Header />
        
        {/* 📚 学習ポイント：Routesコンポーネント */}
        {/* ルートの定義を囲む新しいv6の書き方 */}
        <Routes>
          {/* 📚 学習ポイント：ルートの定義 */}
          {/* path="/"は、ルートパス（ホームページ）を表す */}
          <Route path="/" element={<Home />} />
          
          {/* 📚 学習ポイント：Aboutページのルート */}
          {/* path="/about"にアクセスすると、Aboutコンポーネントが表示される */}
          <Route path="/about" element={<About />} />
          
          {/* 📚 学習ポイント：404ページのルート */}
          {/* path="*"は、定義されていないすべてのパスにマッチする */}
          {/* 必ず最後に配置する（上から順番にマッチングされるため） */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* 📚 学習ポイント：Footerも常に表示される */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;