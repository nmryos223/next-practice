import type { NextPage } from "next";
import React from "react";
import { List } from "./List";
import style from "./style.module.scss";

/**
 * 大枠
 */
const Component: NextPage = React.forwardRef<HTMLDivElement>(function Component(
  _props,
  ref
) {
  return (
    <div ref={ref} className={style.container}>
      <List />
    </div>
  );
});

export default React.memo(Component);
