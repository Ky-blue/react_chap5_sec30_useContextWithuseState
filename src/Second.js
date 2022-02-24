// Thirdコンポーネントを import
import { Third } from "./Third";

// 他ファイルで Secondコンポーネントを利用できるよう export
export const Second = () => {
  return (
    <>
      <p>Secondコンポーネント</p>
      <Third />
    </>
  );
};
