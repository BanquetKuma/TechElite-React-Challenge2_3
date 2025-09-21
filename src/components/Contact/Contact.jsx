import React, { useState } from 'react'; // useStateフックをインポート
import { useForm } from 'react-hook-form'; // React Hook Formをインポート
import styles from './Contact.module.css'; // CSS Modulesをインポート

function Contact({
  title = "お問い合わせ",
  submitText = "送信する"
}) {
  // React Hook Formの初期化
  // register: 各入力フィールドをフォームに登録する関数
  // handleSubmit: フォーム送信を処理する関数
  // formState: フォームの状態（エラー情報など）を管理するオブジェクト
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // フォームをリセットする関数
  } = useForm();

  // フォーム送信成功後の状態管理
  // isSubmitted: 送信が完了したかどうかを管理する状態
  // setIsSubmitted: isSubmittedの値を更新する関数
  const [isSubmitted, setIsSubmitted] = useState(false);

  // フォーム送信時に実行される関数
  // data: React Hook Formが収集したフォームデータ
  const onSubmit = (data) => {
    // 実際の送信処理をここに実装
    // 現在はコンソールにデータを出力（開発用）
    console.log('フォームデータ:', data);
    
    // 送信成功状態に更新
    setIsSubmitted(true);
    
    // フォームの入力値をクリア
    reset();

    // 3秒後に成功メッセージを非表示にする
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-container">
        <h2>{title}</h2>
        
        {/* 送信成功メッセージ */}
        {isSubmitted && (
          <div className={styles.successMessage}>
            お問い合わせが送信されました。
          </div>
        )}

        {/* React Hook Formで管理されるフォーム */}
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
          
          {/* お名前フィールド（必須） */}
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="お名前"
              className={styles.formInput}
              {...register("name", {
                required: "お名前を入力してください。" // 必須入力バリデーション
              })}
            />
            {/* エラーメッセージの表示 */}
            {errors.name && (
              <span className={styles.errorMessage}>
                {errors.name.message}
              </span>
            )}
          </div>

          {/* メールアドレスフィールド（必須・形式チェック） */}
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="メールアドレス"
              className={styles.formInput}
              {...register("email", {
                required: "メールアドレスを入力してください。", // 必須入力バリデーション
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // メール形式の正規表現
                  message: "有効なメールアドレスを入力してください。" // 形式不正時のエラーメッセージ
                }
              })}
            />
            {/* エラーメッセージの表示 */}
            {errors.email && (
              <span className={styles.errorMessage}>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* 電話番号フィールド（任意・数字のみ） */}
          <div className={styles.formGroup}>
            <input 
              type="tel" 
              placeholder="電話番号（任意）"
              className={styles.formInput}
              {...register("phone", {
                pattern: {
                  value: /^[0-9]+$/, // 数字のみの正規表現
                  message: "電話番号は数字のみで入力してください。" // 形式不正時のエラーメッセージ
                }
              })}
            />
            {/* エラーメッセージの表示 */}
            {errors.phone && (
              <span className={styles.errorMessage}>
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* メッセージフィールド（任意・バリデーションなし） */}
          <div className={styles.formGroup}>
            <textarea 
              placeholder="メッセージ（任意）"
              className={styles.formTextarea}
              {...register("message")} // バリデーションルールなしで登録
            />
          </div>

          {/* 送信ボタン */}
          <button type="submit" className={styles.submitButton}>
            {submitText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;