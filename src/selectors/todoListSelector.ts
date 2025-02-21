import { selector } from "recoil";
import { Itodo, todoListAtom } from "../atoms/todoListAtom";

export const todoLIstSelector = selector<Itodo[]>({
  key: "todoListSelector",
  get: ({ get }) => {
    const todos = get(todoListAtom);
    return todos.filter(item => item.complete === true);
  },
});
