import { Link, useLocation } from "react-router-dom";
import { NavBarProps, RouteNav } from "../types";
import { ROUTES } from "../const";
import "@styles/nav.scss";

const NavBar = ({ handleClickHamburger }: NavBarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="hamburger_nav">
      {ROUTES.map((route: RouteNav) => {
        const route_class = route.route_name === "Home" ? "first_element" : "";
        const link_class = pathname === route.route ? "link_focus" : ""
          return (
            <div className={route_class}>
              <Link
                to={route.route}
                className={link_class}
                onClick={handleClickHamburger}
              >
                {route.route_name}
              </Link>
            </div>
          );
      })}
    </nav>
  );
};

export default NavBar;
