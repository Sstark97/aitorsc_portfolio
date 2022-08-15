import { useState } from "react";
import { Project } from "../types";
import ExpandedIcon from "@components/ExpandedIcon";
import ProjectTextCard from "@components/ProjectTextCard";
import "@styles/containers/project_card.scss";

const ProjectCard = ({ name, image, description, repository, web }: Project) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClickExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
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
    </div>
  );
};

export default ProjectCard;