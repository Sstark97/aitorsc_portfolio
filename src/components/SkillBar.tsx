import { useState, useEffect } from 'react';
import { SkillBarProps } from "../types";
import "@styles/components/skill_bar.scss";

const SkillBar = ({ name, level, color}: SkillBarProps) => {
    const [width, setWidth ] = useState("0%");

    useEffect(() => {
        let progress = 0;
        let interval = setInterval(() => {
            progress++;
            setWidth(`${progress}%`);

            if (progress === level * 10) {
                clearInterval(interval);
            }
        }, 30);
    }, []);


  return (
    <div>
      <span>{ name }</span>
      <div className="skill_bar_container">
        <div className="skill_point" style={{ width: width, background: color }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
