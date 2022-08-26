import { Link, useLocation } from "react-router-dom";
import { RouteNav } from "../types";
import { ROUTES } from "../const";
import { useGlobalContext } from "@hooks/index";
import { ReactComponent as Sun} from "@assets/brightness.svg";
import { ReactComponent as Dark} from "@assets/dark.svg";
import "@styles/components/desktop_nav.scss";

const NavBar = () => {
  const { pathname } = useLocation();
  const { handleChangeTheme, theme } = useGlobalContext();

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
      {theme === "dark" ? <Sun onClick={() => handleChangeTheme()} /> : <Dark onClick={() => handleChangeTheme()} />}
    </nav>
  );
};

export default NavBar;
