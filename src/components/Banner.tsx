import { useState, useEffect } from "react";
import { useGlobalContext } from "@hooks/index";
import { AppState } from "../types";
import { ReactComponent as Sun } from "@assets/brightness.svg";
import { ReactComponent as Dark } from "@assets/dark.svg";
import "@styles/containers/nav.scss";

const Banner = () => {
  const [name, setName] = useState<string>("");
  const { portFolio, theme, handleChangeTheme }: AppState = useGlobalContext();

  useEffect(() => {
    if (portFolio !== undefined) {
      setName(portFolio.name);
    }
  }, [portFolio]);

  return (
    <section className="banner">
      <div className="banner_name"> {name} </div>
      <div className="banner_ocuppation">
        Full Stack Developer{" "}
        <span>
          {theme === "dark" ? (
            <Sun onClick={() => handleChangeTheme()} />
          ) : (
            <Dark onClick={() => handleChangeTheme()} />
          )}
        </span>
      </div>
    </section>
  );
};

export default Banner;
