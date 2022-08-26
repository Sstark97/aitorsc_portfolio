import { useState, useEffect } from "react";
import { useGlobalContext } from "@hooks/index";
import { AppState } from "../types";
import "@styles/containers/nav.scss";

const Banner = () => {
  const [name, setName] = useState<string>("");
  const { portFolio }: AppState = useGlobalContext();

  useEffect(() => {
    if(portFolio !== undefined) {
      setName(portFolio.name);
    }
  }, [portFolio]);

  return (
    <section className="banner">
      <div className="banner_name"> { name } </div>
      <div className="banner_ocuppation">Full Stack Developer</div>
    </section>
  );
};

export default Banner;
