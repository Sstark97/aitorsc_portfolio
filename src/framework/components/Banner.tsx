import { ReactSVG } from "react-svg";
import Sun from "@assets/brightness.svg";
import Dark from "@assets/dark_mode.svg";
import "@styles/containers/nav.scss";

export default function Banner ( { name, theme }: any) {
  return (
    <section className="banner">
      <div className="banner_name">{name}</div>
      <div className="banner_ocuppation">
        Full Stack Developer{" "}
        <span>
          {theme === "dark" ? (
            <ReactSVG src={Sun} />
          ) : (
            <ReactSVG src={Dark} />
          )}
        </span>
      </div>
    </section>
  );
};

