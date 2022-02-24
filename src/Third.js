// 関数コンポーネント内で useContext を扱えるようにするため
// React import 時に useContext を読み込む
import React, { useContext } from "react";

// CountProviderコンポーネントから　Contextオブジェクトの
// CountContextコンポーネントを import
import { CountContext } from "./CountProvider";

// 他のファイルで Thirdコンポーネントを利用できるようにするため export
// Thirdコンポーネントは Contextオブジェクトから値を取得できるConsumerコンポーネント
export const Third = () => {
  // useContext() を利用して Contextオブジェクトから値を取得
  // useContext() は Contextオブジェクトの値を取得できる Reactフック
  // [count, setCount] には useContext(TextContext)の値が入っている
  // [Count, setCount]　は Providerコンポーネントから取得した value属性の値
  const [count, setCount] = useContext(CountContext);

  // 親コンポーネントである Appコンポーネント内にて、
  // CountProviderコンポーネントでラップされているから
  // Thirdコンポーネント内で Contextオブジェクトの値を参照できる
  console.log(`現在のカウント : ${count}`);
  // Provider から渡された Count の現在の値が console に表示される

  // count の状態変数/現在の値が1ずつカウントアップされる
  // handleClick関数を定義
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <p>
        Thirdコンポーネント :<b>現在のカウント : {count}</b>
      </p>

      {/* Provider から渡された count の現在の値 */}
      {/* クリックで handleClickが実行され、カウントアップするボタン */}
      <button onClick={handleClick}>+ 1 ボタン</button>
    </>
  );
};
