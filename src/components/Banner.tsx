import { useGlobalContext } from "@hooks/index";
import { AppState } from "../types";
import { ReactComponent as Sun } from "@assets/brightness.svg";
import { ReactComponent as Dark } from "@assets/dark.svg";
import "@styles/containers/nav.scss";

const Banner = () => {
  const { theme, handleChangeTheme }: AppState = useGlobalContext();

  return (
    <section className="banner">
      <div className="banner_name"> Aitor </div>
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
