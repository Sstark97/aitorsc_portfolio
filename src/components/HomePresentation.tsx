import { useState, useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import { AppState } from "../types";

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
      <div className="presentation_header">
        <p>Hola, </p>
        <p>soy { name },</p>
        <p>Full Stack Developer</p>
      </div>
      <div className="presentation">{ presentation }</div>
    </div>
  );
};

export default HomePresentation;
