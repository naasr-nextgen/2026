import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    // class: "hover:text-brand-blue",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "About",
    href: "/about",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "People",
    href: "/people",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "News",
    href: "/blog",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "Timetable",
    href: "/timetable",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "Calendar",
    href: "/calendar",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
];
