import { useEffect } from "react";
import { ChildrenProps } from "../types";
import { useGlobalContext } from "@containers/AppProvider";
import Nav from "./Nav";
import "@styles/index.scss";

const Layout = ({ children }: ChildrenProps) => {
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
};

export default Layout;
