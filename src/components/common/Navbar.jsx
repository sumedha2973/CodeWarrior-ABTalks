import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Zap } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Code2 size={18} />
          </div>
          <span className="text-lg font-black tracking-wider uppercase">
            AB<span className="text-cyan-400">Talks</span>
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm font-medium">
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
      </div>
    </header>
  );
}