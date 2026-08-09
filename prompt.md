# ABTalks 60-Day Coding Challenge — Build Prompt

## Role

You are an expert product designer and frontend engineer. Build a polished, mobile-first web experience for **ABTalks**, a 60-day coding challenge platform for Indian college students.

The goal is not to build a generic dashboard. The product should feel like a real, thoughtfully designed student challenge platform that is motivating, credible, fast, and easy to use on a phone.

---

## Product Context

ABTalks runs a **60-day coding challenge**.

Students:

1. Choose a development track.
2. Complete one practical coding task every day.
3. Push proof of their work to GitHub.
4. Share their learning/progress on LinkedIn.
5. Build a public record of consistency over 60 days.

The platform is primarily used on **mobile phones**, often late at night after college.

The product already works conceptually; your job is to make the experience feel designed.

---

# Required Routes

Build exactly these primary routes:

```text
/
/dashboard
/day/12
```

Do not add unnecessary authentication flows, recruiter dashboards, admin panels, or backend infrastructure.

Authentication is **out of scope**.

Use realistic mocked data.

---

# Screen 1 — Landing Page `/`

The landing page is the first experience for a student who has never heard of ABTalks.

It must immediately answer:

- What is ABTalks?
- What is the 60-day challenge?
- What does the student actually have to do?
- Why should they participate?
- What will they gain?

## Visual Direction

Create a modern developer-focused interface.

Preferred visual language:

- Dark background
- Cyan/teal accent
- Developer/terminal aesthetic
- Strong typography
- Subtle gradients
- Glass/blur effects where useful
- Micro-interactions
- Motion that feels intentional rather than excessive
- A subtle 3D/depth effect in the hero section
- Responsive layout optimized for 390px first

Avoid making the page look like a generic SaaS template.

## Suggested Landing Structure

### Hero

Include:

- ABTalks branding
- Strong headline around the 60-day coding challenge
- Short explanation
- Primary CTA leading to `/dashboard`
- Animated/depth visual representing the 60-day journey

### 60-Day Journey

Show all 60 days visually.

Example:

- Completed days
- Current day
- Upcoming days

The visual should make the challenge feel tangible.

### How It Works

Explain the journey in approximately four steps:

1. Choose a track
2. Complete the daily mission
3. Submit GitHub + LinkedIn proof
4. Build a visible developer identity

### What Students Gain

Examples:

- Consistent coding habit
- 60-day public coding streak
- Real projects
- GitHub portfolio
- LinkedIn proof of work

Keep the content concise because the main viewport is mobile.

---

# Screen 2 — Student Dashboard `/dashboard`

The dashboard is the student's home screen after entering the challenge.

It should answer:

> "What do I need to do today?"

## Required Information

Display:

- Student name
- Track
- College
- Current streak
- Current challenge day
- Today's task
- Estimated time
- Difficulty
- Overall 60-day progress
- Completion count
- Achievements/milestones
- Clear action to open today's challenge

## Thoughtful UX Idea

Include a small **"Today's Focus"** workflow that turns the challenge into three concrete actions:

```text
Build → Commit → Share
```

This is useful because the challenge is not only about finishing a coding task; students also need to produce public proof of work.

The dashboard should make the daily workflow obvious without requiring the student to figure it out.

---

# Required Edge States

The dashboard must account for these realistic states.

## State 1 — First Day / 0-Day Streak

A brand-new student should see something like:

- Streak: 0
- Day 1 / 60
- "Start Your Streak"
- Day 1 task
- Progress: 0 / 60

Do not make a new student look as if they have already completed several days.

## State 2 — Active Streak

Example:

- Streak: 12
- Day 13 / 60
- Positive but restrained status
- Progress updated accordingly

The UI should clearly communicate momentum.

## State 3 — Missed Day

Show explicit feedback such as:

- Streak broken
- Yesterday's task was missed
- Current streak reset
- Clear CTA to complete today's task and restart

Do not hide the missed-day state.

## State 4 — Empty Profile

Handle missing information gracefully.

For example:

- Default avatar/initial
- "Developer" or another neutral fallback name
- "Choose a track"
- "College not added"

The layout must remain visually clean even when profile information is absent.

---

# Demo State Testing

Because this is a mocked-data challenge, provide a simple development/demo mechanism that allows the four states to be tested:

```text
Active
First Day
Missed
Empty Profile
```

This may be implemented using mocked state, localStorage, or a small developer preview control.

The final student-facing UI should not feel like a testing tool.

---

# Screen 3 — Challenge Day `/day/12`

This is the complete experience for one challenge day.

