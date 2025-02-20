import { ReactNode } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

interface CeoProps {
  children?: ReactNode;
}
const Ceo = (): JSX.Element => {
  const location = useLocation();
  console.log(location.state);
  // 쿼리스트링
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      Ceo {name || "사장님"}님 나이: {age || "17"}살
    </div>
  );
};

export default Ceo;
