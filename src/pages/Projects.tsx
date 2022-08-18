import { Helmet } from "react-helmet";
import ProjectsContainer from "@containers/ProjectsContainer";

const Projects = () => (
  <>
      {""}
    <Helmet>
      <title>ASC | Proyectos</title>
      <meta name="title" content="ASC | Proyectos" />
      <meta name="description" content="Página de proyectos realizados." />
    </Helmet>
    <ProjectsContainer />
  </>
);

export default Projects;
