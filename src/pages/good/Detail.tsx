import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface DetailProps {
  children?: ReactNode;
  title: string;
}
const Detail = ({ title }: DetailProps): JSX.Element => {
  const { id } = useParams();

  return (
    <div>
      {title}의 {id}번 상세 제품 정보
    </div>
  );
};

export default Detail;
