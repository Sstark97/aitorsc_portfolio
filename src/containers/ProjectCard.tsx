import { useState, memo, lazy } from "react";
import { Project } from "../types";
import "@styles/containers/project_card.scss";

const ProjectCard = memo(({ name, image, description, repository, web }: Project) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClickExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      className={
        expanded ? "project_card_container expanded" : "project_card_container"
      }
    >
      {image && (
        <img
          className="project_card_img"
          src={image}
          alt={name}
          loading="lazy"
        />
      )}

      <ProjectTextCard name={name} description={description} repository={repository} web={web} />
      <ExpandedIcon handleClickExpanded={handleClickExpanded} />
    </section>
  );
});

const ProjectTextCard = lazy(() => import("@components/ProjectTextCard"));
const ExpandedIcon = lazy(() => import("@components/ExpandedIcon"));

export default ProjectCard;
