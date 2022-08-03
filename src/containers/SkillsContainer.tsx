import { ChildrenProps } from "../types";
import SkillsPresentation from "@components/SkillsPresentation";
import "@styles/containers/skills.scss";

const SkillsContainer  = ({ children }: ChildrenProps) => (
    <div className="skills_container">  
        <SkillsPresentation />
    </div>
);

export default SkillsContainer;