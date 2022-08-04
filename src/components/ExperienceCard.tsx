import { Experience } from "../types";
import { formatDate } from "../utils";
import "@styles/components/experience_card.scss";

const ExperienceCard = ({ position, company, description, start_date, final_date}: Experience) => (
    <div className="experience_container">
        <h3>{position}</h3>
        <div>
            <p id="company">{ company }</p>
            <span>{`${formatDate(new Date(start_date))}`}</span>
            { final_date && <span> - {`${formatDate(new Date(final_date))}`}</span> }
        </div>
        <p>{ description }</p>
    </div>
);

export default ExperienceCard;