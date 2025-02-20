import React, { ReactNode } from "react";
import { PartnerType } from "../../App";

interface PartnerProps {
  children?: ReactNode;
  partnerList: PartnerType[];
}
const Partner: React.FC<PartnerProps> = ({ partnerList }) => {
  return (
    <div>
      <h1>파트너 리스트</h1>
      <ul>
        {partnerList.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.link}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Partner;
