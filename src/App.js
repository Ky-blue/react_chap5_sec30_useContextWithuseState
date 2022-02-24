// TextProviderコンポーネントを import
import { CountProvider } from "./CountProvider";

// Firstコンポーネントを import
import { First } from "./First";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* CountProviderでラップしているので、Firstコンポーネントの配下で
          Contextオブジェクトの値を参照できるようになる */}
      {/* Firstコンポーネントは以下のコンポーネントもProvider内なので
          同様にvalue属性の値を参照できる */}
      <CountProvider>
        <First />
      </CountProvider>
    </div>
  );
}
