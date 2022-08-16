import { createContext, useState, useContext } from 'react';
import api from '@api/index';
import { ChildrenProps, AppState, Portfolio, Skill, Experience, Project } from '../types';
import { AxiosResponse } from 'axios';

const context = createContext<AppState>({
    portFolio: {} as Portfolio,
    skillData: [] as Skill[],
    experienceData: [] as Experience[],
    projectsData: [] as Project[],
    loadPortfolio: () => {},
    loadData: (endPoint: string) => {}
});

export const AppProvider = ({ children }: ChildrenProps) => {
    const { Provider } = context;

    const [portFolio, setPortfolio] = useState<Portfolio>({} as Portfolio);
    const [skillData, setSkillData] = useState<Skill[]>([]);
    const [experienceData, setExperienceData] = useState<Experience[]>([]);
    const [projectsData, setProjectsData] = useState<Project[]>([]);

    const loadPortfolio = async () => {
        const userData: any = await api.get("user");
        setPortfolio(userData.data);
    }

    const loadData = async (endPoint: string) => {
        const responseData: AxiosResponse = await api.get(endPoint);

        if(endPoint === "skills") {
            setSkillData(responseData.data);
        } else if(endPoint === "work") {
            setExperienceData(responseData.data);
        } else if(endPoint === "projects") {
            setProjectsData(responseData.data);
        }
    }

    return (
        <Provider value={{ portFolio, skillData, experienceData, projectsData, loadPortfolio, loadData }}>
            {children}
        </Provider>
    );

};

export const useGlobalContext = () => useContext(context);
