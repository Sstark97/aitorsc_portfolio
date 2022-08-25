import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@containers/AppProvider";
import Presentation from "@components/Presentation";
import SocialNetworks from "@components/SocialNetworks";
import HomePresentation from "@components/HomePresentation";
import LoadingSpinner from "@components/LoadingSpinner";
import { ReactComponent as Moon } from "@assets/moon.svg";
import { ChildrenProps, AppState } from "../types";
import "@styles/containers/home.scss";
import "@styles/components/home_presentation.scss";

const HomeContainer = memo(({ children }: ChildrenProps) => {
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
    <Presentation
      classContainer="home_container"
      loading={portFolio === undefined}
    >
      {portFolio === undefined ? (
        <LoadingSpinner />
      ) : (
        <>
          <article className="presentation_container">
            <div className="presentation_header">
              <p className="line__1">Hola, </p>
              <p className="line__2">soy {name},</p>
              <p className="line__3">Desarrollador Full Stack</p>
            </div>
            <div className="presentation">
              {presentation}
              <SocialNetworks />
            </div>
            <button className="presentation_btn">
              <Link to="/contact">Contáctame</Link>
            </button>
          </article>
          <Moon id="moon_svg" />
        </>
      )}
    </Presentation>
  );
});

export default HomeContainer;
