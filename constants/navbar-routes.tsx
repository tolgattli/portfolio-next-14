import { IconType } from "react-icons";
import { FaMicroblog } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";

interface navRoute {
  name: string;
  url: string;
  img: IconType;
}

export const navRoutes: navRoute[] = [
  {
    name: "Blog",
    url: "/posts",
    img: FaMicroblog,
  },
  {
    name: "Projects",
    url: "/projects",
    img: GoProjectRoadmap,
  },
  {
    name: "Contact",
    url: "/contact",
    img: MdAlternateEmail,
  },
  {
    name: "Tools",
    url: "/tools",
    img: MdDeveloperMode,
  },
];
