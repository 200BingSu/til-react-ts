import axios from "axios";
const todoURL = "https://jsonplaceholder.typicode.com/todos/";

export interface TodoType {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}
type TodoType2 = Omit<TodoType, "id">;

// 자료 1개 호출하여 리턴 받기
export const getOneTodo = async (id: number): Promise<TodoType | null> => {
  try {
    // axios에서도 타입을 잡아줘야한다.
    const res = await axios.get<TodoType>(`${todoURL}${id}`);
    // console.log(res.data);
    return res.data; // 배열에서 첫 번째 요소 반환
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // 기본값 반환
  }
};

// 자료 여러개 호출해서 리턴받기
export const getTodos = async (): Promise<TodoType[] | null> => {
  try {
    const res = await axios.get<TodoType[]>(todoURL);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 자료 1개 추가하기
export const postTodo = async ({
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
export const putTodo = async ({
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
export const patchTodo = async ({
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
export const deleteTodo = async (id: number): Promise<boolean> => {
  try {
    const res = await axios.delete(`${todoURL}${id}`);
    console.log(res.data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
