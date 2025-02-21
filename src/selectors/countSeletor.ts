import { selector } from "recoil";
import { countAtom } from "../atoms/countAtom";

export const countSelector = selector<"짝수" | "홀수">({
  key: "counterSelector",
  // atom이 바뀌면 자동 연산 결과 돌려줌.
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 == 0 ? "짝수" : "홀수";
  },
});
