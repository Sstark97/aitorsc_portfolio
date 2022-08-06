import { useState, useEffect } from "react";
import api from "@api/index";
import { SKILLS_COLORS } from "../const";
import { DataProps, Skill, Experience } from "../types";
import "@styles/components/data_list.scss";
import { AxiosResponse } from "axios";

const DataList = ({ MyComponent, props, endPoint }: DataProps) => {
  const [data, setData] = useState<Skill[] | Experience[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const apiData: AxiosResponse<Skill[] | Experience[]> = await api.get(endPoint);
      setData(apiData.data);
    };

    loadSkills();
  }, [data]);
  
  return (
    <ul>
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
