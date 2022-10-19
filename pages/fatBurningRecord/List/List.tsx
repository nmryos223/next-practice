import React from "react";
import type { NextPage } from "next";
import { useRecordContext } from "../../../libs/context";
import style from "./style.module.scss";

/**
 * 記録リスト表示領域
 */
const Component: NextPage = () => {
  const { record } = useRecordContext();
  return (
    <div className={style.container}>
      {record.map((item, i) => (
        <div key={i}>
          <div>{item.foodName}</div>
          <div>{item.calorie}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Component);
