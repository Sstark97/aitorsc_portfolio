import { useState, useEffect, memo} from 'react';
import { useAnimation } from '@hooks/index';
import { SkillBarProps } from "../types";
import "@styles/components/skill_bar.scss";

const SkillBar = memo(({ name, level, color}: SkillBarProps) => {
    const [width, setWidth ] = useState("0%");
    const { isAnimation } = useAnimation("skills");

    useEffect(() => {
      if(!isAnimation()) {
        let progress = 0;
        let interval = setInterval(() => {
            progress++;
            setWidth(`${progress}%`);

            if (progress === level * 10) {
                clearInterval(interval);
            }
        }, 30);
      } else {
        setWidth(`${level * 10}%`);
      }
    }, []);


  return (
    <>
      <span>{ name }</span>
      <section className="skill_bar_container">
        <div className="skill_point" style={{ width: width, background: color }}></div>
      </section>
    </>
  );
});

export default SkillBar;
