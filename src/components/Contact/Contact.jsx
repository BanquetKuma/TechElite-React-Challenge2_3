import React from 'react';
import styles from './Contact.module.css'; // CSS Modulesをインポート

function Contact({
  title = "お問い合わせ",
  namePlaceholder = "お名前",
  emailPlaceholder = "メールアドレス", 
  messagePlaceholder = "メッセージ",
  submitText = "送信する"
}) {
  return (
    <section id="contact" className={styles.contact}>
      <div className="section-container">
        <h2>{title}</h2>
        <form className={styles.contactForm}>
          <input 
            type="text" 
            placeholder={namePlaceholder} 
            className={styles.formInput}
            required 
          />
          <input 
            type="email" 
            placeholder={emailPlaceholder} 
            className={styles.formInput}
            required 
          />
          <textarea 
            placeholder={messagePlaceholder} 
            className={styles.formTextarea}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            {submitText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;