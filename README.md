# 컴포넌트의 이해

- App.tsx

```ts
const App = () => {
  return <div>App</div>;
};

export default App;
```

- 정의 1

```ts
import React from "react";

const App: React.FC = () => {
  return <div>App</div>;
};

export default App;
```

- 정의 2(수업 내 이 형태를 사용)

```ts
import React from "react";

const App = (): JSX.Element => {
  return <div>App</div>;
};

export default App;

```

- 정의 3

```ts
import React from "react";

const App: React.FC = (): JSX.Element => {
  return <div>App</div>;
};

export default App;
```

## props 전달하기

- `components/Hi.tsx`
- 단계 1

```tsx
const Hi = (props: { age: number; name: string }): JSX.Element => {
  return (
    <div>
      Hi {props.age} {props.name}
    </div>
  );
};

export default Hi;
```

- 단계 2 (interface로 props 정의하기)

```tsx
interface HiProps {
  age: number;
  name: string;
}
const Hi = (props: HiProps): JSX.Element => {
  return (
    <div>
      Hi {props.age} {props.name}
    </div>
  );
};

export default Hi;
```

- 단계 3 (props 객체 구조 분해 할당)

```tsx
interface HiProps {
  age: number;
  name: string;
}
const Hi = ({ age, name }: HiProps): JSX.Element => {
  return (
    <div>
      Hi {age} {name}
    </div>
  );
};

export default Hi;
```

- 단계 4 (children에 대해 옵션으로 첨부해두기)

```tsx
import React from "react";

interface HiProps {
  age: number;
  name: string;
  children?: React.ReactNode;
}
const Hi = ({ age, name }: HiProps): JSX.Element => {
  return (
    <div>
      Hi {age} {name}
    </div>
  );
};

export default Hi;
```

## Props로 useState 변수 전달하기.

- App.tsx(일반변수, state, children을 전달)

```tsx
import { useState } from "react";
import Hi from "./components/Hi";

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      App
      <Hi age={10} name="홍길동" count={count} setCount={setCount}>
        <p>안녕하세요</p>
      </Hi>
    </div>
  );
};

export default App;
```

- count와 setCount가 현재 컴포넌트에 정의가 되어있지 않음
- interface Hiprops 조건에 맞지 않음(형태가 맞지 않는다.)

```tsx
import React, { Dispatch, SetStateAction } from "react";

interface HiProps {
  age: number;
  name: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  children?: React.ReactNode;
}
const Hi = ({ age, name }: HiProps): JSX.Element => {
  return (
    <div>
      Hi {age} {name}
    </div>
  );
};

export default Hi;
```

- set류의 useState를 직접 전달하는 것은 좋지 않다.

```ts
import { useState } from "react";
import Hi from "./components/Hi";

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const add = (): void => {
    const temp = count + 1;
    setCount(temp);
  };
  const minus = (num: number): void => {
    const temp = count - num;
    setCount(temp);
  };
  return (
    <div>
      App
      <Hi
        age={10}
        name="홍길동"
        count={count}
        setCount={setCount}
        add={add}
        minus={minus}
      >
        <p>안녕하세요</p>
      </Hi>
    </div>
  );
};

export default App;
```

```ts
import React, { Dispatch, SetStateAction } from "react";

interface HiProps {
  age: number;
  name: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  add: () => void;
  minus: (num: number) => void;
  children?: React.ReactNode;
}
const Hi = ({ age, name }: HiProps): JSX.Element => {
  return (
    <div>
      Hi {age} {name}
    </div>
  );
};

export default Hi;
```
