import { useEffect, useState } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import { SKILLS_COLORS } from "../const";
import { DataProps, AppState, Skill, Experience, Project, DataSelect } from "../types";
import "@styles/components/data_list.scss";

const DataList = ({ MyComponent, props, endPoint, column }: DataProps) => {
  const { skillData, experienceData, projectsData }: AppState = useGlobalContext();
  const [data, setData] = useState<Skill[] | Experience[] | Project[]>([]);

  const mySelect: DataSelect = {
    "skills": skillData,
    "work": experienceData,
    "projects": projectsData,
  }

  useEffect(() => {
    setData(mySelect[endPoint]);
  }, [data, endPoint, skillData, experienceData, projectsData]);
  
  return (
    <ul className={column ? "column_data" : ""}>
      {data.map((portfolioData, index) => (
        <li key={index}>
          { "level" in (portfolioData as Skill) ? (
            <MyComponent {...props = {...portfolioData}} color={SKILLS_COLORS[index]} />
          ) : (
            <MyComponent {...props = {...portfolioData}} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
