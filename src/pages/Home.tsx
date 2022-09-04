import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useGlobalContext } from "@hooks/index";
import Presentation from "@containers/Presentation";
import SocialNetworks from "../components/SocialNetWorks";
import { ReactComponent as Moon } from "@assets/moon.svg";
import { AppState } from "../types";
import PortfolioContainer from "../containers/PortfolioContainer";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [presentation, setPresentation] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { portFolio }: AppState = useGlobalContext();

  useEffect(() => {
    if (portFolio !== undefined) {
      setPresentation(portFolio.presentation);
      setName(portFolio.name);
    }
  }, [portFolio, presentation, name]);

  return (
    <>
      <Helmet>
        <title>ASC | Full Stack Developer</title>
        <meta name="title" content="ASC | Full Stack Developer" />
        <meta
          name="description"
          content="Soy Desarrollador Web Full-Stack, especializado en el stack MERN, que desarrollar su mayor pasión, programar webapps o cualquier tipo de software."
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="@assets/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <PortfolioContainer
        classContainer="home_container"
        animationKey="home"
        animationTime={7500}
      >
        {portFolio !== undefined ? (
          <Presentation home>
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
                <Link to="/contact" tabIndex={-1}>
                  Contáctame
                </Link>
              </button>
            </article>
            <Moon id="moon_svg" />
          </Presentation>
        ) : (
          <LoadingSpinner />
        )}
      </PortfolioContainer>
    </>
  );
};

export default Home;
