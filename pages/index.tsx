import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { RecordContext, useCreateRecordContext } from "../libs";
import style from "./style.module.scss";
import { FatBurningRecord } from "./fatBurningRecord";

const Home: NextPage = () => {
  const recordContext = useCreateRecordContext();
  return (
    <RecordContext.Provider value={recordContext}>
      <Link href="/">
        <FatBurningRecord />
      </Link>
    </RecordContext.Provider>
  );
};

export default React.memo(Home);
