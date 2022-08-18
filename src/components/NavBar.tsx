import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialNetworks from "./SocialNetWorks";
import Banner from "./Banner";
import { NavBarProps, RouteNav } from "../types";
import { ROUTES } from "../const";
import "@styles/components/nav_bar.scss";

const NavBar = memo(({ handleClickHamburger }: NavBarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="hamburger_nav">
        <Banner />
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
});

export default NavBar;
