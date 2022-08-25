import { useState, useEffect, memo } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import HomePresentation from "@components/HomePresentation";
import LoadingSpinner from "@components/LoadingSpinner";
import { ReactComponent as Moon } from "@assets/moon.svg";
import { ChildrenProps, AppState } from "../types";
import "@styles/containers/home.scss";

const HomeContainer = memo(({ children }: ChildrenProps) => {
  const { portFolio }: AppState = useGlobalContext();

  useEffect(() => {}, [portFolio]);

  return (
    <section className="home_container">
      {portFolio === undefined ? (
        <LoadingSpinner />
      ) : (
        <>
          <HomePresentation />
          <Moon id="moon_svg" />
        </>
      )}
    </section>
  );
});

export default HomeContainer;
