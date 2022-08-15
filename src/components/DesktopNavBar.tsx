import { Link, useLocation } from "react-router-dom";
import { RouteNav } from "../types";
import { ROUTES } from "../const";
import "@styles/components/desktop_nav.scss";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="desktop_nav">
        {ROUTES.map((route: RouteNav) => {
        const route_id = route.route_name === "Home" ? "first_element" : "";
        const link_class = pathname === route.route ? "link_focus" : ""
          return (
            <div id={route_id} key={route.route}>
              <Link
                to={route.route}
                className={link_class}
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
