import { useState, useEffect, useId} from 'react';
import SkillBar from "./SkillBar";
import api from '@api/index';
import { SKILLS_COLORS } from '../const';
import "@styles/components/skills_list.scss";

const SkillsList = () => {
    const [skills, setSkills] = useState<any[]>([]);

    useEffect(() => {
        const loadSkills =async () => { 
            const data = await api.get("skills");
            setSkills(data.data);
        }

        loadSkills();
    }, [skills]);
  return (
    <ul>
        {skills.map((skill, index) => (
            <li key={skill.name}>
                <SkillBar name={ skill.name } level={ skill.level } color={SKILLS_COLORS[index]}/>
            </li>
        ))}
    </ul>
  )
};

export default SkillsList;
