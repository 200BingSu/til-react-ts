import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface HeaderProps {
  children?: ReactNode;
}
const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <div>
      Header
      <div className="flex">
        <ul className="flex gap-5">
          <li>
            <NavLink
              className={isActive => (isActive ? "active-link" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isActive => (isActive ? "active-link" : "")}
              to="/good"
            >
              Good
            </NavLink>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
};

export default Header;
