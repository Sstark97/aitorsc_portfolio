import { memo } from "react";
import { ReactComponent as GitHub } from "@assets/github.svg";
import { ReactComponent as Link } from "@assets/link.svg";
import { Project } from "../types";
import "@styles/components/project_text_card.scss";

const ProjectTextCard = memo(
  ({ name, description, repository, web }: Project) => (
    <section className="project_text">
      <article className="text-content">
        <h1 className="title">{name}</h1>
        <div className="body-text">{description}</div>
        <div className="project_links">
          <a href={repository} target="_blank" rel="noopener noreferrer" aria-label="repository">
            <GitHub />
          </a>
          {web && (
            <a href={web} target="_blank" rel="noopener noreferrer" aria-label="website">
              <Link />
            </a>
          )}
        </div>
      </article>
    </section>
  )
);

export default ProjectTextCard;
