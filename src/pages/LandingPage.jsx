import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Share2,
  Terminal,
  Trophy,
  Zap,
  Flame,
  CheckCircle2,
  Target,
  FolderGit2,
} from "lucide-react";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10 py-2 overflow-hidden"
    >
      {/* SECTION 1: HERO (Clear product definition & CTA) */}
      <motion.section variants={itemVariants} className="text-center space-y-4 pt-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Flame size={14} className="text-cyan-400 animate-pulse" />
          <span>ABTalks • Developer Discipline Platform</span>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-white uppercase sm:text-5xl leading-tight">
          60-DAY CODING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500">
            DISCIPLINE CHALLENGE.
          </span>
        </h1>

        <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto font-medium">
          A 60-day challenge where students and developers build daily, submit public proof, and build an indisputable record of consistency.
        </p>

        <div className="pt-2">
          <Link
            to="/dashboard"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-neutral-950 transition-all hover:bg-cyan-300 active:scale-[0.98] shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <span>Start the 60-Day Challenge</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.section>

      {/* SECTION 2: VISUAL 60-DAY JOURNEY MATRIX */}
      <motion.section
        variants={itemVariants}
        className="relative rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 backdrop-blur-sm overflow-hidden shadow-2xl space-y-3"
      >
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-200 uppercase tracking-wider">
            <Terminal size={14} className="text-cyan-400" />
            <span>The 60-Day Consistency Journey</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40 font-bold">
            01 → 60 DAYS
          </span>
        </div>

        {/* 60-Day Visual Grid Visualizer */}
        <div className="py-2 flex flex-col items-center justify-center">
          <div className="grid grid-cols-10 gap-1.5 p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-[0_15px_25px_rgba(0,0,0,0.8)] max-w-xs mx-auto">
            {Array.from({ length: 60 }).map((_, index) => {
              const day = index + 1;
              const isCompleted = day <= 12;
              const isCurrent = day === 12;
              return (
                <div
                  key={day}
                  className={`h-4 w-4 rounded-[3px] transition-all flex items-center justify-center text-[8px] font-bold ${
                    isCurrent
                      ? "bg-cyan-400 text-neutral-950 ring-2 ring-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] scale-110 z-10"
                      : isCompleted
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-800/60"
                      : "bg-neutral-900 text-neutral-700 border border-neutral-800/40"
                  }`}
                >
                  {day === 12 ? "12" : ""}
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[11px] text-neutral-400 font-medium">
          Every day requires 1 GitHub commit + 1 LinkedIn post to maintain your streak.
        </p>
      </motion.section>

      {/* SECTION 3: SIMPLE 4-STEP WORKFLOW */}
      <motion.section variants={itemVariants} className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-neutral-400">
          <Target size={14} className="text-cyan-400" />
          <span>How It Works</span>
        </div>

        <div className="grid gap-2.5">
          {[
            {
              step: "01",
              title: "Choose a Track",
              desc: "Select Web Dev, AI/ML, or DevOps based on your target skills.",
              icon: Code2,
            },
            {
              step: "02",
              title: "Complete Daily Mission",
              desc: "Build practical, bite-sized tasks tailored for 45 minutes of daily focus.",
              icon: Zap,
            },
            {
              step: "03",
              title: "Submit GitHub + LinkedIn Proof",
              desc: "Push code to repository and post your daily learning log on LinkedIn.",
              icon: Share2,
            },
            {
              step: "04",
              title: "Build Your Developer Identity",
              desc: "Maintain your public streak and build an indisputable portfolio.",
              icon: Trophy,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group flex items-start gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3.5 transition-all hover:border-cyan-500/30 hover:bg-neutral-900"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-black text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-400 group-hover:text-neutral-950 transition-colors">
                  {item.step}
                </span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <Icon size={14} className="text-cyan-400" />
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* SECTION 4: WHAT YOU ACHIEVE */}
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-3"
      >
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-neutral-400">
          <Trophy size={14} className="text-cyan-400" />
          <span>What You Achieve</span>
        </div>

        <div className="grid gap-2 text-xs font-medium">
          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
            <span>Verified 60-day public coding streak</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <FolderGit2 size={16} className="text-cyan-400 shrink-0" />
            <span>Portfolio of 60 real, runnable projects</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <Share2 size={16} className="text-cyan-400 shrink-0" />
            <span>Active LinkedIn public proof-of-work history</span>
          </div>
        </div>

        <div className="pt-2">
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 py-3 text-xs font-bold text-cyan-400 border border-cyan-500/30 transition-all"
          >
            <span>Enter Student Dashboard</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}