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
