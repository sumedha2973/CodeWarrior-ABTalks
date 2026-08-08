import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, Calendar } from "lucide-react";

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Day 12", path: "/day/12", icon: Calendar },
];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-md md:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 text-xs transition-colors ${
                isActive ? "text-cyan-400 font-bold" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <Icon size={20} className={isActive ? "text-cyan-400" : "text-neutral-500"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}