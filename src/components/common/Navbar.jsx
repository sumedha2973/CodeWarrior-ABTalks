import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Zap } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-md items-center justify-between px-4 md:max-w-4xl">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
            <Code2 size={16} className="text-cyan-400" />
          </div>

          <span className="text-sm font-black tracking-wide text-white">
            AB<span className="text-cyan-400">TALKS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link
            to="/dashboard"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              location.pathname === "/dashboard"
                ? "bg-neutral-800 text-cyan-400 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/day/12"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors ${
              location.pathname === "/day/12"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Zap size={14} className="text-cyan-400" />
            Day 12
          </Link>
        </nav>

        {/* Mobile status indicator */}
        <div className="flex md:hidden items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Active
        </div>

      </div>
    </header>
  );
}