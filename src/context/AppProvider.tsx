import { memo, useState } from "react";
import { isInLocale, secureStorage } from "../utils";
import { context } from "./context";
import {
  ChildrenProps,
  Portfolio,
  Skill,
  Experience,
  Project,
  LoadDataObject
} from "../types";

export const AppProvider = memo(({ children }: ChildrenProps) => {
  const { Provider } = context;

  const [portFolio, setPortfolio] = useState<Portfolio>({} as Portfolio);
  const [skillData, setSkillData] = useState<Skill[]>([]);
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [theme, setTheme] = useState<string>("dark");

  const loadDataOption: LoadDataObject = {
    "user":setPortfolio,
    "skills": setSkillData,
    "work": setExperienceData,
    "projects": setProjectsData,
  }

  const loadData = async (endPoint: string) => {
    const dataState = await isInLocale<Portfolio | Skill[] | Experience[] | Project[]>(`${endPoint}_data`,endPoint);
    loadDataOption[endPoint](dataState);
  };

  const isDarkMode = () => secureStorage.getItem("theme") === "dark" || secureStorage.getItem("theme") === undefined;
  

  const handleChangeTheme = () => {
    secureStorage.setItem("theme", isDarkMode() ? "light" : "dark");
    setTheme(isDarkMode() ? "light" : "dark");
    loadDarkMode();
  };

  const loadDarkMode = () => document.documentElement.setAttribute("data-theme", isDarkMode() ? "dark" : "light");

  return (
    <Provider
      value={{
        portFolio,
        skillData,
        experienceData,
        projectsData,
        theme,
        loadData,
        handleChangeTheme,
        loadDarkMode,
      }}
    >
      {children}
    </Provider>
  );
});
