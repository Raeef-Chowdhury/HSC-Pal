import {
  Home,
  LogOut,
  BarChart,
  ClipboardList,
  Settings,
  LucideIcon,
} from "lucide-react";

export const SidebarItemsData = [
  { icon: Home, label: "Home", href: "/" },

  { icon: ClipboardList, label: "Tests", href: "/tests" },

  { icon: BarChart, label: "Analytics", href: "/analytics" },
  { icon: LogOut, label: "Logout", href: "/logout" },
  { icon: Settings, label: "Settings", href: "/settings" },
];
export interface sideBarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}
