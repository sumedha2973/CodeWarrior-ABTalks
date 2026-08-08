export const defaultStudentProfile = {
  name: "Alex Dev",
  track: "Full Stack Web Development",
  college: "Tech Institute of Technology",
};

export const stateVariants = {
  activeStreak: {
    currentStreak: 12,
    totalDaysCompleted: 12,
    missedYesterday: false,
    statusText: "On a roll! Keep up the momentum.",
  },
  firstDay: {
    currentStreak: 1,
    totalDaysCompleted: 1,
    missedYesterday: false,
    statusText: "Welcome to Day 1! Start your journey today.",
  },
  missedDay: {
    currentStreak: 0,
    totalDaysCompleted: 11,
    missedYesterday: true,
    statusText: "You missed yesterday's task. Complete today to restart your streak!",
  },
};

export const achievementsList = [
  {
    id: "first-commit",
    title: "First Commit",
    description: "Completed Day 1 setup",
    unlocked: true,
  },
  {
    id: "week-one",
    title: "7-Day Warrior",
    description: "Reached a 7-day streak",
    unlocked: true,
  },
  {
    id: "halfway",
    title: "Halfway Hero",
    description: "Completed 30 challenge days",
    unlocked: false,
  },
  {
    id: "master",
    title: "Full Stack Master",
    description: "Finished all 60 days",
    unlocked: false,
  },
];

export const day12Task = {
  dayNumber: 12,
  title: "Build & Deploy Dynamic Dashboard UI",
  track: "Full Stack Web Development",
  difficulty: "Intermediate",
  estimatedTime: "2.5 Hours",
  description:
    "Design and assemble a high-performance, dark-themed responsive dashboard. Ensure clean state management, modular components, and seamless layout transitions for mobile devices.",
  requirements: [
    "Implement compact responsive profile and mission focus cards",
    "Integrate interactive checklist logic with state persistence",
    "Deploy the dashboard application to Vercel or Netlify",
  ],
};

export const tasksByDay = {
  1: {
    dayNumber: 1,
    title: "Environment Setup & Hello World",
    track: "Full Stack Web Development",
    difficulty: "Beginner",
    estimatedTime: "1.5 Hours",
    description:
      "Initialize your developer workstation, configure Node.js, Git, and VS Code extensions, and create your first React project template.",
    requirements: [
      "Install Node.js LTS, Git, and VS Code developer tooling",
      "Initialize a Vite-powered React application with Tailwind CSS",
      "Push your initial repository commit to GitHub",
    ],
  },
  7: {
    dayNumber: 7,
    title: "Build First React Component System",
    track: "Full Stack Web Development",
    difficulty: "Beginner",
    estimatedTime: "2 Hours",
    description:
      "Construct a modular UI library with reusable atomic components including buttons, cards, inputs, and modal wrappers using custom Tailwind props.",
    requirements: [
      "Create modular UI primitives (Button, Input, Card, Badge)",
      "Implement component variance styling using standard prop interfaces",
      "Document component usage and demonstrate them in a single showcase layout",
    ],
  },
  12: day12Task,
  15: {
    dayNumber: 15,
    title: "Connect Frontend With API",
    track: "Full Stack Web Development",
    difficulty: "Intermediate",
    estimatedTime: "2.5 Hours",
    description:
      "Integrate asynchronous data fetching into React using Axios or Fetch API, manage loading/error boundaries, and cache incoming server responses efficiently.",
    requirements: [
      "Fetch dynamic data from a REST endpoint using custom React hooks",
      "Implement visual skeleton loading states and robust error handling UI",
      "Add retry capabilities and user response notifications for failed requests",
    ],
  },
  30: {
    dayNumber: 30,
    title: "Build Full Stack Feature Module",
    track: "Full Stack Web Development",
    difficulty: "Advanced",
    estimatedTime: "3.5 Hours",
    description:
      "Develop an end-to-end feature module connecting a Express/Node.js backend endpoint to MongoDB database models and rendering dynamic records on the frontend.",
    requirements: [
      "Create RESTful CRUD backend endpoints using Express.js and Mongoose",
      "Connect client-side form submissions to trigger backend state changes",
      "Perform data validation on both client and server boundaries",
    ],
  },
  45: {
    dayNumber: 45,
    title: "Add Advanced Authentication and Optimization",
    track: "Full Stack Web Development",
    difficulty: "Advanced",
    estimatedTime: "4 Hours",
    description:
      "Secure application routes using JWT tokens, HTTP-only cookies, password hashing algorithms, and optimize bundle sizes with React dynamic lazy imports.",
    requirements: [
      "Implement secure JWT authentication flow with protected client routes",
      "Add bcrypt password hashing and token validation middleware on backend",
      "Apply code splitting with React.lazy and Suspense boundaries",
    ],
  },
  60: {
    dayNumber: 60,
    title: "Final Portfolio Grade Project",
    track: "Full Stack Web Development",
    difficulty: "Expert",
    estimatedTime: "5 Hours",
    description:
      "Complete, audit, and deploy your capstone full-stack application featuring live analytics, production error logging, automated tests, and CI/CD pipelines.",
    requirements: [
      "Finalize full-stack capstone codebase with end-to-end functional workflows",
      "Configure automated GitHub Actions for deployment and linting checks",
      "Publish live production URL alongside documentation and architecture overview",
    ],
  },
};