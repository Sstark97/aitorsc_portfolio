
import { cloneElement, Children, ReactElement } from "react";
import { PresentationProps } from "../types";
import "@styles/containers/presentation.scss";

const Presentation = ({ classContainer, idContainer, children }: PresentationProps)=> {

  return (
    <section id={idContainer} className={classContainer}>
        {Children.toArray(children).map((child) => cloneElement(child as ReactElement<any>))} 
    </section>
  )
}

export default Presentation;