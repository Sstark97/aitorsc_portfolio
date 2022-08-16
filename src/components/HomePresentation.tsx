import { useState, useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import SocialNetworks from "@components/SocialNetworks";
import LoadingSpinner from "@components/LoadingSpinner";
import { AppState } from "../types";
import "@styles/components/home_presentation.scss";

const HomePresentation = () => {
  const [presentation, setPresentation] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { portFolio }: AppState = useGlobalContext();

  useEffect(() => {
    if (portFolio !== undefined) {
      setPresentation(portFolio.presentation);
      setName(portFolio.name);
    }
  }, [portFolio]);

  return (
    <div className="presentation_container">
      {presentation !== undefined ? (
        <>
          <div className="presentation_header">
            <p className="line__1">Hola, </p>
            <p className="line__2">soy {name},</p>
            <p className="line__3">Desarrollador Full Stack</p>
          </div>
          <div className="presentation">
            {presentation}
            <SocialNetworks />
          </div>
          <button className="presentation_btn">Contáctame</button>{" "}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default HomePresentation;
