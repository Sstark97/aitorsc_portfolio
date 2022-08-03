import { ChildrenProps } from "../types";
import SkillsPresentation from "@components/SkillsPresentation";
import SkillsList from "@components/SkillsList";
import "@styles/containers/skills.scss";

const SkillsContainer  = ({ children }: ChildrenProps) => (
    <div className="skills_container">  
        <SkillsPresentation />
        <SkillsList />
    </div>
);

export default SkillsContainer;