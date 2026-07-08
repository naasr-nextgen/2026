import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
  {
    label: "Home",
    href: "/2026/",
    // class: "hover:text-brand-blue",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "About",
    href: "/2026/about",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "People",
    href: "/2026/people",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "News",
    href: "/2026/blog",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "Timetable",
    href: "/2026/timetable",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
  {
    label: "Calendar",
    href: "/2026/calendar",
    hoverClass: "hover:text-brand-yellow",
    activeClass: "text-brand-blue",
  },
];
