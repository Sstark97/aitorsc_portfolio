import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext, useAnimation } from "@hooks/index";
import Presentation from "./Presentation";
import SocialNetworks from "../components/SocialNetWorks";
import { ReactComponent as Moon } from "@assets/moon.svg";
import { ChildrenProps, AppState } from "../types";
import "@styles/containers/home.scss";

const HomeContainer = memo(({ children }: ChildrenProps) => {
  const [presentation, setPresentation] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { portFolio }: AppState = useGlobalContext();
  const { isAnimation, setAnimationInLocalStorage } = useAnimation("home");

  useEffect(() => {
    if (portFolio !== undefined) {
      setPresentation(portFolio.presentation);
      setName(portFolio.name);

      if(!isAnimation()) {
        setAnimationInLocalStorage(7500);
      }
    } 
  }, [portFolio]);

  return (
    <Presentation
      classContainer="home_container"
      idContainer={isAnimation() ? "not_animated" : ""}
    >
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
    </Presentation>
  );
});

export default HomeContainer;
