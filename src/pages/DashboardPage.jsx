import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useStudentState } from "../hooks/useStudentState";
import { day12Task, achievementsList } from "../data/mockData";
import {
  RefreshCw,
  Trophy,
  Clock,
  ArrowRight,
  Flame,
  Award,
  RotateCcw,
} from "lucide-react";

export default function DashboardPage() {
  const { studentProfile, currentState, variantKey, setVariantKey } = useStudentState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-md mx-auto space-y-4 pb-8 px-1"
    >
      {/* Dev Evaluator State Switcher */}
      <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-2 text-xs flex items-center justify-between backdrop-blur-sm">
        <span className="text-neutral-500 font-mono text-[10px] flex items-center gap-1.5 uppercase font-bold tracking-wider">
          <RefreshCw size={11} className="text-cyan-400" /> State:
        </span>
        <div className="flex gap-1">
          {["activeStreak", "firstDay", "missedDay"].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setVariantKey(key)}
              className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase transition-all ${
                variantKey === key
                  ? "bg-cyan-400 text-neutral-950 font-black shadow-[0_0_8px_rgba(34,211,238,0.25)]"
                  : "bg-neutral-800/70 text-neutral-400 hover:text-white"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* 1. COMPACT PROFILE & STREAK HUD */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-extrabold text-white tracking-tight">{studentProfile.name}</h1>
            <p className="text-[10px] font-mono text-neutral-400 mt-0.5">
              {studentProfile.track}
            </p>
          </div>
          <span className="text-[9px] font-mono font-bold text-neutral-400 bg-neutral-950 px-2 py-1 rounded-md border border-neutral-800">
            {studentProfile.college}
          </span>
        </div>

        {currentState.missedYesterday ? (
          <div className="flex items-center gap-2 text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl font-medium">
            <RotateCcw size={14} className="shrink-0 text-amber-400" />
            <span>Streak reset to 0. Complete today to restart!</span>
          </div>
        ) : (
          <div className="flex items-center justify-between border-t border-neutral-800/60 pt-2.5 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Flame size={15} className="fill-cyan-400/20" />
              <span className="text-white font-extrabold text-sm">{currentState.currentStreak}</span>
              <span className="text-neutral-400 text-[11px] font-medium">Day Streak</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              Day {day12Task.dayNumber} / 60
            </span>
          </div>
        )}
      </div>

      {/* 2. TODAY'S MISSION (Primary Focus Card) */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-5 space-y-4 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-black text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded-md border border-cyan-800/60 uppercase tracking-widest">
            Today's Mission
          </span>
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-400" /> {day12Task.estimatedTime}
            </span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{day12Task.difficulty}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg font-black text-white tracking-tight leading-snug">
            {day12Task.title}
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {day12Task.description}
          </p>
        </div>

        <Link
          to={`/day/${day12Task.dayNumber}`}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-400 py-3 text-xs font-black uppercase tracking-wider text-neutral-950 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] active:scale-[0.98]"
        >
          <span>Start Challenge</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* 3. 60-DAY PROGRESS TRACKER */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-2.5">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold uppercase tracking-wider text-[10px] text-neutral-400">
            60-Day Progress
          </span>
          <span className="text-cyan-400 font-mono font-extrabold text-xs">
            {currentState.totalDaysCompleted} / 60 Days
          </span>
        </div>

        <div className="h-2 w-full rounded-full bg-neutral-950 overflow-hidden border border-neutral-800">
          <div
            className="h-full bg-cyan-400 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            style={{ width: `${(currentState.totalDaysCompleted / 60) * 100}%` }}
          />
        </div>

        <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
          {currentState.statusText}
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
                className={item.unlocked ? "text-cyan-400 shrink-0" : "text-neutral-600 shrink-0"}
              />
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-white truncate">{item.title}</h3>
                <p className="text-[10px] text-neutral-400 truncate mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}