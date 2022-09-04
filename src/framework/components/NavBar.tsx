import Banner from "@f-components/Banner";
import SocialNetworks from "./SocialNetWorks";
import type { NavBarProps, RouteNav } from "../../types";
import { ROUTES } from "../../const";
import "@styles/components/nav_bar.scss";

export default function NavBar({ handleClickHamburger, pathname }: any) {

  return (
    <nav className="hamburger_nav">
        <Banner name="Pepe" theme="dark"/>
        {ROUTES.map((route: RouteNav) => {
        const route_id = route.route_name === "Home" ? "first_element" : "";
        const link_class = pathname === route.route ? "link_focus" : ""
          return (
            <div id={route_id} key={route.route}>
              <a
                href={route.route}
                className={link_class}
                onClick={handleClickHamburger}
              >
                {route.route_name}
              </a>
            </div>
          );
      })}
      <SocialNetworks />
    </nav>
  );
};

