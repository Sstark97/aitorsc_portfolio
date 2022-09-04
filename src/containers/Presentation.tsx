import { cloneElement, Children, ReactElement } from "react";
import { PresentationProps } from "../types";
import "@styles/containers/presentation.scss";

const Presentation = ({
  classContainer,
  idContainer,
  children,
  home,
}: PresentationProps) => {
  return home ? (
    <>
      {Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement<any>)
      )}{" "}
    </>
  ) : (
    <section id={idContainer} className={classContainer}>
      {Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement<any>)
      )}
    </section>
  );
};

export default Presentation;
