import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useStudentState } from "../hooks/useStudentState";
import { day12Task, achievementsList } from "../data/mockData";

import {
  Trophy,
  Clock,
  ArrowRight,
  Flame,
  Award,
  CheckCircle2,
  Circle,
  Target,
  Code2,
  Share2,
} from "lucide-react";

export default function DashboardPage() {
  const {
    studentProfile,
    completedCount,
    activeDay,
    currentStreak,
    streakStatus,
    demoState,
    changeDemoState,
  } = useStudentState();

  const isEmptyProfile =
    !studentProfile.name &&
    !studentProfile.track &&
    !studentProfile.college;

  const displayName =
    studentProfile.name || "Developer";

  const displayTrack =
    studentProfile.track || "Choose a track";

  const displayCollege =
    studentProfile.college || "College not added";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-md mx-auto space-y-4 pb-8 px-1"
    >
      {/* =====================================================
          1. PROFILE & STREAK HUD
      ====================================================== */}

      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-black">
            {studentProfile.name
              ? studentProfile.name.charAt(0).toUpperCase()
              : "A"}
          </div>

          {/* Profile */}
          <div className="min-w-0 flex-1">
            <h1 className="text-sm font-black text-white truncate">
              {displayName}
            </h1>

            <p className="text-[10px] text-cyan-400 font-medium truncate">
              {displayTrack}
            </p>

            <p className="text-[10px] text-neutral-500 truncate">
              {displayCollege}
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center justify-between border-t border-neutral-800/60 pt-2.5 text-xs">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale:
                  streakStatus === "active"
                    ? [1, 1.15, 1]
                    : 1,
                filter:
                  streakStatus === "active"
                    ? [
                        "drop-shadow(0 0 2px rgba(34,211,238,0.3))",
                        "drop-shadow(0 0 8px rgba(34,211,238,0.7))",
                        "drop-shadow(0 0 2px rgba(34,211,238,0.3))",
                      ]
                    : "drop-shadow(0 0 0 rgba(0,0,0,0))",
              }}
              transition={{
                repeat:
                  streakStatus === "active"
                    ? Infinity
                    : 0,
                duration: 2,
                ease: "easeInOut",
              }}
              className={`flex items-center justify-center ${
                streakStatus === "missed"
                  ? "text-amber-400"
                  : "text-cyan-400"
              }`}
            >
              <Flame
                size={17}
                className={
                  streakStatus === "active"
                    ? "fill-cyan-400/20"
                    : "fill-amber-400/10"
                }
              />
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

      {/* =====================================================
          STREAK STATUS
      ====================================================== */}

      {streakStatus === "missed" && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3"
        >
          <div className="flex items-start gap-2.5">
            <Flame
              size={16}
              className="text-amber-400 shrink-0 mt-0.5"
            />

            <div>
              <p className="text-xs font-bold text-amber-400">
                Streak Broken
              </p>

              <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">
                You missed yesterday's task.
                Complete today's challenge to
                start your streak again.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {streakStatus === "start" && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 px-4 py-3"
        >
          <div className="flex items-start gap-2.5">
            <Target
              size={16}
              className="text-cyan-400 shrink-0 mt-0.5"
            />

            <div>
              <p className="text-xs font-bold text-cyan-400">
                Start Your Streak
              </p>

              <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">
                Welcome to ABTalks. Complete your
                first challenge today and start your
                60-day journey.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* =====================================================
          2. TODAY'S MISSION
      ====================================================== */}

      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 p-5 space-y-4 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-black text-cyan-400 bg-cyan-950/90 px-2.5 py-1 rounded-md border border-cyan-800/60 uppercase tracking-widest">
            Today's Mission
          </span>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock
                size={12}
                className="text-cyan-400"
              />

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
            {activeDay > 12
              ? `Day ${activeDay} Challenge`
              : activeDay === 1
              ? "Environment Setup & Hello World"
              : day12Task.title}
          </h2>

          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {activeDay > 12
              ? `Continue your 60-day streak by completing Day ${activeDay} challenge requirements.`
              : activeDay === 1
              ? "Set up your development environment and create your first project."
              : day12Task.description}
          </p>
        </div>

        <Link to={`/day/${activeDay}`}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-400 py-3 text-xs font-black uppercase tracking-wider text-neutral-950 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <span>
              {activeDay === 1
                ? "Start Day 1"
                : `Start Day ${activeDay} Challenge`}
            </span>

            <ArrowRight size={15} />
          </motion.div>
        </Link>
      </motion.div>

      {/* =====================================================
          3. 60-DAY PROGRESS
      ====================================================== */}

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
            animate={{
              width: `${Math.min(
                (completedCount / 60) * 100,
                100
              )}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
          />
        </div>

        <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
          {completedCount === 0
            ? "Your journey starts today. Complete your first challenge to begin."
            : completedCount >= 60
            ? "Challenge complete. You built a 60-day record of consistency."
            : "Keep building every day to lock in your certification."}
        </p>
      </div>

      {/* =====================================================
          4. QUICK FOCUS
      ====================================================== */}

      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/70 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Target
            size={14}
            className="text-cyan-400"
          />

          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
            Today's Focus
          </h2>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
            <Circle
              size={15}
              className="text-cyan-400 shrink-0"
            />

            <div>
              <p className="text-xs font-bold text-neutral-200">
                Build
              </p>

              <p className="text-[10px] text-neutral-500">
                Complete today's coding mission.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
            <Code2
              size={15}
              className="text-cyan-400 shrink-0"
            />

            <div>
              <p className="text-xs font-bold text-neutral-200">
                Commit
              </p>

              <p className="text-[10px] text-neutral-500">
                Push your proof of work to GitHub.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5">
            <Share2
              size={15}
              className="text-cyan-400 shrink-0"
            />

            <div>
              <p className="text-xs font-bold text-neutral-200">
                Share
              </p>

              <p className="text-[10px] text-neutral-500">
                Publish your learning proof on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          5. ACHIEVEMENTS
      ====================================================== */}

      <div className="space-y-2">
        <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5 px-0.5">
          <Trophy
            size={12}
            className="text-cyan-400"
          />

          Milestones
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

      {/* =====================================================
          6. DEMO PREVIEW
      ====================================================== */}

      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[10px] font-mono font-black uppercase tracking-widest text-neutral-400">
              Demo Preview
            </h2>

            <p className="text-[9px] text-neutral-600 mt-1">
              Test different student states
            </p>
          </div>

          <span className="text-[9px] font-mono uppercase text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-2 py-1 rounded-md">
            {demoState}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            {
              id: "active",
              label: "Active",
            },
            {
              id: "firstDay",
              label: "First Day",
            },
            {
              id: "missed",
              label: "Missed",
            },
            {
              id: "empty",
              label: "Empty Profile",
            },
          ].map((option) => {
            const isSelected =
              demoState === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() =>
                  changeDemoState(option.id)
                }
                className={`rounded-lg border px-3 py-2 text-[10px] font-bold transition-all ${
                  isSelected
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400"
                    : "border-neutral-800 bg-neutral-900 text-neutral-500 hover:text-neutral-300 hover:border-neutral-700"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}