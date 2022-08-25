import { useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import ProjectsPresentation from "@components/ProjectsPresentation";
import ProjectCard from "@containers/ProjectCard";
import DataList from "@components/DataList";
import LoadingSpinner from "@components/LoadingSpinner";
import "@styles/containers/projects.scss";

const ProjectsContainer = () => {
  const { projectsData, loadData } = useGlobalContext();

  useEffect(() => {
    loadData("projects");
  }, [projectsData]);

  return (
    <section className="projects_container">
      {projectsData.length !== 0 ? (
        <>
          <ProjectsPresentation />

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
