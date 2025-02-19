# axios

```bash
npm i axios
npm install @types/axios
```

## 폴더 및 파일 구조

- /src/apis 폴더
- /src/apis/todos 폴더
- `/src/apis/todos/apitodos.ts` 생성
  - 확장자가 tsx가 아님.

```ts
import axios from "axios";
const todoURL = "https://jsonplaceholder.typicode.com/todos/";

interface TodoType {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}
type TodoType2 = Omit<TodoType, "id">;

// 자료 1개 호출하여 리턴 받기
const getOneTodo = async (): Promise<TodoType | null> => {
  try {
    // axios에서도 타입을 잡아줘야한다.
    const res = await axios.get<TodoType>(`${todoURL}${id}`);
    console.log(res.data);
    return res.data; // 배열에서 첫 번째 요소 반환
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // 기본값 반환
  }
};

// 자료 여러개 호출해서 리턴받기
const getTodos = async (): Promise<TodoType[] | null> => {
  try {
    const res = await axios.get<TodoType[]>(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 추가하기
const postTodo = async ({
  userId,
  title,
  completed,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.post<TodoType>(todoURL, {
      userId,
      title,
      completed,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 전체 업데이트 하기
const putTodo = async ({
  userId,
  id,
  title,
  completed,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.put<TodoType>(`${todoURL}${id}`, {
      userId,
      id,
      title,
      completed,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 일부분만 업데이트 하기
const patchTodo = async ({
  userId,
  id,
  title,
  completed,
}: TodoType): Promise<TodoType | null> => {
  try {
    const res = await axios.patch<TodoType>(`${todoURL}${id}`, {
      userId,
      id,
      title,
      completed,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 삭제
const deleteTodo = async (id: number): Promise<boolean> => {
  try {
    const res = await axios.delete(`${todoURL}${id}`);
    console.log(res.data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
```

## type 관련 파일은 별도로 관리하자.

- `/src/types 폴더` 생성
- `/src/types/todo.ts` 파일 생성

```ts
interface TodoType {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}
```

## api 호출하는 컴포넌트 만들기

- ts로 작성했기 때문에 작성시 코드 힌트가 주어짐.
