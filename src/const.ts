import type { RouteNav, SocialRoutes } from "./types";
import Linkedin from "@assets/linkedin.svg";
import GitHub from "@assets/github.svg";

export const ROUTES: RouteNav[] = [
  { route: "/", route_name: "Home" },
  { route: "/skills", route_name: "Mis Skills" },
  { route: "/projects", route_name: "Proyectos" },
  { route: "/contact", route_name: "Contacto" },
];

export const SOCIAL_ROUTES: SocialRoutes[] = [
  {
    route: "https://www.linkedin.com/in/aitorscinfo/",
    label: "Linkedin",
    icon: Linkedin,
  },
  {
    route: "https://github.com/Sstark97",
    label: "GitHub",
    icon: GitHub,
  },
];

export const SKILLS_COLORS: string[] = ["#FFFF00", "#61DBFB", "#3E5F8A", "#764abc"];
