import React from 'react';

// React Elements
export interface ChildrenProps{
    children?: React.ReactNode[] | React.ReactNode;
};

export interface PresentationProps extends ChildrenProps{
    classContainer: string;
    idContainer?: string;
    home?: boolean;
};

export interface PortfolioContainerProps extends Pick<PresentationProps , 'children'>{
    classContainer?: string;
    dataToLoad?: string | string[],
    animationKey: string,
    animationTime: number,
}

export interface NavBarProps {
    handleClickHamburger():void
};

export interface SkillBarProps {
    name: string,
    level: number,
    color: string
}

export interface DataProps {
    MyComponent: new() => React.Component<any, any>,
    props: Skill | Experience | Project,
    endPoint: string,
    column?: boolean
}

export interface ExpandedIconProps {
    handleClickExpanded ():void;
}

// Objects
export interface RouteNav {
    route: string;
    route_name: string;
}

export interface Routes extends Pick<RouteNav , 'route'> { 
    element: React.LazyExoticComponent<React.ComponentType<any>>;
}

export interface SocialRoutes extends Required<Pick<RouteNav, 'route'>> {
    icon: string;
    label: string;
}

export interface Portfolio {
    adress: string,
    avatar: string,
    email: string,
    name: string,
    phone: string,
    presentation: string,
    surname: string,
};

export interface Skill extends Required<Pick<SkillBarProps, 'name' | 'level'>> {}

export interface Experience {
    position: string,
    company: string,
    description: string,
    start_date: string,
    final_date?: string,
    current?: boolean,
}

export interface Project {
    name: string,
    description: string,
    repository: string,
    image?: string,
    web?: string,
}

export interface ContactFormInterface {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export interface ContactFormElement extends Element {
    value?: string | undefined;
}

export interface DataSelect {
    [key: string]: Experience[] | Project[] | Skill[]
}

export interface LoadDataObject {
    [key: string]: React.Dispatch<React.SetStateAction<any>>
}

// Context
export interface AppState {
    portFolio: Portfolio,
    skillData: Skill [],
    experienceData: Experience [],
    projectsData: Project [],
    theme: string,
    loadPortfolio():void,
    loadData(endPoint: string):void,
    handleChangeTheme():void,
    loadDarkMode():void
}