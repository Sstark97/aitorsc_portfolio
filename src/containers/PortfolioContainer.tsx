import { useEffect, memo, cloneElement, Children, ReactElement } from "react";
import { useGlobalContext, useAnimation } from "@hooks/index";
import { PortfolioContainerProps } from "../types";
import "@styles/containers/home.scss";
import "@styles/containers/projects.scss";
import "@styles/containers/skills.scss";
import "@styles/containers/contact.scss";

const PortfolioContainer = memo(
  ({
    children,
    classContainer,
    dataToLoad,
    animationKey,
    animationTime,
  }: PortfolioContainerProps) => {

    const { loadData } = useGlobalContext();
    const { isAnimation, setAnimationInLocalStorage } =
      useAnimation(animationKey);

    useEffect(() => {
      if (typeof dataToLoad === "string") {
        loadData(dataToLoad);
      } else if(dataToLoad){
        dataToLoad.forEach((data) => loadData(data));
      }
    }, []);

    useEffect(() => {
      if(!isAnimation()){
        console.log("animation");
        console.log(animationKey);
        setAnimationInLocalStorage(animationTime);
      }
    }, []);

    return (
      <section
        id={isAnimation() ? "not_animated" : ""}
        className={classContainer}
      >
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement<any>)
        )}
      </section>
    );
  }
);

export default PortfolioContainer;
