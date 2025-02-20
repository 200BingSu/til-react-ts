import { ReactNode } from "react";

interface HistoryProps {
  title: string;
  year: number;
  children?: ReactNode;
}
const History = ({ title, year }: HistoryProps): JSX.Element => {
  return (
    <div>
      History
      {title}
      {year}
    </div>
  );
};

export default History;
