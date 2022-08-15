import { IconType } from "react-icons";

// React Elements
export interface ChildrenProps{
    children?: React.ReactNode[]
};

export interface NavBarProps {
    handleClickHamburger():void
}

export interface SkillBarProps {
    name: string,
    level: number,
    color: string
}

export interface DataProps {
    MyComponent: new() => React.Component<any, any>,
    props: Skill | Experience,
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

export interface SocialRoutes extends Required<Pick<RouteNav, 'route'>> {
    icon: IconType;
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

// Context
export interface AppState {
    portFolio: Portfolio,
    loadPortfolio():void
}