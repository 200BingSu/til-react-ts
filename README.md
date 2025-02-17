# 이벤트의 기본 이해

## onClick

```ts
import React from "react";

const ComponentName = (): JSX.Element => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          console.log("안녕");
        }}
      >
        버튼
      </button>
      <form>
        <button
          type="button"
          onClick={() => {
            console.log("반가워");
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default ComponentName;
```

- event 확인

```ts
import React from "react";

const ComponentName = (): JSX.Element => {
  const divClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("클릭", e);
  };
  const btClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("클릭", e);
  };
  const formBtClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("클릭", e);
  };
  return (
    <div>
      <div onClick={e => divClick(e)}>클릭</div>
      <button type="button" onClick={e => btClick(e)}>
        버튼
      </button>
      <form>
        <button type="button" onClick={e => formBtClick(e)}>
          제출
        </button>
      </form>
    </div>
  );
};

export default ComponentName;
```

- 매개변수 타입 축약 버전

```ts
import React, { MouseEvent } from "react";

const ComponentName = (): JSX.Element => {
  const divClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log("클릭", e);
  };
  const btClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("클릭", e);
  };
  const formBtClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("클릭", e);
  };
  return (
    <div>
      <div onClick={e => divClick(e)}>클릭</div>
      <button type="button" onClick={e => btClick(e)}>
        버튼
      </button>
      <form>
        <button type="button" onClick={e => formBtClick(e)}>
          제출
        </button>
      </form>
    </div>
  );
};

export default ComponentName;
```

## onChange

```tsx
import { ChangeEvent } from "react";

const Hi = (): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" onChange={e => handleChange(e)} />
        <input type="checkbox" onChange={e => handleChangeCheck(e)} />
      </form>
    </div>
  );
};

export default Hi;
```

## onSubmit

```tsx
import { FormEvent } from "react";

const Hi = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}></form>
    </div>
  );
};

export default Hi;
```
