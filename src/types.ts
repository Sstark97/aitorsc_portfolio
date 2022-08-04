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

// Context
export interface AppState {
    portFolio: Portfolio,
    loadPortfolio():void
}