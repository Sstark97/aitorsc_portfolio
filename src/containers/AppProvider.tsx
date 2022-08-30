import { createContext, useState, memo} from "react";
import api from "@api/index";
import { secureStorage } from "../utils";
import {
  ChildrenProps,
  AppState,
  Portfolio,
  Skill,
  Experience,
  Project,
} from "../types";

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
    const portfoloInLocale = secureStorage.getItem("portfolio_data");
    
    if (portfoloInLocale) {
      setPortfolio(portfoloInLocale);
    } else { 
      const { data }: { data: Portfolio } = await api.get("/user");
      setPortfolio(data);
      secureStorage.setItem("portfolio_data", data);
    }
  };

  const loadData = async (endPoint: string) => {
    const dataLocale = secureStorage.getItem(`${endPoint}_data`);
    let dataState: Skill[]  | Experience[] | Project[] = [];
    
    if(dataLocale === null || dataLocale === undefined) {
      const { data }: { data: Skill[]  | Experience[] | Project[]} = await api.get(endPoint);
      secureStorage.setItem(`${endPoint}_data`, data);
      dataState = data;
    } else {
      dataState = dataLocale;
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
    const theme: string | null | undefined = secureStorage.getItem("theme");
    if (theme === "dark" || null || undefined) {
      secureStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      secureStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };

  const loadDarkMode = () => {
    const theme: string | null | undefined= secureStorage.getItem("theme");

    if (theme !== null && theme !== undefined) {
      document.documentElement.setAttribute("data-theme", theme);
      setTheme(theme);
    } else {
        secureStorage.setItem("theme", "dark");
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
