/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react";
import { getOneTodo, getTodos, TodoType } from "../apis/todos/apitodos";

interface TodoProps {
  children?: ReactNode;
}
const Todo = (props: TodoProps): JSX.Element => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [detail, setDetail] = useState<TodoType | null>(null);
  const oneTodo = async () => {
    const data = await getOneTodo(3);
    // 타입 좁히기
    if (data) {
      console.log(data);
      setDetail(data);
    } else {
      console.log("자료 없음");
      setDetail(null);
    }
  };
  const allTodo = async () => {
    const data = await getTodos();
    if (data) {
      console.log("모든 자료", data);
      setTodos(data);
    } else {
      console.log("자료 없음");
      setTodos([]);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {detail && <div>{detail.title}</div>}
      <div className="flex flex-wrap gap-5">
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={oneTodo}
        >
          한개 가지고 오기
        </button>
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={allTodo}
        >
          다 가져오기
        </button>
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={() => {}}
        >
          추가하기
        </button>
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={() => {}}
        >
          전체 수정하기
        </button>
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={() => {}}
        >
          일부 수정하기
        </button>
        <button
          className="text-slate-700 px-4 py-2 border border-slate-500"
          onClick={() => {}}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default Todo;
