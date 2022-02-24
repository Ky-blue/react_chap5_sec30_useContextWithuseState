// 関数コンポーネント内で useState, createContext を扱えkるようにするため
// React import 時に useState, createContext を読み込む
import React, { useState, createContext } from "react";

// 他のファイルで CountContext を利用できるようにするため export
// createContext() を利用して Contextオブジェクト CountContext を作成
export const CountContext = createContext();

// useState で定義した count/setCount情報を保持する CountContext.Providerの作成
//CountContext.Providerで children をラップしておくと、
// CountProviderコンポーネントでラップしたコンポーネントのツリー内で
// Contextオブジェクトを参照できるようになる
export const CountProvider = ({ children }) => {
  // setCount は状態変数/現在の値を更新するための関数
  // 状態変数 count の初期値は0
  const [count, setCount] = useState(0);

  // value属性の値は CountProviderコンポーネントでラップした
  //　コンポーネントのツリー内で参照できるようになる
  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};
