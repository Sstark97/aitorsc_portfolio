import { lazy } from "react";
import { Routes, RouteNav, SocialRoutes } from "./types";
import { ReactComponent as Linkedin } from "@assets/linkedin.svg";
import { ReactComponent as GitHub }  from "@assets/github.svg";

const Home = lazy(() => import("@pages/Home"));
const Contact = lazy(() => import("@pages/Contact"));
const Projects = lazy(() => import("@pages/Projects"));
const Skills = lazy(() => import("@pages/Skills"));


export const routes: Routes[] = [
  { route: "/", element: Home },
  { route: "/skills", element: Skills },
  { route: "/projects", element: Projects },
  { route: "/contact", element: Contact },
]

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
