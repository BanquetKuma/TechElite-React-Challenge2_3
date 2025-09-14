import React from 'react';

function Features({
  title = "特徴",
  features = [
    {
      icon: "fas fa-gem",
      title: "最高品質",
      description: "厳選された素材と職人技が生み出す、比類なき品質をお届けします。"
    },
    {
      icon: "fas fa-mobile-alt", 
      title: "使いやすさ",
      description: "直感的なデザインで、誰もが簡単に使いこなせる製品です。"
    },
    {
      icon: "fas fa-headset",
      title: "24時間サポート", 
      description: "お客様のニーズに合わせて、いつでもどこでもサポートいたします。"
    }
  ]
}) {
  return (
    <section id="features">
      <div className="section-container">
        <h2>{title}</h2>
        <div className="feature-container">
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;