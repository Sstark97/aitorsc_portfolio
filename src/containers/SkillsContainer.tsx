import { ChildrenProps } from "../types";
import SkillsPresentation from "@components/SkillsPresentation";
import SkillBar from "@components/SkillBar";
import DataList from "@components/DataList";
import "@styles/containers/skills.scss";

const SkillsContainer  = ({ children }: ChildrenProps) => (
    <div className="skills_container">  
        <SkillsPresentation />
        <DataList Component={SkillBar} props={["name", "level"]} endPoint="skills"/>
    </div>
);

export default SkillsContainer;