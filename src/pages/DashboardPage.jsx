import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useStudentState } from "../hooks/useStudentState";
import { day12Task, achievementsList } from "../data/mockData";
import { Trophy, Clock, ArrowRight, Flame, Award } from "lucide-react";

export default function DashboardPage() {
  const { studentProfile, completedCount, activeDay, currentStreak } =
    useStudentState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-md mx-auto space-y-4 pb-8 px-1"
    >
      {/* 1. COMPACT PROFILE & STREAK HUD */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-extrabold text-white tracking-tight">
              {studentProfile.name}
            </h1>
            <p className="text-[10px] font-mono text-neutral-400 mt-0.5">
              {studentProfile.track}
            </p>
          </div>
          <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-950 px-2 py-1 rounded-md border border-neutral-800">
            {studentProfile.college}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-neutral-800/60 pt-2.5 text-xs">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(34,211,238,0.3))",
                  "drop-shadow(0 0 8px rgba(34,211,238,0.7))",
                  "drop-shadow(0 0 2px rgba(34,211,238,0.3))",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex items-center justify-center text-cyan-400"
            >
              <Flame size={17} className="fill-cyan-400/20" />
            </motion.div>
            <span className="text-white font-extrabold text-sm">
              {currentStreak}
            </span>
            <span className="text-neutral-400 text-[11px] font-medium">
              Day Streak
            </span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400">
            Day {activeDay} / 60
          </span>
        </div>
      </div>

      {/* 2. TODAY'S MISSION CARD */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-5 space-y-4 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-black text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded-md border border-cyan-800/60 uppercase tracking-widest">
            Today's Mission
          </span>
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-400" />{" "}
              {day12Task.estimatedTime}
            </span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">
              {day12Task.difficulty}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg font-black text-white tracking-tight leading-snug">
            {activeDay > 12 ? `Day ${activeDay} Challenge` : day12Task.title}
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {activeDay > 12
              ? `Continue your 60-day streak by completing Day ${activeDay} challenge requirements.`
              : day12Task.description}
          </p>
        </div>

        <Link to={`/day/${activeDay}`}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-400 py-3 text-xs font-black uppercase tracking-wider text-neutral-950 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <span>Start Day {activeDay} Challenge</span>
            <ArrowRight size={15} />
          </motion.div>
        </Link>
      </motion.div>

      {/* 3. 60-DAY PROGRESS TRACKER */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-2.5">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold uppercase tracking-wider text-[10px] text-neutral-400">
            60-Day Progress
          </span>
          <span className="text-cyan-400 font-mono font-extrabold text-xs">
            {completedCount} / 60 Days
          </span>
        </div>

        <div className="h-2 w-full rounded-full bg-neutral-950 overflow-hidden border border-neutral-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(completedCount / 60) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
          />
        </div>

        <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
          On track! Keep building every day to lock in your certification.
        </p>
      </div>

      {/* 4. ACHIEVEMENTS */}
      <div className="space-y-2">
        <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5 px-0.5">
          <Trophy size={12} className="text-cyan-400" /> Milestones
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border p-2.5 flex items-center gap-2.5 transition-all ${
                item.unlocked
                  ? "border-cyan-500/20 bg-neutral-900 text-white"
                  : "border-neutral-900/80 bg-neutral-950/40 text-neutral-600 opacity-40"
              }`}
            >
              <Award
                size={16}
                className={
                  item.unlocked
                    ? "text-cyan-400 shrink-0"
                    : "text-neutral-600 shrink-0"
                }
              />
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-white truncate">
                  {item.title}
                </h3>
                <p className="text-[10px] text-neutral-400 truncate mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}