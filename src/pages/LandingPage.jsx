
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
  CheckCircle2,
  Target,
  FolderGit2,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  // Only icons that are already available in your project
  const orbitItems = [
    { icon: Terminal, label: "Code" },
    { icon: Share2, label: "Proof" },
    { icon: Code2, label: "Build" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto max-w-md space-y-8 overflow-hidden py-2 pb-10"
    >
      {/* =========================================================
          HERO / 3D EFFECT
      ========================================================= */}
      <motion.section
        variants={itemVariants}
        className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 px-5 py-8"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 rounded-full bg-teal-400/10 blur-2xl" />
        </div>

        {/* Large rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-16 h-64 w-64 rounded-full border border-cyan-500/10"
        />

        {/* Dashed rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 h-52 w-52 rounded-full border border-dashed border-cyan-400/10"
        />

        {/* Floating particles */}
        {[
          { x: "-110px", y: "-120px", delay: 0 },
          { x: "115px", y: "-90px", delay: 0.8 },
          { x: "-125px", y: "100px", delay: 1.5 },
          { x: "120px", y: "115px", delay: 2.1 },
          { x: "0px", y: "-150px", delay: 2.8 },
        ].map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
              opacity: [0.25, 0.8, 0.25],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2.8 + index * 0.3,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            style={{
              transform: `translate(${particle.x}, ${particle.y})`,
            }}
          />
        ))}

        {/* =====================================================
            3D CORE
        ===================================================== */}
        <div className="relative z-10 flex h-56 w-56 items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full border border-cyan-400/30"
          >
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
          </motion.div>

          {/* Inner rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-7 rounded-full border border-dashed border-teal-300/20"
          >
            <div className="absolute right-1 top-1/2 h-1.5 w-1.5 rounded-full bg-teal-300" />
          </motion.div>

          {/* Floating 3D cube */}
          <motion.div
            animate={{
              rotateX: [0, 8, 0, -8, 0],
              rotateY: [0, 18, 0, -18, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 800,
            }}
            className="relative h-32 w-32"
          >
            {/* Cube face */}
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-cyan-300/50 bg-cyan-400/10 shadow-[0_0_45px_rgba(34,211,238,0.2)] backdrop-blur-sm">
              <div className="text-center">
                <Terminal
                  size={36}
                  className="mx-auto mb-2 text-cyan-300"
                />

                <div className="font-mono text-2xl font-black text-white">
                  60
                </div>

                <div className="text-[8px] font-mono font-bold tracking-[0.3em] text-cyan-400">
                  DAYS
                </div>
              </div>
            </div>

            {/* Cube glow */}
            <div className="absolute -inset-5 -z-10 rounded-3xl bg-cyan-400/10 blur-2xl" />
          </motion.div>

          {/* Orbiting icons */}
          {orbitItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-cyan-500/30 bg-neutral-900/90 text-cyan-400 shadow-lg">
                  <Icon size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hero text */}
        <div className="relative z-20 mt-4 text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-400">
            <Sparkles size={11} />
            ABTalks • Developer Discipline
          </div>

          <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-white">
            Build.
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
              Prove. Repeat.
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-xs font-medium leading-relaxed text-neutral-400">
            A 60-day coding challenge designed to turn daily effort into
            visible proof of work.
          </p>
        </div>
      </motion.section>

      {/* =========================================================
          MAIN CTA
      ========================================================= */}
      <motion.section variants={itemVariants}>
        <Link
          to="/dashboard"
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-4 text-xs font-black uppercase tracking-widest text-neutral-950 shadow-[0_0_30px_rgba(34,211,238,0.22)] transition-all hover:bg-cyan-300 active:scale-[0.98]"
        >
          <span>Start the 60-Day Challenge</span>

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.section>

      {/* =========================================================
          WHAT IS ABTALKS
      ========================================================= */}
      <motion.section variants={itemVariants} className="space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">
          <Target size={13} className="text-cyan-400" />
          <span>What is ABTalks?</span>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5">
          <p className="text-xs leading-relaxed text-neutral-300">
            ABTalks helps students build consistency through one simple rule:
            <span className="font-bold text-white">
              {" "}
              build something every day and prove it publicly.
            </span>
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">
              <Terminal size={17} className="mb-2 text-cyan-400" />

              <p className="text-[10px] font-bold uppercase text-white">
                GitHub
              </p>

              <p className="mt-1 text-[10px] text-neutral-500">
                Commit your work.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">
              <Share2 size={17} className="mb-2 text-cyan-400" />

              <p className="text-[10px] font-bold uppercase text-white">
                LinkedIn
              </p>

              <p className="mt-1 text-[10px] text-neutral-500">
                Share your progress.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================
          60-DAY JOURNEY
      ========================================================= */}
      <motion.section
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-200">
            <Terminal size={14} className="text-cyan-400" />
            <span>60-Day Journey</span>
          </div>

          <span className="rounded border border-cyan-800/40 bg-cyan-950 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan-400">
            01 → 60
          </span>
        </div>

        <div className="flex justify-center py-5">
          <div className="grid grid-cols-10 gap-1.5 rounded-xl border border-neutral-800/80 bg-neutral-950 p-3 shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
            {Array.from({ length: 60 }).map((_, index) => {
              const day = index + 1;
              const isCompleted = day <= 12;
              const isCurrent = day === 12;

              return (
                <motion.div
                  key={day}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.015,
                    duration: 0.2,
                  }}
                  className={`flex h-4 w-4 items-center justify-center rounded-[3px] text-[7px] font-bold ${
                    isCurrent
                      ? "z-10 scale-110 bg-cyan-400 text-neutral-950 ring-2 ring-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                      : isCompleted
                      ? "border border-cyan-800/60 bg-cyan-950 text-cyan-400"
                      : "border border-neutral-800/40 bg-neutral-900 text-neutral-700"
                  }`}
                >
                  {day === 12 ? "12" : ""}
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-[11px] font-medium text-neutral-400">
          One day. One build. One proof of progress.
        </p>
      </motion.section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
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
              desc: "Pick Web Dev, AI/ML, or DevOps.",
              icon: Code2,
            },
            {
              step: "02",
              title: "Complete the Mission",
              desc: "Build a practical task every day.",
              icon: Zap,
            },
            {
              step: "03",
              title: "Submit Proof",
              desc: "Push to GitHub and share on LinkedIn.",
              icon: Share2,
            },
            {
              step: "04",
              title: "Build Your Identity",
              desc: "Turn consistency into visible proof of work.",
              icon: Trophy,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                whileHover={{ x: 3 }}
                className="group flex items-start gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3.5 transition-all hover:border-cyan-500/30"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-xs font-black text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-neutral-950">
                  {item.step}
                </span>

                <div>
                  <div className="flex items-center gap-1.5">
                    <Icon size={14} className="text-cyan-400" />

                    <h3 className="text-xs font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-0.5 text-[11px] leading-relaxed text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* =========================================================
          WHAT YOU BUILD
      ========================================================= */}
      <motion.section
        variants={itemVariants}
        className="space-y-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5"
      >
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-neutral-400">
          <Trophy size={14} className="text-cyan-400" />
          <span>What You Build</span>
        </div>

        <div className="grid gap-2 text-xs font-medium">
          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <CheckCircle2 size={16} className="shrink-0 text-cyan-400" />
            <span>60-day public coding streak</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <FolderGit2 size={16} className="shrink-0 text-cyan-400" />
            <span>Portfolio of real projects</span>
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-neutral-800/80 bg-neutral-950/60 p-2.5 text-neutral-300">
            <Share2 size={16} className="shrink-0 text-cyan-400" />
            <span>Public proof-of-work history</span>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-neutral-800 py-3 text-xs font-bold text-cyan-400 transition-all hover:bg-neutral-700"
        >
          <span>Explore Your Dashboard</span>
          <ArrowRight size={14} />
        </Link>
      </motion.section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <motion.footer
        variants={itemVariants}
        className="border-t border-neutral-800/80 pt-4 text-center"
      >
        <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-600">
          ABTALKS • 60-DAY DEVELOPER DISCIPLINE
        </p>
      </motion.footer>
    </motion.div>
  );
}