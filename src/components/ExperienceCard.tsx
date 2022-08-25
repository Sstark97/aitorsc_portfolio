import { memo } from "react";
import { Experience } from "../types";
import { formatDate } from "../utils";
import "@styles/components/experience_card.scss";

const ExperienceCard = memo(({ position, company, description, start_date, final_date}: Experience) => (
    <section className="experience_container">
        <h3>{position}</h3>
        <article>
            <p id="company">{ company }</p>
            <span>{`${formatDate(new Date(start_date))}`}</span>
            { final_date && <span> - {`${formatDate(new Date(final_date))}`}</span> }
        </article>
        <p>{ description }</p>
    </section>
));

export default ExperienceCard;