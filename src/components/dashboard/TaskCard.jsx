import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Code2 } from "lucide-react";

export default function TaskCard({ task }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-all">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
          Day {task.dayNumber} Mission
        </span>
        <div className="flex items-center gap-1 text-xs text-neutral-400">
          <Clock size={12} />
          <span>{task.estimatedTime}</span>
        </div>
      </div>

      <h3 className="mt-3 text-lg font-bold text-white">{task.title}</h3>
      <p className="mt-1 text-xs text-neutral-400 line-clamp-2">{task.description}</p>

      <div className="mt-4 flex items-center justify-between border-t border-neutral-800/80 pt-3">
        <span className="flex items-center gap-1 text-xs font-medium text-neutral-400">
          <Code2 size={14} className="text-cyan-400" />
          {task.track}
        </span>
        <Link
          to={`/day/${task.dayNumber}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Start Task <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}