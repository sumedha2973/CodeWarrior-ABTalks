import { useState, useEffect } from "react";

const STORAGE_KEY = "abtalks_student_state_v1";
const DEMO_STATE_KEY = "abtalks_demo_state_v1";

const DEFAULT_PROFILE = {
  name: "Alex Dev",
  track: "Full Stack Web Development",
  college: "Tech Institute of Technology",
};

const DEMO_STATES = {
  active: {
    completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    currentStreak: 11,
    missedYesterday: false,
    profile: DEFAULT_PROFILE,
  },

  firstDay: {
    completedDays: [],
    currentStreak: 0,
    missedYesterday: false,
    profile: DEFAULT_PROFILE,
  },

  missed: {
    completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    currentStreak: 0,
    missedYesterday: true,
    profile: DEFAULT_PROFILE,
  },

  empty: {
    completedDays: [],
    currentStreak: 0,
    missedYesterday: false,
    profile: {
      name: "",
      track: "",
      college: "",
    },
  },
};

const DEFAULT_STATE = {
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  currentStreak: 11,
  missedYesterday: false,
  submissions: {},
  checklists: {},
  profile: DEFAULT_PROFILE,
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

          submissions: parsed.submissions || {},
          checklists: parsed.checklists || {},

          profile: {
            ...DEFAULT_PROFILE,
            ...(parsed.profile || {}),
          },
        };
      }
    } catch (error) {
      console.error("Failed to load student state:", error);
    }

    return DEFAULT_STATE;
  });

  const [demoState, setDemoState] = useState(() => {
    try {
      return localStorage.getItem(DEMO_STATE_KEY) || "active";
    } catch {
      return "active";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save student state:", error);
    }
  }, [state]);

  useEffect(() => {
    try {
      localStorage.setItem(DEMO_STATE_KEY, demoState);
    } catch (error) {
      console.error("Failed to save demo state:", error);
    }
  }, [demoState]);

  /*
   * STATE COMPUTATION
   * Use state if customized/submitted; fallback to demo state for preview tabs
   */
  const isCustomOrUpdated =
    state.completedDays.length > 11 || Object.keys(state.submissions).length > 0;

  const variant = DEMO_STATES[demoState] || DEMO_STATES.active;

  const effectiveCompletedDays =
    isCustomOrUpdated && demoState === "active"
      ? state.completedDays
      : variant.completedDays;

  const completedCount = effectiveCompletedDays.length;

  const activeDay = completedCount >= 60 ? 60 : completedCount + 1;

  const currentStreak =
    isCustomOrUpdated && demoState === "active"
      ? state.currentStreak
      : variant.currentStreak;

  const missedYesterday = variant.missedYesterday;

  let streakStatus = "active";

  if (missedYesterday) {
    streakStatus = "missed";
  } else if (currentStreak === 0 && completedCount === 0) {
    streakStatus = "start";
  }

  /*
   * PROFILE
   */
  const studentProfile = {
    name: variant.profile?.name || state.profile?.name || "",
    track: variant.profile?.track || state.profile?.track || "",
    college: variant.profile?.college || state.profile?.college || "",
  };

  /*
   * CHECKLIST
   */
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

  /*
   * SUBMIT PROOF
   */
  const submitProof = (dayNumber, githubUrl, linkedinUrl) => {
    setState((prev) => {
      const prevCompleted = Array.isArray(prev.completedDays)
        ? prev.completedDays
        : [];

      const isAlreadyCompleted = prevCompleted.includes(dayNumber);

      const updatedCompleted = isAlreadyCompleted
        ? prevCompleted
        : [...prevCompleted, dayNumber].sort((a, b) => a - b);

      return {
        ...prev,

        completedDays: updatedCompleted,

        currentStreak: isAlreadyCompleted
          ? prev.currentStreak
          : (prev.currentStreak || 0) + 1,

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

  /*
   * CHANGE DEMO STATE
   */
  const changeDemoState = (nextState) => {
    if (!DEMO_STATES[nextState]) return;
    setDemoState(nextState);
  };

  return {
    studentProfile,

    completedDays: effectiveCompletedDays,
    completedCount,
    activeDay,

    currentStreak,
    streakStatus,
    missedYesterday,

    submissions: state.submissions || {},
    checklists: state.checklists || {},

    demoState,
    changeDemoState,

    toggleChecklistItem,
    submitProof,
  };
}