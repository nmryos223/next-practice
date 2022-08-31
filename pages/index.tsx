import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

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
      <div>{count}</div>
    </>
  );
};

export default Home;
