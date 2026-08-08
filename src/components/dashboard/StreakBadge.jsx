import React from "react";
import { Flame, AlertCircle, RotateCcw } from "lucide-react";

export default function StreakBadge({ streak, missedYesterday }) {
  if (missedYesterday) {
    return (
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs">
        <div className="flex items-start gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <RotateCcw size={16} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <AlertCircle size={14} />
              <span>Streak Reset to 0 Days</span>
            </div>
            <p className="text-[11px] text-neutral-300 leading-relaxed font-medium">
              You missed yesterday's submission. Don't worry—your completed projects and total days remain safely saved. Complete today's task to restart your streak!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-3.5 text-xs shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
          <Flame size={20} className="animate-pulse" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
            Active Streak
          </span>
          <h3 className="text-base font-black text-white">{streak} Days Strong</h3>
        </div>
      </div>
      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/60">
        ON TRACK
      </span>
    </div>
  );
}