The student should be able to understand the task without leaving the page.

## Required Content

Display:

- Day number
- Task title
- Track
- Difficulty
- Estimated time
- Task description
- What needs to be built
- Requirements/checklist
- GitHub proof submission
- LinkedIn proof submission
- Submit/complete action
- Completion status

## Checklist

Allow the student to check off task requirements.

Persist the mocked state locally if practical.

## Proof of Work

Provide fields for:

```text
GitHub repository / commit URL
LinkedIn post URL
```

The interface should make it obvious that both are required proof-of-work signals.

After submission:

- Mark the day completed
- Update streak/progress
- Show a clear success state

---

# Design Requirements

## Mobile First

The judges will open the application at:

```text
390px width
```

Design for this first.

Check:

- No horizontal scrolling
- No clipped text
- No oversized desktop cards
- Buttons remain easy to tap
- Navigation remains usable
- Cards fit naturally inside the viewport
- Typography remains readable

Desktop should be a secondary responsive layout.

---

# Navigation

Use a simple navigation structure.

Desktop:

- ABTalks branding
- Dashboard
- Day 12

Mobile:

- Bottom navigation with:
  - Home
  - Dashboard
  - Day 12

Important:

The landing page is `/`.

Do not create a separate entry/loading page.

The landing page itself is the required public first experience.

The Home navigation item should point to `/`.

---

# Technical Requirements

Use whatever frontend framework makes the implementation fastest and most reliable.

A React + Vite + Tailwind CSS implementation is acceptable.

Recommended tools:

- React
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React

Use mocked data.

No backend is required.

No real authentication is required.

No database is required.

---

# State Management

Keep state simple.

A custom hook using localStorage is sufficient.

Example state shape:

```js
{
  completedDays: [],
  currentStreak: 0,
  submissions: {},
  checklists: {}
}
```

The UI should derive:

```text
completedCount
activeDay
currentStreak
```

from the state instead of hardcoding everything independently.

---

# Data

Create realistic challenge data.

At minimum include Day 12.

Example:

```js
{
  dayNumber: 12,
  title: "Build & Deploy Dynamic Dashboard UI",
  track: "Full Stack Web Development",
  difficulty: "Intermediate",
  estimatedTime: "2.5 Hours",
  description: "...",
  requirements: [
    "...",
    "...",
    "..."
  ]
}
```

Additional mocked days may be included for realism.

---

# Animation Rules

Animations should communicate hierarchy and interaction.

Good examples:

- Hero entrance animation
- Staggered section reveal
- Subtle floating/3D visual
- Progress bar animation
- Streak pulse
- Button hover/tap feedback
- Checklist completion feedback

Avoid:

- Constant large movements
- Excessive particle effects
- Slow animations that delay usability
- Animations that cause layout shifts
- Anything that makes the mobile UI feel unstable

Performance and readability come first.

---

# Visual Quality Checklist

Before considering the project complete, verify:

- [ ] `/` looks compelling within the first viewport
- [ ] The 60-day concept is immediately understandable
- [ ] `/dashboard` clearly answers "What do I do today?"
- [ ] `/day/12` contains the complete task workflow
- [ ] GitHub proof can be entered
- [ ] LinkedIn proof can be entered
- [ ] Progress updates after completion
- [ ] Active streak state works
- [ ] First-day state works
- [ ] Missed-day state works
- [ ] Empty-profile state works
- [ ] Dashboard achievements are visible
- [ ] Today's Focus workflow is visible
- [ ] No horizontal overflow at 390px
- [ ] Buttons are comfortably tappable
- [ ] No broken icons/imports
- [ ] No console-breaking runtime errors
- [ ] Production build succeeds

---

# Route Map

The final submission must contain this exact route map:

```text
/
/dashboard
/day/12
```

Keep these routes stable.

---

# Final QA

Before submission:

1. Run:

```bash
npm run dev
```

2. Test:

```text
/
 /dashboard
 /day/12
```

at 390px width.

3. Test all mock states:

```text
Active
First Day
Missed
Empty Profile
```

4. Return the demo to the normal Active state.

5. Run:

```bash
npm run build
```

6. Fix every build/runtime error.

7. Push the final source code to GitHub.

8. Deploy the application.

9. Test the three routes on the actual deployed URL.

10. Submit the repository, deployment URL, and Route Map.

---

# Core Principle

Do not build more features just to make the project bigger.

The goal is:

**A student sees the challenge → understands today's work → builds → submits proof → sees their progress → comes back tomorrow.**

Every design decision should make that loop clearer, more motivating, and easier to complete on a phone.
