import type { RouteNav } from "../../types";
import { ROUTES } from "../../const";
import { ReactSVG } from "react-svg";
import Sun from "@assets/brightness.svg";
import Dark from "@assets/dark_mode.svg";
import "@styles/components/desktop_nav.scss";

export default function NavBar({pathname, handleChangeTheme, theme }: any) {

  return (
    <nav className="desktop_nav">
        {ROUTES.map((route: RouteNav) => {
        const route_id = route.route_name === "Home" ? "first_element" : "";
        const link_class = pathname === route.route ? "link_focus" : ""
          return (
            <div id={route_id} key={route.route}>
              <a
                href={route.route}
                className={link_class}
              >
                {route.route_name}
              </a>
            </div>
          );
      })}
      {theme === "dark" ? <ReactSVG src={Sun} />: <ReactSVG src={Dark} />}
    </nav>
  );
};

