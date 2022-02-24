// Secondコンポーネントを import
import { Second } from "./Second";

// 他ファイルで Firstコンポーネントを利用できるようexpoer
export const First = () => {
  return (
    <>
      <p>Firstコンポーネント</p>
      <Second />
    </>
  );
};
