import { atom } from "recoil";

export interface Itodo {
  id: number;
  text: string;
  complete: boolean;
}

export const todoListAtom = atom<Itodo[]>({
  key: "todoListAtom",
  default: [],
});
