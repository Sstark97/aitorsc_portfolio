import { useEffect, memo } from "react";
import { ChildrenProps } from "../types";
import { useGlobalContext } from "@hooks/useGlobalContext";
import Nav from "./Nav";
import "@styles/index.scss";

const Layout = memo(({ children }: ChildrenProps) => {
  const { loadPortfolio } = useGlobalContext();

  useEffect(() => {
    loadPortfolio();
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
