import { Helmet } from "react-helmet-async";
import { useGlobalContext } from "@hooks/index";
import PortfolioContainer from "@containers/PortfolioContainer";
import Presentation from "@containers/Presentation";
import ProjectCard from "@containers/ProjectCard";
import DataList from "@components/DataList";
import LoadingSpinner from "@components/LoadingSpinner";

const Projects = () => {
  const { projectsData } = useGlobalContext();

  return (
    <>
      <Helmet>
        <title>Aitor Santana Cabrera - Proyectos</title>
        <meta name="title" content="Aitor Santana Cabrera - Proyectos" />
        <meta name="description" content="En esta página podrás consultar los proyectos que he realizado, una breve descripción sus repositorios de GitHub y los enlaces a sus respectivos despliegues" />
      </Helmet>
      <PortfolioContainer
        classContainer="projects_container"
        dataToLoad="projects"
        animationKey="projects"
        animationTime={2000}
      >
        {projectsData.length !== 0 ? (
          <>
            <Presentation classContainer="projects_header">
              {[<p key="presentation_1" className="projects__line">Proyectos</p>]}
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
      </PortfolioContainer>
    </>
  );
};

export default Projects;
