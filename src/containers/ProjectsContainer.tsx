import ProjectsPresentation from "@components/ProjectsPresentation"
import ProjectCard from "@components/ProjectCard";
import DataList from "@components/DataList";
import "@styles/containers/projects.scss";

const ProjectsContainer = () => {
  return (
    <div className="projects_container">
      <ProjectsPresentation />

      <div className="projects">
      <DataList
        MyComponent={ProjectCard}
        props={["name", "description", "repository", "image", "web"]}
        endPoint="projects"
      />
      </div>
    </div>
  )
};

export default ProjectsContainer;