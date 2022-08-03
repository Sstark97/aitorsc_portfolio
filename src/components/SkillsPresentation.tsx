import { useState, useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import { AppState } from "../types";
import "@styles/components/skills_presentation.scss";

const SkillsPresentation = () => {
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
    <>
      <div className="skills_header">
        <p className="skills_line__1">{"Habilidades &"}</p>
        <p className="skills_line__2">Experiencia</p>
      </div>
      <div className="skills_presentation">
        <p>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
        </p>
        <p>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
        </p>
        <p>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
        </p>
        <p>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups.
        </p>
      </div>
    </>
  );
};

export default SkillsPresentation;
