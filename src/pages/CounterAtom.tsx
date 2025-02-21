import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom, loginAtom } from "../atoms/countAtom";
import { Button } from "antd";
import { countSelector } from "../selectors/countSeletor";

interface CounterAtomProps {
  children?: ReactNode;
}
const CounterAtom = (): JSX.Element => {
  const [count, setCount] = useRecoilState(countAtom);
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const nowCountValue = useRecoilValue(countSelector);
  return (
    <div>
      <h1>CounterAtom: {isLogin ? "로그인 상태" : "로그아웃 상태"}</h1>
      <div>
        <Button onClick={() => setIsLogin(true)}>로그인</Button>
        <Button onClick={() => setIsLogin(false)}>로그아웃</Button>
      </div>
      <div>
        <h3 className="text-red-600">{count}</h3>
        {/* useRecoilState를 직접 조작 */}
        <h3>{count % 2 === 0 ? "짝수" : "홀수"}</h3>
        {/* selector을 통한 조작 */}
        <h3>{nowCountValue}</h3>
        <Button
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          증가
        </Button>
        <Button
          onClick={() => {
            setCount(prev => prev - 1);
          }}
        >
          감소
        </Button>
      </div>
    </div>
  );
};

export default CounterAtom;
