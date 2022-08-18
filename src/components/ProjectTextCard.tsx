import { memo } from "react";
import { ReactComponent as GitHub }  from "@assets/github.svg";
import { ReactComponent as Link } from "@assets/link.svg";
import { Project } from "../types";
import "@styles/components/project_text_card.scss";

const ProjectTextCard = memo(({ name, description, repository, web }: Project) => (
    <div className="project_text">
    <div className="text-content">
      <h1 className="title">{name}</h1>
      <div className="body-text">
        {description}
      </div>
      <div className="project_links">
          <a href={repository} target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          {web && (
            <a href={web} target="_blank" rel="noopener noreferrer">
              <Link />
            </a>
          )}
      </div>
    </div>
  </div>
));

export default ProjectTextCard