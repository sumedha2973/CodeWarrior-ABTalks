import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tasksByDay } from "../data/mockData";
import { useStudentState } from "../hooks/useStudentState";
import SubmissionForm from "../components/day/SubmissionForm";
import { Clock, Code2, CheckSquare, Terminal, ArrowLeft, ShieldCheck } from "lucide-react";

export default function ChallengeDayPage() {
  const { dayNumber } = useParams();
  const currentDay = parseInt(dayNumber, 10) || 12;
  const dayTask = tasksByDay[currentDay];

  const {
    githubUrl,
    setGithubUrl,
    linkedinUrl,
    setLinkedinUrl,
    isSubmitted,
    handleSubmitProof,
  } = useStudentState(currentDay);

  const [checkedItems, setCheckedItems] = useState({});

  if (!dayTask) {
    return (
      <div className="p-6 text-center space-y-4 max-w-md mx-auto">
        <h1 className="text-lg font-black text-white">Day {currentDay} Challenge Not Found</h1>
        <p className="text-xs text-neutral-400">This task is not available yet.</p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>
      </div>
    );
  }

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = dayTask.requirements.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-md mx-auto space-y-4 pb-8 px-1"
    >
      {/* 1. MISSION HEADER (Day, Title & Meta) */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-cyan-950/90 px-2.5 py-0.5 text-[10px] font-mono font-black text-cyan-400 border border-cyan-800/60 uppercase tracking-wider">
            DAY {dayTask.dayNumber} OF 60
          </span>
          <div className="flex items-center gap-2 text-[11px] font-medium text-neutral-400">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-400" /> {dayTask.estimatedTime}
            </span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{dayTask.difficulty}</span>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-lg font-black text-white tracking-tight leading-snug">
            {dayTask.title}
          </h1>
          <p className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
            <Code2 size={13} className="text-cyan-400" /> {dayTask.track}
          </p>
        </div>
      </div>

      {/* 2. OBJECTIVE */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-2">
        <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
          <Terminal size={12} className="text-cyan-400" /> Objective
        </h2>
        <p className="text-xs text-neutral-300 leading-relaxed font-normal">
          {dayTask.description}
        </p>
      </div>

      {/* 3. REQUIREMENTS CHECKLIST */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/80 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
            <CheckSquare size={12} className="text-cyan-400" /> Requirements
          </h2>
          <span className="text-[10px] font-mono text-cyan-400 font-extrabold">
            {completedCount}/{totalCount} Completed
          </span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="h-1.5 w-full rounded-full bg-neutral-950 overflow-hidden border border-neutral-800">
          <div
            className="h-full bg-cyan-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>

        <div className="space-y-1.5 pt-1">
          {dayTask.requirements.map((req, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCheck(idx)}
                className="w-full flex items-start gap-2.5 text-left text-xs transition-colors group py-1.5 px-2 rounded-lg hover:bg-neutral-800/40"
              >
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isChecked
                      ? "bg-cyan-400 border-cyan-400 text-neutral-950 font-black text-[10px]"
                      : "border-neutral-700 bg-neutral-950 group-hover:border-neutral-500"
                  }`}
                >
                  {isChecked && "✓"}
                </span>
                <span
                  className={`leading-snug transition-colors ${
                    isChecked ? "text-neutral-500 line-through" : "text-neutral-200"
                  }`}
                >
                  {req}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. FINAL SUBMISSION STEP */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 space-y-3">
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-800/80 pb-2">
          <ShieldCheck size={13} className="text-cyan-400" /> Final Step: Submit Proof
        </div>

        <SubmissionForm
          githubUrl={githubUrl}
          setGithubUrl={setGithubUrl}
          linkedinUrl={linkedinUrl}
          setLinkedinUrl={setLinkedinUrl}
          isSubmitted={isSubmitted}
          handleSubmitProof={handleSubmitProof}
        />
      </div>
    </motion.div>
  );
}