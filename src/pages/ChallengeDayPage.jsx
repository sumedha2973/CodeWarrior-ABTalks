import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useStudentState } from "../hooks/useStudentState";
import { day12Task } from "../data/mockData";
import {
  Clock,
  CheckCircle2,
  Lock,
  Code2,
  Share2,
  ArrowLeft,
  Send,
  Terminal,
} from "lucide-react";

// Dynamic task fallback for any day requested
function getTaskForDay(dayNum) {
  if (dayNum === 12) return day12Task;

  return {
    dayNumber: dayNum,
    title: `Day ${dayNum}: Building Core Modules`,
    track: "Full Stack Web Development",
    difficulty: "Intermediate",
    estimatedTime: "2-3 Hours",
    description: `Complete Day ${dayNum} challenge tasks by building and testing key components. Submit your progress below.`,
    requirements: [
      `Implement feature functionality for Day ${dayNum}`,
      "Ensure code passes all local test suites",
      "Push code to GitHub repository",
      "Share build update post on LinkedIn",
    ],
  };
}

export default function ChallengeDayPage() {
  const { dayNumber: paramDay } = useParams();
  const navigate = useNavigate();
  
  // Default fallback to active day or 12
  const currentDayNum = parseInt(paramDay || "12", 10);
  const task = getTaskForDay(currentDayNum);

  const {
    activeDay,
    completedDays,
    submissions,
    checklists,
    toggleChecklistItem,
    submitProof,
  } = useStudentState();

  const isCompleted = completedDays.includes(currentDayNum);
  const isLocked = currentDayNum > activeDay;

  const existingSubmission = submissions[currentDayNum] || {};
  const [githubUrl, setGithubUrl] = useState(existingSubmission.githubUrl || "");
  const [linkedinUrl, setLinkedinUrl] = useState(existingSubmission.linkedinUrl || "");

  useEffect(() => {
    if (existingSubmission.githubUrl) setGithubUrl(existingSubmission.githubUrl);
    if (existingSubmission.linkedinUrl) setLinkedinUrl(existingSubmission.linkedinUrl);
  }, [existingSubmission.githubUrl, existingSubmission.linkedinUrl]);

  const currentChecklist = checklists[currentDayNum] || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl.trim() || !linkedinUrl.trim()) return;

    submitProof(currentDayNum, githubUrl.trim(), linkedinUrl.trim());

    setTimeout(() => {
      navigate("/dashboard");
    }, 400);
  };

  if (isLocked) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto space-y-6 pt-12 px-2 text-center"
      >
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-500">
            <Lock size={28} />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-black text-white">
            Day {currentDayNum} is Locked
          </h1>
          <p className="text-xs text-neutral-400 max-w-xs mx-auto">
            You must complete Day {activeDay} before accessing this challenge.
          </p>
        </div>
        <Link to="/dashboard">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black uppercase text-neutral-950"
          >
            <ArrowLeft size={16} /> Return to Active Day
          </motion.button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-md mx-auto space-y-4 pb-12 px-1"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <Link
          to="/dashboard"
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white"
        >
          <ArrowLeft size={14} /> Back
        </Link>
        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/60 uppercase">
          DAY {currentDayNum} OF 60
        </span>
      </div>

      {/* Task Details */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-3">
        <div className="flex items-center justify-between text-[11px] text-neutral-400">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-cyan-400" /> {task.estimatedTime}
          </span>
          <span className="text-amber-400 font-semibold">{task.difficulty}</span>
        </div>

        <div>
          <h1 className="text-lg font-black text-white">{task.title}</h1>
          <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1">
            <Terminal size={12} /> {task.track}
          </p>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed pt-1 border-t border-neutral-800/60">
          {task.description}
        </p>
      </div>

      {/* Requirements Checklist */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-3">
        <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
            Requirements
          </h2>
          <span className="text-[10px] font-mono text-cyan-400">
            {currentChecklist.length} / {task.requirements.length} Completed
          </span>
        </div>

        <div className="space-y-2">
          {task.requirements.map((req, idx) => {
            const checked = currentChecklist.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleChecklistItem(currentDayNum, idx)}
                className="flex items-start gap-3 w-full text-left p-2 rounded-xl hover:bg-neutral-800/40 transition-colors"
              >
                <div
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    checked
                      ? "bg-cyan-400 border-cyan-400 text-neutral-950"
                      : "border-neutral-700 bg-neutral-950"
                  }`}
                >
                  {checked && <CheckCircle2 size={12} className="stroke-[3]" />}
                </div>
                <span
                  className={`text-xs ${
                    checked ? "text-neutral-400 line-through" : "text-neutral-200"
                  }`}
                >
                  {req}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Proof Submission Form */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-4">
        <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-cyan-400" /> Submit Proof
        </h2>

        {isCompleted && (
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-xs text-cyan-300 font-medium flex items-center gap-2">
            <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
            <span>Proof submitted! Day {currentDayNum} verified.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-neutral-400 flex items-center gap-1">
              <Code2 size={12} className="text-cyan-400" /> GitHub Repository / Commit URL
            </label>
            <input
              type="url"
              required
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-2.5 text-xs text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase text-neutral-400 flex items-center gap-1">
              <Share2 size={12} className="text-cyan-400" /> LinkedIn Post URL
            </label>
            <input
              type="url"
              required
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/posts/..."
              className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-2.5 text-xs text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex justify-center items-center gap-2 w-full rounded-xl bg-cyan-400 py-3 text-xs font-black uppercase text-neutral-950 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Send size={14} />
            <span>{isCompleted ? "Update Proof" : "Submit Today's Proof"}</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}