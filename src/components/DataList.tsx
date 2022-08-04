import { useState, useEffect } from "react";
import api from "@api/index";
import { SKILLS_COLORS } from "../const";
import { Skill } from "../types";
import "@styles/components/data_list.scss";

const DataList = ({ Component, props, endPoint }: any) => {
  const [data, setData] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const apiData = await api.get(endPoint);
      console.log(apiData);
      setData(apiData.data);
    };

    loadSkills();
  }, [data]);
  
  return (
    <ul>
      {data.map((portfolioData, index) => (
        <li key={index}>
          {portfolioData.level !== undefined ? (
            <Component {...props = {...portfolioData}} color={SKILLS_COLORS[index]} />
          ) : (
            <Component {...props = {...portfolioData}} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
