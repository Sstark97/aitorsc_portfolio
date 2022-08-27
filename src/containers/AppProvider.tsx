import { createContext, useState, memo} from "react";
import api from "@api/index";
import {
  ChildrenProps,
  AppState,
  Portfolio,
  Skill,
  Experience,
  Project,
} from "../types";
import { AxiosResponse } from "axios";

export const context = createContext<AppState>({
  portFolio: {} as Portfolio,
  skillData: [] as Skill[],
  experienceData: [] as Experience[],
  projectsData: [] as Project[],
  theme: "dark" as string,
  loadPortfolio: () => {},
  loadData: (endPoint: string) => {},
  handleChangeTheme: () => {},
  loadDarkMode: () => {},
});

export const AppProvider = memo(({ children }: ChildrenProps) => {
  const { Provider } = context;

  const [portFolio, setPortfolio] = useState<Portfolio>({} as Portfolio);
  const [skillData, setSkillData] = useState<Skill[]>([]);
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [theme, setTheme] = useState<string>("dark");

  const loadPortfolio = async () => {
    const portfoloInLocale = localStorage.getItem("portfolio_data");

    console.log("portfoloInLocale", portfoloInLocale);
    
    if (portfoloInLocale) {
      setPortfolio(JSON.parse(portfoloInLocale));
    } else { 
      const { data }: { data: Portfolio } = await api.get("/user");
      setPortfolio(data);
      localStorage.setItem("portfolio_data", JSON.stringify(data));
    }
  };

  const loadData = async (endPoint: string) => {
    const dataLocale = localStorage.getItem(`${endPoint}_data`);
    let dataState: Skill[]  | Experience[] | Project[] = [];
    
    if(dataLocale === null) {
      const { data }: { data: Skill[]  | Experience[] | Project[]} = await api.get(endPoint);
      localStorage.setItem(`${endPoint}_data`, JSON.stringify(data));
      dataState = data;
    } else {
      dataState = JSON.parse(dataLocale);
    }

    if (endPoint === "skills") {
      setSkillData(dataState as Skill[]);
    } else if (endPoint === "work") {
      setExperienceData(dataState as Experience[]);
    } else if (endPoint === "projects") {
      setProjectsData(dataState as Project[]);
    }
  };

  const handleChangeTheme = () => {
    const theme: string | null = localStorage.getItem("theme");
    console.log(theme);
    if (theme === "dark" || null) {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };

  const loadDarkMode = () => {
    const theme: string | null = localStorage.getItem("theme");

    if (theme !== null) {
      document.documentElement.setAttribute("data-theme", theme);
      setTheme(theme);
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setTheme("dark");
    }
  };

  return (
    <Provider
      value={{
        portFolio,
        skillData,
        experienceData,
        projectsData,
        theme,
        loadPortfolio,
        loadData,
        handleChangeTheme,
        loadDarkMode,
      }}
    >
      {children}
    </Provider>
  );
});
