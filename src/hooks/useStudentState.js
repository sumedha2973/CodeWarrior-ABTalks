import { useState, useEffect } from "react";

const STORAGE_KEY = "abtalks_student_state_v1";

const DEFAULT_STATE = {
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  currentStreak: 11,
  submissions: {},
  checklists: {},
};

export function useStudentState() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_STATE,
          ...parsed,
          completedDays: Array.isArray(parsed.completedDays)
            ? parsed.completedDays
            : DEFAULT_STATE.completedDays,
        };
      }
    } catch (e) {
      console.error("Failed to load local storage state:", e);
    }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state to local storage:", e);
    }
  }, [state]);

  const completedDays = state?.completedDays || DEFAULT_STATE.completedDays;
  const completedCount = completedDays.length;
  const activeDay = completedCount + 1;

  const toggleChecklistItem = (dayNumber, index) => {
    setState((prev) => {
      const currentList = prev.checklists?.[dayNumber] || [];
      const updatedList = currentList.includes(index)
        ? currentList.filter((i) => i !== index)
        : [...currentList, index];

      return {
        ...prev,
        checklists: {
          ...(prev.checklists || {}),
          [dayNumber]: updatedList,
        },
      };
    });
  };

  const submitProof = (dayNumber, githubUrl, linkedinUrl) => {
    setState((prev) => {
      const prevCompleted = prev.completedDays || [];
      const isAlreadyCompleted = prevCompleted.includes(dayNumber);
      const updatedCompleted = isAlreadyCompleted
        ? prevCompleted
        : [...prevCompleted, dayNumber].sort((a, b) => a - b);

      const updatedStreak = isAlreadyCompleted
        ? prev.currentStreak
        : (prev.currentStreak || 0) + 1;

      return {
        ...prev,
        completedDays: updatedCompleted,
        currentStreak: updatedStreak,
        submissions: {
          ...(prev.submissions || {}),
          [dayNumber]: {
            githubUrl,
            linkedinUrl,
            submittedAt: new Date().toISOString(),
          },
        },
      };
    });
  };

  const studentProfile = {
    name: "ABTalks Student",
    track: "Full Stack Web Development",
    college: "ABES EC",
  };

  return {
    studentProfile,
    completedDays,
    completedCount,
    activeDay,
    currentStreak: state?.currentStreak ?? 11,
    submissions: state?.submissions || {},
    checklists: state?.checklists || {},
    toggleChecklistItem,
    submitProof,
  };
}