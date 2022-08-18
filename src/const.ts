import { RouteNav, SocialRoutes } from "./types";
import { ReactComponent as Linkedin } from "@assets/linkedin.svg";
import { ReactComponent as GitHub }  from "@assets/github.svg";

export const ROUTES: RouteNav[] = [
  { route: "/", route_name: "Home" },
  { route: "/skills", route_name: "Mis Skills" },
  { route: "/projects", route_name: "Proyectos" },
  { route: "/contact", route_name: "Contacto" },
];

export const SOCIAL_ROUTES: SocialRoutes[] = [
  {
    route: "https://www.linkedin.com/in/aitorscinfo/",
    icon: Linkedin,
  },
  {
    route: "https://github.com/Sstark97",
    icon: GitHub,
  },
];

export const SKILLS_COLORS: string[] = ["#FFFF00", "#61DBFB", "#3E5F8A", "#764abc"];
