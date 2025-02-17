# CRA로 프로젝트 생성하기

- Vite와는 초기 구성이 다름.
- 회사에서는 CRA로 구성한 경우가 많다.

# CRA React + TypeScript

## 프로젝트 생성

- js 버전 마이그레이션

```bash
npm install -g create-react-app@latest
npx create-react-app .
```

- 위 과정에서 오류가 발생한다면?

```bash
$ npx create-react-app .

Creating a new React app in D:\student\21.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1326 packages in 41s

268 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: 21@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\Administrator\AppData\Local\npm-cache\_logs\2025-02-11T09_41_48_559Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\Administrator\AppData\Local\npm-cache\_logs\2025-02-11T09_41_48_559Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed
```

- 해결책

```txt
해당 오류는 React 19을 설치하면서 @testing-library/react@13.4.0 패키지가 React 18을 요구하기 때문에 발생한 의존성 충돌 문제입니다.
```

- React 18로 버전 다운그레이드

```bash
npm uninstall react react-dom react-scripts
npm install react@18 react-dom@18 react-scripts
```

- 파일 정리

  - setUpTests.js 삭제
  - App.test.js 삭제
  - reportWebVitals.js 삭제
  - logo.svg 삭제

- 프로젝트 실행

```bash
npm run start
```

- typescript npm 설치

```bash
npm i @types/react @types/react-dom @types/node @types/jest
```

- tsconfig.json 파일 생성

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "strict": true,
    "allowJs": true,
    "esModuleInterop": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

- /src/index.js 를 index.tsx 로 변경
- /src/App.js 를 App.tsx 로 변경

- index.tsx 최종 코드

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
```

# useState

- vscode 내 타입 추론을 참고해보기

```ts
// useSate 사용시 가능하면 초기값을 설정할 것
const [text, setText] = useState<string>("");
const [name, setName] = useState<string>("");
const [isLogin, setIsLogin] = useState<boolean>(false);
const [member, setMember] = useState<string[]>([]);
const [info, setInfo] = useState<null>(null);
const [age, setAge] = useState<number>(0);
const [user, setUser] = useState<{ name: string; age: number }>({
  name: "",
  age: 0,
});
```

- 객체 리터럴 형태라면 `interface` 사용을 고려해보자.
- 추후 interface는 별ㄷ의 파일에서 관리하자.

```ts
const [idol, setIdol] = useState<Idol>({
  name: "",
  age: 0,
});

const [todos, setTodos] = useState<ITodo[]>([]);
```

# 컴포넌트 살펴보기

```ts
interface 컴포넌트명Props = {
  children?:React.ReactNode; // children을 사용하지 않더라도 기본적으로 넣어두기
}

const 컴포넌트명 = ({속성, 속성}:인터페이스명):JSX.Element=>{
  return <div></div>
}
```

- `/src/components/Title.tsx`
- 컴포넌트 코딩 컨벤션
  : Props는 `컴포넌트명+Props`로 명명

```ts
interface TitleProps {
  age: number;
  job: string;
  children?: React.ReactNode;
}
```

- `JSX.Element` 버전

```ts
/**
 * JSX.Element
 * - 자동으로 children 속성을 제공하지 않는다.
 * - 직접 관리해야 한다.
 */
const Title = ({ age, job, children }: TitleProps): JSX.Element => {
  return (
    <div>
      Title
      <div>
        Title {age} {job}
        {children}
      </div>
    </div>
  );
};
```

- `React.FC` 버전

```ts
/**
 * React.FC는 React.FunctionComponent를 말한다.
 * - 자동으로 children 속성을 제공한다.
 * - children이 필요하지 않아도 제공한다.
 */
const Title: React.FC<TitleProps> = ({ age, job, children }) => {
  return (
    <div>
      Title {age} {job}
      {children}
    </div>
  );
};
```

- `JSX.Element + React.Fc`

```ts
const Title: React.FC<TitleProps> = ({
  age,
  job,
  children,
}: TitleProps): JSX.Element => {
  return (
    <div>
      Title {age} {job}
      {children}
    </div>
  );
};
```
