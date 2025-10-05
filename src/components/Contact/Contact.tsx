import { useState, useCallback, memo } from 'react'; // 📚 Challenge 3: パフォーマンス最適化のためのインポート
import { useForm, SubmitHandler } from 'react-hook-form'; // React Hook Formの型定義を含むインポート
import styles from './Contact.module.css'; // CSS Modulesの型定義はcss.d.tsで定義済み
// 📚 学習ポイント：共通型定義ファイルからのインポート
// 理論ファイルより：「コンポーネントでの型インポート例」
// 型定義を一元管理し、プロジェクト全体で一貫した型を使用
import { ContactProps, ContactFormInput } from '../../types';

// 📚 学習ポイント：React Hook FormとTypeScriptの高度な統合
// 理論ファイルより：「<FormInput>でフォームがFormInput型のデータを扱うと明示」
function Contact({
  title = "お問い合わせ",
  submitText = "送信する"
}: ContactProps) {
  // 📚 学習ポイント：useFormフックにジェネリドクス型を指定
  // <FormInput>を指定することで、register関数やerrorsオブジェクトが型安全になる
  const {
    register,    // 入力フィールドをフォームに登録する関数（型安全）
    handleSubmit, // フォーム送信を処理する関数（型安全）
    formState: { errors }, // フォームの状態（エラー情報等）を管理するオブジェクト（型安全）
    reset        // フォームをリセットする関数
  } = useForm<ContactFormInput>();

  // 📚 学習ポイント：useStateフックの型定義
  // useState<boolean>で状態の型を明示的に指定、型安全性を確保
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 📚 Challenge 3 学習ポイント：useCallbackの「使わない」判断
  //
  // 【重要な学習ポイント】
  // ここでは教育的に、あえてuseCallbackを「使わない」選択をします。
  //
  // 【なぜ使わないのか？】
  // 1. 依存配列が複雑 - reset, setIsSubmitted など複数の依存が必要
  // 2. 実際の効果が小さい - onSubmitは<form>のネイティブ要素に渡されるだけ
  // 3. 理論ファイルより: "過度な最適化を避ける"
  //
  // 【useCallbackが有効な場面】
  // - メモ化された子コンポーネントにコールバックを渡す時
  // - 例: <MemoizedButton onClick={handleClick} />
  //
  // 📚 教育的メッセージ:
  // 「全ての関数をメモ化する必要はない」
  // 「パフォーマンス問題がある場所だけを最適化する」
  const onSubmit: SubmitHandler<ContactFormInput> = (data: ContactFormInput): void => {
    console.log('フォームデータ:', data);
    setIsSubmitted(true);
    reset();
    setTimeout((): void => {
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
          
          {/* 📚 学習ポイント：お名前フィールド（必須） */}
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="お名前"
              className={styles.formInput}
              {...register("name", {
                required: "お名前を入力してください。" // 必須入力バリデーション
              })}
            />
            {/* 📚 学習ポイント：型安全なエラーメッセージアクセス */}
            {/* errors.nameはFormInput型に基づくエラー情報なので、型安全なアクセスが可能 */}
            {errors.name && (
              <span className={styles.errorMessage}>
                {errors.name.message}
              </span>
            )}
          </div>

          {/* 📚 学習ポイント：メールアドレスフィールド（必須・形式チェック） */}
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

          {/* 📚 学習ポイント：電話番号フィールド（任意・数字のみ） */}
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

          {/* 📚 学習ポイント：メッセージフィールド（任意・バリデーションなし） */}
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

// 📚 Challenge 3 学習ポイント：内部状態を持つコンポーネントのReact.memo
//
// 【最も重要な学習ポイント】
// ContactコンポーネントはuseState（内部状態）を持っているけど、
// React.memoを適用しても大丈夫？ → はい、大丈夫です！
//
// 【React.memoと内部状態の関係】
// 1. React.memoがチェックするのは「**props**の変更」だけ
// 2. 内部状態（useState）の変更は別扱い
//
// 【実際の動作例】
// - 親が再レンダリング + propsが同じ → 再レンダリングスキップ ✅
// - フォーム送信（isSubmitted変更） → 再レンダリング実行 ✅
//
// 【理論ファイルより引用】
// "再レンダリング発生条件：1.状態変更 2.props変更 3.親の再レンダリング"
// React.memoは3を防ぐ。1と2は正常に動作！
export default memo(Contact);