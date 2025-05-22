import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiWordpress,
  SiPhp,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import type { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Git: SiGit,
  Wordpress: SiWordpress,
  PHP: SiPhp,
  nextjs: SiNextdotjs,
  figma: SiFigma,
  Java: FaJava,
  Firebase: RiFirebaseFill,
};
