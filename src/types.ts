import { IconType } from "react-icons";

// React Elements
export interface ChildrenProps{
    children?: React.ReactNode[]
};

export interface NavBarProps {
    handleClickHamburger():void
}

// Objects
export interface RouteNav {
    route: string;
    route_name: string;
}

export interface SocialRoutes extends Required<Pick<RouteNav, 'route'>> {
    icon: IconType;
}