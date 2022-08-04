import SkillsPresentation from "@components/SkillsPresentation";
import SkillBar from "@components/SkillBar";
import ExperienceCard from "@components/ExperienceCard";
import DataList from "@components/DataList";
import "@styles/containers/skills.scss";

const SkillsContainer  = () => (
    <div className="skills_container">  
        <SkillsPresentation />
        <DataList Component={SkillBar} props={["name", "level"]} endPoint="skills"/>
        <DataList Component={ExperienceCard} props={["position", "company", "description", "start_date", "final_date", "current"]} endPoint="work"/>
    </div>
);

export default SkillsContainer;