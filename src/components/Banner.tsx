import { useState, useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import "@styles/nav.scss";

const Banner = () => {
  const [name, setName] = useState<string>("");
  const { portFolio } = useGlobalContext();

  useEffect(() => {
    if(portFolio !== undefined) {
      setName(portFolio.name);
    }
  }, [portFolio]);

  return (
    <div className="banner">
      <div className="banner_logo">A</div>
      <div className="banner_name"> { name } </div>
      <div className="banner_ocuppation">Full Stack Developer</div>
    </div>
  );
};

export default Banner;
