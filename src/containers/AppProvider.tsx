import { createContext, useState, memo} from "react";
import { isInLocale, secureStorage } from "../utils";
import {
  ChildrenProps,
  AppState,
  Portfolio,
  Skill,
  Experience,
  Project,
  LoadDataObject
} from "../types";

export const context = createContext<AppState>({
  portFolio: {} as Portfolio,
  skillData: [] as Skill[],
  experienceData: [] as Experience[],
  projectsData: [] as Project[],
  theme: "dark" as string,
  loadPortfolio: () => {},
  loadData: () => {},
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

  const loadDataOption: LoadDataObject = {
    "skills": setSkillData,
    "experiences": setExperienceData,
    "projects": setProjectsData,
  }

  const loadPortfolio = async () => {
    const portfolioInLocale = await isInLocale<Portfolio>("portfolio_data","/user");
    setPortfolio(portfolioInLocale);
  };

  const loadData = async (endPoint: string) => {
    const dataState = await isInLocale<Skill[] | Experience[] | Project[]>(`${endPoint}_data`,endPoint);
    loadDataOption[endPoint](dataState);
  };

  const isDarkMode = () => secureStorage.getItem("theme") === "dark";
  

  const handleChangeTheme = () => {
    secureStorage.setItem("theme", isDarkMode() ? "light" : "dark");
    setTheme(isDarkMode() ? "light" : "dark");
    loadDarkMode();
  };

  const loadDarkMode = () => {
    document.documentElement.setAttribute("data-theme", isDarkMode() || isDarkMode === undefined ? "dark" : "light");
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
