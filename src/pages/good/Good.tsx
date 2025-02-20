import { ReactNode } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

interface GoodProps {
  children?: ReactNode;
}
interface QueryData {
  name: string;
  age: string;
}
interface HiddenInfo {
  memo: string;
  good: string;
  favorite: string;
}
const Good = (): JSX.Element => {
  // 라우터 주소를 전달해서 이동시키기
  const navigate = useNavigate();
  // 1. 쿼리스트링 만들기
  const normalUrl = (name: string, age: number) => {
    const url = `/company/ceo?name=${name}&age=${age}`;
    navigate(url);
  };
  // 2. 문법을 좋아하는 사람들..
  const specialUrl = () => {
    const ageVal = 20;
    // 전송할 데이터
    const queryData: QueryData = { name: "홍", age: `${ageVal}` };
    // 데이터 직렬화(문자로 만들기)
    const queryStr = createSearchParams({ ...queryData }).toString();
    // 몰래 보내는 정보도 담을 수 있음.
    const fromUrl: HiddenInfo = {
      memo: "제품페이지에서 왔음",
      good: "제품1을 보고 있었음",
      favorite: "제품 1에 많은 관심을 가진 방문객임",
    };
    navigate(
      {
        pathname: "/company/ceo",
        search: queryStr,
      },
      { state: fromUrl },
    );
  };

  return (
    <div>
      <h1>제품 소개</h1>
      <div>
        <button type="button" className="bg-slate-300">
          navigate로 이동하기
        </button>
      </div>
      <div>
        <button type="button" className="bg-slate-300" onClick={specialUrl}>
          추천하는 이동하기
        </button>
      </div>
      <div className="flex gap-4">
        <Link to={"/good/1"}>제품1</Link>
        <Link to={"/good/delete/1"}>삭제</Link>
        <Link to={"/good/modify/1"}>수정</Link>
      </div>
      <div className="border-[3px] border-red-400">
        <h2> 레이아웃 유지하고 화면 출력</h2>
        {<Outlet />}
      </div>
    </div>
  );
};

export default Good;
