import { createContext, useState } from "react";
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

export const AppProvider = ({ children }: ChildrenProps) => {
  const { Provider } = context;

  const [portFolio, setPortfolio] = useState<Portfolio>({} as Portfolio);
  const [skillData, setSkillData] = useState<Skill[]>([]);
  const [experienceData, setExperienceData] = useState<Experience[]>([]);
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [theme, setTheme] = useState<string>("dark");

  const loadPortfolio = async () => {
    const userData: any = await api.get("user");
    setPortfolio(userData.data);
  };

  const loadData = async (endPoint: string) => {
    const responseData: AxiosResponse = await api.get(endPoint);

    if (endPoint === "skills") {
      setSkillData(responseData.data);
    } else if (endPoint === "work") {
      setExperienceData(responseData.data);
    } else if (endPoint === "projects") {
      setProjectsData(responseData.data);
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
};
