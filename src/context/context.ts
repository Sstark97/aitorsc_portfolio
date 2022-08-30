import { createContext } from "react";
import {
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
    loadPortfolio: () => { },
    loadData: () => { },
    handleChangeTheme: () => { },
    loadDarkMode: () => { },
});