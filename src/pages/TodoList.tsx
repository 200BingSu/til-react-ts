import { ReactNode, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";
import { Button, Input } from "antd";
import { todoLIstSelector } from "../selectors/todoListSelector";

interface TodoListProps {
  children?: ReactNode;
}
const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useRecoilState(todoListAtom);
  const completedTodos = useRecoilValue(todoLIstSelector);
  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);
  const [value, setValue] = useState<string>("");
  const addTodo = () => {
    console.log("click");
    if (value.trim()) {
      setTodos([...todos, { id: Date.now(), text: value, complete: false }]);
    }
    setValue("");
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(item => {
        return item.id === id
          ? { ...item, complete: !item.complete }
          : { ...item };
      }),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(item => item.id !== id));
  };
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <Input
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <Button onClick={() => addTodo()}>추가</Button>
        <ul>
          {todos.map(item => {
            return (
              <li key={item.id} className="flex gap-2">
                <p
                  className={item.complete ? "line-through" : "none"}
                  onClick={() => toggleTodo(item.id)}
                >
                  {item.text}
                </p>
                <button type="button" onClick={() => deleteTodo(item.id)}>
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
        <ul>
          <h2 className="font-bold">완료된 목록 출력</h2>
          <ul>
            {completedTodos.map(item => {
              return (
                <li key={item.id}>
                  <p>{item.text}</p>
                  <button type="button" onClick={() => deleteTodo(item.id)}>
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
