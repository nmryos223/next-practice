import React from "react";

type Item = {
  /**
   * 我慢した食べ物名
   */
  foodName: string;
  /**
   * カロリー
   */
  calorie: number;
  /**
   *コメント
   */
  comment?: string;
  /**
   * スレッドコメントリスト
   */
  threadCommentList?: string[];
};

interface RecordProps {
  record: Item[];
  setRecord: React.Dispatch<React.SetStateAction<Item[]>>;
}

/**
 * 初期値
 */
const INITIAL_PROPS: RecordProps = {
  record: [],
  setRecord: () => undefined,
};

/**
 * 記録コンテキスト
 */
export const RecordContext = React.createContext<RecordProps>({
  ...INITIAL_PROPS,
});

/**
 * コンテキスト初期値
 */
export function useCreateRecordContext(): RecordProps {
  const [record, setRecord] = React.useState<Item[]>([]);
  return React.useMemo(
    () => ({
      record,
      setRecord,
    }),
    [record]
  );
}

/**
 * 記録を使用する際に使用
 */
export function useRecordContext() {
  return React.useContext(RecordContext);
}
