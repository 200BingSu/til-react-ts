# Recoil

- 설치

```bash
npm i recoil
```

## 컨벤션

### case 1

- atoms 전용
  - /src/atoms 폴더 생성
- selector 전용

  - /src/seletor 폴더 생성

  ### case 2

  - /src/states 폴더 생성

```ts
import { atom } from "recoil";

// App 전체에서 관리할 값.
export const countAtom = atom<number>({
  key: "countAtom",
  default: 0,
});

// App 전체에서 관리할 값
export const LoginAtom = atom<boolean>({
  key: "loginAtom",
  default: false,
});
```

- 앱 전체에 recoil 적용

```tsx
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
```

## countAtom을 생성하는 tsx 생성

- /src/pages/CounterAtom.tsx

```tsx
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { countAtom, loginAtom } from "../atoms/countAtom";

interface CounterAtomProps {
  children?: ReactNode;
}
const CounterAtom = (): JSX.Element => {
  const [count, setCount] = useRecoilState(countAtom);
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);

  return (
    <div>
      <h1>CounterAtom: {isLogin ? "로그인 상태" : "로그아웃 상태"}</h1>
      <div>
        <button
          type="button"
          className="bg-slate-200 px-3 py-1 border border-slate-600"
          onClick={() => setIsLogin(true)}
        >
          로그인
        </button>
        <button
          type="button"
          className="bg-slate-200 px-3 py-1 border border-slate-600"
          onClick={() => setIsLogin(false)}
        >
          로그아웃
        </button>
      </div>
      <div>
        <h3 className="text-red-600">{count}</h3>
        <button
          type="button"
          className="bg-slate-200 px-3 py-1 border border-slate-600"
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          증가
        </button>
        <button
          type="button"
          className="bg-slate-200 px-3 py-1 border border-slate-600"
          onClick={() => {
            setCount(prev => prev - 1);
          }}
        >
          감소
        </button>
      </div>
    </div>
  );
};

export default CounterAtom;
```

## 응용 예제(todo)

```ts
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
```

- /src/pages/TodoList.tsx

```tsx
import { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";

interface TodoListProps {
  children?: ReactNode;
}
const TodoList: React.FC<TodoListProps> = () => {
  const [todos, setTodos] = useRecoilState(todoListAtom);
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
        <input
          type="text"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button
          type="button"
          className="bg-slate-100 border border-slate-500"
          onClick={() => addTodo()}
        >
          추가
        </button>
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
      </div>
    </div>
  );
};

export default TodoList;
```

## Selector의 이해

- atom의 새로운 값을 자동으로 계산해서 출력
- atom의 갱신을 위한 중복 코드를 줄여주고 여러 곳에서 재활용할 수 있음.
- /src/selectors/

```ts
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
```

- selector 사용

```tsx
const nowCountValue = useRecoilValue(countSelector);

<h3>{nowCountValue}</h3>;
```
