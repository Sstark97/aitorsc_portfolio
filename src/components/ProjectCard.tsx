import { BsGithub } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { Project } from "../types";
import "@styles/components/project_card.scss";

const ProjectCard = ({
  name,
  image,
  description,
  repository,
  web,
}: Project) => {
  return (
    <div className="project_card_container">
      {image && (
        <img
          className="project_card_img"
          src={image}
          alt={name}
          loading="lazy"
        />
      )}
      <h3>{name} </h3>
      <div className="project_info">
        <p>{description}</p>
        <div className="project_links">
          <a href={repository}>
            <BsGithub />
          </a>

          {web && (
            <a href={web}>
              <AiOutlineGlobal />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
