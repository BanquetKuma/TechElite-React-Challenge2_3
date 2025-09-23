// 📚 学習ポイント：React 17以降の新しいJSX変換を使用
// import React が不要になりました（tsconfig.jsonの"jsx": "react-jsx"により自動処理）
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// 📚 学習ポイント：TypeScript関数コンポーネントの現代的な書き方
// 戻り値の型は自動推論されるため、明示的な型注釈は省略可能
// これにより、よりシンプルで読みやすいコードになります
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* 各コンポーネントにpropsを渡す場合、型安全性が保証される */}
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;