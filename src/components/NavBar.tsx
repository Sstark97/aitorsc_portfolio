import { Link, useLocation } from "react-router-dom";
import SocialNetworks from "@components/SocialNetworks";
import { NavBarProps, RouteNav } from "../types";
import { ROUTES } from "../const";
import "@styles/nav.scss";

const NavBar = ({ handleClickHamburger }: NavBarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="hamburger_nav">
        <div className="banner">
            <div className="banner_logo">A</div>
            <div className="banner_name">Aitor</div>
            <div className="banner_ocuppation">Full Stack Developer</div>
        </div>
        {ROUTES.map((route: RouteNav) => {
        const route_id = route.route_name === "Home" ? "first_element" : "";
        const link_class = pathname === route.route ? "link_focus" : ""
          return (
            <div id={route_id} key={route.route}>
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
      <SocialNetworks />
    </nav>
  );
};

export default NavBar;
