import { useEffect } from "react";
import { useGlobalContext, useAnimation } from "@hooks/index";
import Presentation from "./Presentation";
import SkillBar from "@components/SkillBar";
import ExperienceCard from "@components/ExperienceCard";
import LoadingSpinner from "@components/LoadingSpinner";
import DataList from "@components/DataList";
import "@styles/containers/skills.scss";

const SkillsContainer = () => {
  const { skillData, experienceData, loadData } = useGlobalContext();
  const { isAnimation, setAnimationInLocalStorage } = useAnimation("skills");

  useEffect(() => {
    ["skills", "work"].forEach((endPoint) => loadData(endPoint));
  }, []);

  useEffect(() => {
    setAnimationInLocalStorage(5000);
  } , []);

  return (
    <section id={isAnimation() ? "not_animated" : ""} className="skills_container">
      {skillData.length !== 0 || experienceData.length !== 0 ? (
        <>
          <Presentation classContainer="skills_presentation">
            <article className="skills_header">
              <p className="skills_line__1">{"Habilidades &"}</p>
              <p className="skills_line__2">Experiencia</p>
            </article>
            <p id="first_skill_p">
              Desde que comencé mi viaje como desarrollador hace casi 4 años, he
              trabajado como free-lance en proyectos independientes, participado
              en hackathons, trabajado en remoto para una start-up y he
              colaborado con personas talentosas para crear aplicaciones web.
            </p>
            <p>
              Desarrollo aplicaciones responsive rápidas y fáciles de usar,
              siguiendo las mejores prácticas. Mi área principal es el Front-End
              con React, TypeScript, Redux, Material UI, creando aplicaciones
              web.
            </p>
            <p>
              Además conozco algunas tecnologías usadas en el Back-End como
              Express, Flask, MongoDB, SQLite, MariaDB, con las que he
              desarrolado APIs Rest-Full o aplicaciones FullStack.
            </p>
            <p>
              <span>Puedes visitar mi perfil de </span>
              <a href="https://www.linkedin.com/in/aitorscinfo/">Linkedln</a>
              <span>
                para conocer más detalles sobre mi Experiencia o contactarme.
              </span>
            </p>
          </Presentation>

          <article className="skills_data_container">
            <DataList
              MyComponent={SkillBar}
              props={["name", "level"]}
              endPoint="skills"
              column
            />
            <DataList
              MyComponent={ExperienceCard}
              props={[
                "position",
                "company",
                "description",
                "start_date",
                "final_date",
                "current",
              ]}
              endPoint="work"
            />
          </article>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default SkillsContainer;
