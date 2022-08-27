import { useEffect } from "react";
import { useGlobalContext, useAnimation } from "@hooks/index";
import Presentation from "./Presentation";
import ProjectCard from "@containers/ProjectCard";
import DataList from "@components/DataList";
import LoadingSpinner from "@components/LoadingSpinner";
import "@styles/containers/projects.scss";

const ProjectsContainer = () => {
  const { projectsData, loadData } = useGlobalContext();
  const { isAnimation, setAnimationInLocalStorage } = useAnimation("projects");

  useEffect(() => {
    loadData("projects");

  }, []);

  useEffect(() => {

    setAnimationInLocalStorage(5000);

  } , []);

  return (
    <section id={isAnimation() ? "not_animated" : ""} className="projects_container">
      {projectsData.length !== 0 ? (
        <>
          <Presentation classContainer="projects_header">
            {[<p className="projects__line">Proyectos</p>]}
          </Presentation>

          <div className="projects">
            <DataList
              MyComponent={ProjectCard}
              props={["name", "description", "repository", "image", "web"]}
              endPoint="projects"
            />
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default ProjectsContainer;
