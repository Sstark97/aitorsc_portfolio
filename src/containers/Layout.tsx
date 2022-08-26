import { useEffect, memo } from "react";
import { ChildrenProps } from "../types";
import { useGlobalContext } from "@hooks/index";
import Nav from "./Nav";
import "@styles/index.scss";

const Layout = memo(({ children }: ChildrenProps) => {
  const { loadPortfolio, loadDarkMode } = useGlobalContext();

  useEffect(() => {
    loadPortfolio();
    loadDarkMode();
  }, []);

  return (
    <div className="container">
      <header>
        <Nav />
      </header>

      <main>{children}</main>
    </div>
  );
});

export default Layout;
