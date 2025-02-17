import { useState } from "react";

interface UserI {
  id: number;
  level: number;
  login?: boolean;
}
function App() {
  // useState의 초기값을 반드시 줘야한다.
  // 처음에는 추론보다는 제네릭으로 타입 변수를 지정해주자.
  const [count, setCount] = useState<number>(0);
  // 객체형 타입 정의하기

  const [user, setUser] = useState<UserI | null>(null);
  return <div>App</div>;
}

export default App;
