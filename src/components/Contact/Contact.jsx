import React from 'react';

function Contact({
  title = "お問い合わせ",
  namePlaceholder = "お名前",
  emailPlaceholder = "メールアドレス", 
  messagePlaceholder = "メッセージ",
  submitText = "送信する"
}) {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>{title}</h2>
        <form>
          <input type="text" placeholder={namePlaceholder} required />
          <input type="email" placeholder={emailPlaceholder} required />
          <textarea placeholder={messagePlaceholder} required></textarea>
          <button type="submit">{submitText}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;