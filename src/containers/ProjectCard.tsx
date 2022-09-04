import { useState, memo } from "react";
import ProjectTextCard from "@components/ProjectTextCard";
import { ReactComponent as ExpandedIcon} from "@assets/expanded_icon.svg";
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
        />
      )}

      <ProjectTextCard name={name} description={description} repository={repository} web={web} />
      <ExpandedIcon className="expanded_icon" onClick={handleClickExpanded} />
    </section>
  );
});

export default ProjectCard;
