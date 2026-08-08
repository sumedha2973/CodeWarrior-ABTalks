import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function SubmissionForm({
  githubUrl,
  setGithubUrl,
  linkedinUrl,
  setLinkedinUrl,
  isSubmitted,
  handleSubmitProof,
}) {
  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="submitted"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-center space-y-2 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-neutral-950 font-black"
          >
            <CheckCircle2 size={22} />
          </motion.div>
          <h3 className="text-xs font-black text-white uppercase tracking-wider">Proof Submitted!</h3>
          <p className="text-[11px] text-cyan-300 font-mono">Streak locked for Day 12.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmitProof}
          className="space-y-3"
        >
          <div className="space-y-2">
            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                GitHub Repository URL
              </label>
              <input
                type="url"
                required
                placeholder="https://github.com/..."
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                LinkedIn Post URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/posts/..."
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
              />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-2.5 text-xs font-black uppercase tracking-wider text-neutral-950 hover:bg-cyan-300 transition-colors shadow-[0_0_12px_rgba(34,211,238,0.2)]"
          >
            <Send size={14} />
            <span>Submit Task Proof</span>
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}