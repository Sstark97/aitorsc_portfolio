import { RouteNav, SocialRoutes } from "./types";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const ROUTES: RouteNav[] = [
    { route: "/", route_name: "Home" },
    { route: "/skills", route_name: "Mis Skills" },
    { route: "/work", route_name: "Experiencia Laboral" },
    { route: "/projects", route_name: "Proyectos" },
    { route: "/contact", route_name: "Contacto" },
];

export const SOCIAL_ROUTES: SocialRoutes[] = [
    {
      route: "https://www.linkedin.com/in/aitorscinfo/",
      icon: AiFillLinkedin,
    },
    {
      route: "https://github.com/Sstark97",
      icon: BsGithub,
    },
  ];