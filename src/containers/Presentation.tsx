
import { cloneElement, Children, ReactElement } from "react";
import { PresentationProps } from "../types";
import "@styles/containers/presentation.scss";

const Presentation = ({ classContainer, children }: PresentationProps)=> {

  return (
    <section className={classContainer}>
        {Children.toArray(children).map((child) => cloneElement(child as ReactElement<any>))}
    </section>
  )
}

export default Presentation;