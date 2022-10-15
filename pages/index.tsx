import type { NextPage } from "next";
import React from "react";
import style from "./style.module.scss";

const Home: NextPage = () => {
  const [count, setCount] = React.useState(0);

  const handlePlusCount = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  React.useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <button onClick={handlePlusCount}>カウントアップ</button>
      <div className="content">{count}</div>
    </>
  );
};

export default Home;
