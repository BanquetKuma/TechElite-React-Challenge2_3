import React from 'react';

function Testimonials({
  title = "お客様の声",
  testimonials = [
    {
      comment: "この製品は私の生活を劇的に変えました。毎日が楽しくなります。",
      author: "田中 花子さん"
    },
    {
      comment: "使いやすさが抜群です。他の製品とは比べものになりません。",
      author: "佐藤 太郎さん"
    },
    {
      comment: "サポートの質が素晴らしい。困ったときにいつでも頼れるのが心強いです。",
      author: "鈴木 一郎さん"
    }
  ]
}) {
  return (
    <section id="testimonials">
      <div className="section-container">
        <h2>{title}</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.comment}"</p>
              <cite>- {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;