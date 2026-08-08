import { useState, useEffect } from "react";
import { defaultStudentProfile, stateVariants } from "../data/mockData";

export function useStudentState(dayNumber = 12) {
  const [variantKey, setVariantKey] = useState("activeStreak");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [customCompletedDays, setCustomCompletedDays] = useState(null);
  const [customStreak, setCustomStreak] = useState(null);

  useEffect(() => {
    const savedSubmission = localStorage.getItem(`abtalks_day_${dayNumber}_submitted`);
    const savedGithub = localStorage.getItem(`abtalks_day_${dayNumber}_github_url`);
    const savedLinkedin = localStorage.getItem(`abtalks_day_${dayNumber}_linkedin_url`);

    if (savedSubmission === "true") {
      setIsSubmitted(true);
      if (savedGithub) setGithubUrl(savedGithub);
      if (savedLinkedin) setLinkedinUrl(savedLinkedin);

      const savedDays = localStorage.getItem("abtalks_completed_days");
      const savedStreak = localStorage.getItem("abtalks_current_streak");
      if (savedDays) setCustomCompletedDays(parseInt(savedDays, 10));
      if (savedStreak) setCustomStreak(parseInt(savedStreak, 10));
    } else {
      setIsSubmitted(false);
      setGithubUrl("");
      setLinkedinUrl("");
    }
  }, [dayNumber]);

  const baseState = stateVariants[variantKey] || stateVariants.activeStreak;

  const currentState = {
    ...baseState,
    totalDaysCompleted:
      customCompletedDays !== null ? customCompletedDays : baseState.totalDaysCompleted,
    currentStreak: customStreak !== null ? customStreak : baseState.currentStreak,
  };

  const handleSubmitProof = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) return;

    const updatedDays = currentState.totalDaysCompleted + (isSubmitted ? 0 : 1);
    const updatedStreak = currentState.currentStreak + (isSubmitted ? 0 : 1);

    setIsSubmitted(true);
    setCustomCompletedDays(updatedDays);
    setCustomStreak(updatedStreak);

    localStorage.setItem(`abtalks_day_${dayNumber}_submitted`, "true");
    localStorage.setItem(`abtalks_day_${dayNumber}_github_url`, githubUrl);
    localStorage.setItem(`abtalks_day_${dayNumber}_linkedin_url`, linkedinUrl);
    localStorage.setItem("abtalks_completed_days", updatedDays.toString());
    localStorage.setItem("abtalks_current_streak", updatedStreak.toString());
  };

  return {
    studentProfile: defaultStudentProfile,
    currentState,
    variantKey,
    setVariantKey,
    githubUrl,
    setGithubUrl,
    linkedinUrl,
    setLinkedinUrl,
    isSubmitted,
    handleSubmitProof,
  };
}