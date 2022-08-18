import { Helmet } from "react-helmet";
import SkillsContainer from "@containers/SkillsContainer";

const Skills = () => (
  <>
    <Helmet>
      <title>ASC | Habilidades</title>
      <meta name="title" content="ASC | Habilidades" />
      <meta name="description" content="Página de habilidades." />
    </Helmet>
    <SkillsContainer />
  </>
);

export default Skills;
