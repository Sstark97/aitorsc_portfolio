import { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { ChildrenProps } from "../types";
import { ROUTES } from "../const";
import { useGlobalContext } from "@hooks/index";
import Nav from "./Nav";
import "@styles/index.scss";

const Layout = memo(({ children }: ChildrenProps) => {
  const { loadPortfolio, loadDarkMode } = useGlobalContext();
  const { pathname } = useLocation();
  
  useEffect(() => {
    loadPortfolio();
    loadDarkMode();
  }, []);

  return (
    <div className="container">
      {ROUTES.map((route) => route.route).includes(pathname) ? (
        <header>
          <Nav />
        </header>
      ) : null}
      <main>{children}</main>
    </div>
  );
});

export default Layout;
