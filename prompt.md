You are the lead frontend engineer and product designer for a hackathon project.

We are building **Problem Statement 1: “Redesign ABTalks”**.

## PRODUCT CONTEXT

ABTalks runs a **60-day coding challenge for Indian college students**.

Students choose a track, build something every day, and maintain a public learning streak by submitting:

* A GitHub commit/repository
* A LinkedIn post

The current product works, but the brief says:

> “The product works. It has never been designed.”

Our goal is to redesign the experience into a polished, modern, motivating product that feels like something ABTalks could actually ship.

## REQUIRED ROUTES

We MUST build exactly these core routes:

1. `/` — Landing Page
2. `/dashboard` — Student Dashboard
3. `/day/12` — Challenge Day

The submission requires the following Route Map in this exact order:

/
/dashboard
/day/12

Do not change these route paths.

## REQUIREMENTS

### 1. Landing Page `/`

This is the first experience for a student who has never heard of ABTalks.

It should communicate:

* What the 60-day challenge is
* Why a student should join
* How the challenge works
* Trust/credibility
* Motivation to commit to 60 days
* A clear primary CTA

The page should feel exciting and memorable without becoming visually chaotic.

### 2. Student Dashboard `/dashboard`

This is the student's home screen after joining the challenge.

It should include:

* Current streak
* Today's task
* Progress through the challenge
* Overall completion
* Student standing and/or achievements

It must also handle realistic states such as:

* First day with no streak
* A missed day
* Empty profile

### 3. Challenge Day `/day/12`

This is the complete experience for one challenge day.

The student should be able to:

* Read the day's task
* Understand what needs to be built
* See useful task information
* Submit GitHub repository/commit proof
* Submit LinkedIn post proof

Authentication, real accounts, and a production database are NOT required.

Use realistic mocked data.

## DESIGN DIRECTION

The product must be **mobile-first**.

The evaluator will open the submission at **390px width**, so mobile is the primary design target. Desktop is secondary.

We want a design that is:

* Premium
* Modern
* Energetic
* Motivating
* Clean
* Highly polished
* Distinctive rather than looking like a generic dashboard template

Use strong visual hierarchy and intentional spacing.

We are interested in tasteful visual storytelling and subtle motion.

A limited amount of 3D/depth is welcome if it improves the product experience. Do NOT turn the entire interface into a heavy 3D/WebGL experience.

The visual language should relate naturally to:

* Coding
* Progress
* Building
* Consistency
* Streaks
* A 60-day journey

Avoid random decorative elements that have nothing to do with the product.

## TECH STACK

Use:

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Lucide React
* Framer Motion

Use additional libraries only when there is a clear reason. Do not introduce unnecessary dependencies.

There is NO requirement for:

* Backend
* Database
* Authentication
* Real user accounts
* External AI APIs
* Real GitHub integration
* Real LinkedIn integration

Use local mocked data.

## IMPORTANT ENGINEERING RULES

Before changing anything:

1. Inspect the existing project structure and existing dependencies.
2. Do not delete or rewrite unrelated files.
3. Reuse existing setup when appropriate.
4. Keep the architecture simple and hackathon-friendly.
5. Make sure the project can be deployed easily.
6. Ensure all three required routes work directly.
7. Avoid hardcoding the UI in a way that makes future refinement difficult.
8. Keep mocked data separate from UI components.
9. Make the application responsive, with **390px as the primary target**.
10. Avoid unnecessary backend infrastructure.

## FOLDER STRUCTURE

Establish a clean, scalable frontend structure appropriate for this small application.

Prefer a structure along these lines, adapting it to the existing project if necessary:

src/
assets/
components/
data/
pages/
layouts/
routes/
hooks/
utils/

Do not create folders simply for the sake of having more folders. Keep the structure practical.

## MOCK DATA

Create realistic mock data for:

* Student profile
* Current streak
* Challenge progress
* Daily tasks
* Achievements
* GitHub proof
* LinkedIn proof
* Missed-day state
* First-day state

The data should be easy to modify later.

## IMPORTANT

At this stage, DO NOT try to build the final polished UI.

First:

1. Inspect the project.
2. Set up/verify the required technology stack.
3. Establish the folder structure.
4. Configure the required routes.
5. Create the mock data structure.
6. Create basic page/component placeholders.
7. Verify that `/`, `/dashboard`, and `/day/12` all load correctly.
8. Verify there are no build/runtime errors.

After completing this foundation, STOP.

Do not continue into extensive visual design yet.

At the end, briefly report:

* What you changed
* Final folder structure
* Installed/used dependencies
* How to run the project
* Whether all three routes work
* Any issues or decisions that need attention before we begin the UI design


# PROMPT 2
Now move from the foundation into the actual product design and implementation.
Do not change the existing architecture or required routes unless absolutely necessary.
The goal is to make this feel like a real, premium product that ABTalks could ship, not a generic AI-generated dashboard.

DESIGN GOAL
ABTalks is a 60-day coding challenge.
The emotional journey should be:
Discover → Commit → Build → Prove → Progress → Continue
The design should make a student feel:

“I can actually do this for 60 days.”
The product should feel energetic and motivating, but still professional and trustworthy.
Think of the quality bar as a polished modern startup/product website rather than a typical student dashboard.
Do NOT copy an existing website.
Create an original visual identity specifically for ABTalks.

VISUAL DIRECTION
Use a combination of:

Premium modern SaaS aesthetics
Strong typography
Excellent spacing and hierarchy
Subtle depth
Strong cards and surfaces
Smooth micro-interactions
Purposeful motion
Coding/progress visual language
The interface should feel designed, not decorated.
Avoid:

Generic gradient-heavy AI websites
Excessive glassmorphism
Random floating blobs
Excessive rounded cards
Excessive shadows
Random 3D objects
Stock illustrations
Unnecessary animations
Visually noisy dashboards
Huge walls of text
3D / DEPTH
We want ONE memorable visual element that can create a “wow” moment.
Explore using 3D/depth around the concept of the 60-day journey.
Possible directions include:

A dimensional “60”
A 3D progress object
A streak flame with depth
A visual journey/path
Layered code/progress elements
Choose ONE strong direction rather than combining everything.
The 3D/depth element should support the ABTalks concept.
Do NOT introduce a heavy WebGL/Three.js implementation unless it provides a clear benefit.
Prefer lightweight CSS/SVG/depth techniques where they can achieve the desired result.
Most importantly:
The UI must still look excellent if the 3D/motion is not running.

MOBILE-FIRST REQUIREMENT
This is critical.
The evaluator will open the site at:
390px width
Design the mobile experience FIRST.
Do not design desktop first and then squeeze it into mobile.
At 390px:

No horizontal overflow
No clipped text
No elements extending outside the viewport
Buttons must be comfortably tappable
Text must remain readable
Cards must not become unnecessarily tall
Important information should appear above the fold when possible
Navigation must remain usable
Visual effects must not consume the entire screen
Desktop should enhance the experience rather than define it.

LANDING PAGE /
This is the first impression.
The student has never heard of ABTalks.
Within a few seconds they should understand:
What is ABTalks?
A 60-day build challenge for students.
Why should I care?
It turns daily coding into visible proof of work.
What do I do?
Build something every day and submit proof.
Create a visually strong hero section.
Possible messaging direction:
60 DAYS.
BUILD EVERY DAY.
Supporting idea:

Turn your coding consistency into proof of work.
Use a strong primary CTA such as:
Start the 60-Day Challenge
Then visually communicate the journey from Day 1 → Day 60.
Include enough supporting information to establish trust and explain the challenge, but do not create a giant landing page.
The mobile screenshot must feel intentional and immediately understandable.

DASHBOARD /dashboard
The dashboard should NOT look like a collection of statistics.
The student's current journey should be the visual focus.
Prioritize:

Current streak
Today's mission
Challenge progress
Overall completion
Achievements / standing
Create a strong hero/dashboard header such as:
12
DAY STREAK
Then:
Day 12 of 60
Show progress visually.
The current task should be highly actionable.
Example:

TODAY'S BUILD
Build a responsive pricing page
45 min · Web Development
[Continue today's challenge]
The student should immediately know:

What they need to do
How much progress they've made
What they should do next
Also show a compact journey/progress visualization.
Avoid filling the page with statistics that don't help the student act.

THOUGHTFUL UX IDEA
The brief explicitly requires at least one thoughtful idea that improves the student experience.
Implement a concept that clearly separates:
Progress from streak.
For example:
A student who misses a day should NOT feel that all their progress disappeared.
Show something like:
Current streak
0 days
Challenge progress
12 / 60 days completed
If a day was missed:

Missed yesterday? Keep going.
Your streak paused, but your progress is still here.
This should feel encouraging without being childish.
Do not punish the student visually.

EDGE STATES
The UI must support the mock states already created in userStateVariants.js.
Design these states intentionally:

First Day
0-day streak
Day 1 of 60
Clear explanation of how to begin
No fake achievements
Motivating first action
Active Streak
Current streak prominently visible
Today's task
Progress
Achievements
Missed Day
Clearly communicate what happened
Preserve total progress
Explain how to continue
Do not make the interface look broken
CHALLENGE DAY /day/12
This should feel like a focused workspace rather than another dashboard.
The student should immediately understand:
What am I building?
Why am I building it?
What exactly must I submit?
Create a strong hierarchy:
DAY 12

Build a responsive pricing page
Then:

Estimated time
Track
Difficulty
Mission description
Requirements/checklist
Optional hints/resources
Then a dedicated proof-of-work section.

GITHUB PROOF
Input for repository/commit URL.

LINKEDIN PROOF
Input for LinkedIn post URL.
Then a prominent:
Submit today's proof
After submission, provide a satisfying completion state.
The page should make completing Day 12 feel like an accomplishment.

MOTION
Use Framer Motion carefully.
Motion should communicate:

progress
state changes
completion
interaction
hierarchy
Examples:

subtle entrance animations
progress animation
card hover/tap states
completion celebration
smooth page transitions
Do NOT animate every element.
Avoid animations that make the page slower or interfere with readability.

COMPONENT QUALITY
Keep the components reusable.
Do not create one giant component containing the entire page.
Reuse existing components where appropriate.
If new components are needed, place them in logical folders.
Keep mock data separate from presentation.

RESPONSIVE TESTING
After implementing the design:
Test all three routes at approximately:

390px
768px
desktop width
The 390px version is the highest priority.
Look specifically for:

horizontal overflow
text wrapping problems
oversized elements
broken navigation
buttons becoming difficult to tap
excessive vertical scrolling
visual hierarchy problems
IMPORTANT
Do NOT stop at making the pages technically functional.
Actually implement the visual design.
Use the existing mocked data.
Do not add authentication, backend, database, external APIs, or unnecessary functionality.
Do not modify the required route paths.
At the end, report:

What visual system you implemented
What 3D/depth approach you chose and why
What thoughtful UX improvement you implemented
Any new components created
Any dependencies added
Whether all three routes were tested at 390px
Any remaining visual issues


# PROMPT 3
We are now going to implement the actual React project.

I already created an empty Vite + React project locally.

IMPORTANT:
Do NOT generate a conceptual image or mockup.
We are now writing the actual source code.

The project uses:

- React
- Vite
- JavaScript
- react-router-dom
- Tailwind CSS
- framer-motion
- lucide-react
- clsx
- tailwind-merge

The project is for Hackathon Problem Statement 1: "Redesign ABTalks".

REQUIRED ROUTES:

/
 /dashboard
 /day/12

These exact routes must remain unchanged.

PRODUCT:

ABTalks runs a 60-day coding challenge for Indian college students.

Students:
- choose a track
- build something every day
- submit a GitHub commit/repository
- submit a LinkedIn post
- maintain a public learning streak

The product should make consistency and proof of work feel rewarding.

REQUIRED SCREENS:

LANDING PAGE `/`

A first-time student should immediately understand:

- What ABTalks is
- What the 60-day challenge is
- How it works
- Why it is valuable
- A strong CTA to start

DASHBOARD `/dashboard`

Show:

- Current streak
- Today's task
- Challenge progress
- Overall completion
- Achievements / student standing

It must support mocked states for:

- First day
- Active streak
- Missed day
- Empty profile

CHALLENGE DAY `/day/12`

Show:

- Day 12
- Task title
- Description
- Estimated time
- Track
- Difficulty
- Requirements/checklist
- GitHub proof submission
- LinkedIn proof submission
- Submit button
- Completion state

DESIGN:

Mobile-first.

The evaluator will view the website at exactly approximately 390px wide.

The design must therefore be excellent at 390px before worrying about desktop.

Visual direction:

- dark premium interface
- cyan/blue accent
- strong typography
- high contrast
- clean spacing
- subtle depth
- polished cards
- tasteful motion
- coding/progress visual language

Avoid generic AI landing-page design.

Avoid:
- excessive gradients
- excessive glassmorphism
- random blobs
- stock illustrations
- excessive rounded cards
- unnecessary animations
- visual clutter

3D/depth is allowed, but keep it lightweight.

Use one memorable dimensional visual related to the 60-day journey, such as a dimensional "60" or "12".

Do not use heavy Three.js/WebGL unless genuinely necessary.

THOUGHTFUL UX:

Separate STREAK from PROGRESS.

For example:

Current streak: 0 days

Challenge progress: 12 / 60 days completed

If a student misses a day, communicate:

"Missed yesterday?
Your streak paused, but your progress is still here."

The student should never feel that missing one day erased their entire journey.

TECHNICAL REQUIREMENTS:

Create this structure:

src/
├── assets/
├── components/
│   ├── common/
│   ├── dashboard/
│   └── day/
├── data/
├── hooks/
├── layouts/
├── pages/
├── routes/
└── utils/

Keep mock data separate from UI.

Create reusable components instead of putting everything into one huge component.

IMPORTANT IMPLEMENTATION RULE:

Do NOT just explain the code.

Generate the actual files needed for the project.

For each file, clearly label:

FILE: src/path/to/file.jsx

followed by the complete file contents.

Start with the foundation only:

1. Routing
2. Folder structure
3. Mock data
4. Layout
5. Basic versions of the three pages

Do NOT spend time on final visual polish yet.

Make sure:

- `/` works
- `/dashboard` works
- `/day/12` works
- there are no missing imports
- there are no undefined variables
- the project can run with `npm run dev`

After generating the foundation, STOP.

Do not generate the next visual redesign yet.

# PROMPT 4
The ABTalks 60-Day Coding Challenge website is now functionally complete.

Do not modify:
- routing
- file structure
- mock data
- existing features
- component architecture

First, analyze the current UI and improve only the visual design.

Focus on:
1. Making the landing page more impressive for hackathon judges.
2. Adding a meaningful visual representation of the 60-day journey.
3. Improving hierarchy, spacing, typography, and card designs.
4. Making the dashboard feel like a developer progress platform instead of a normal admin dashboard.
5. Improving mobile view at 390px width.

Design direction:
- Premium developer challenge platform
- Dark futuristic theme
- Cyan accent remains
- Minimal but memorable
- One strong depth/3D-inspired visual element only
- Avoid excessive gradients and unnecessary decorations

Add:
- subtle Framer Motion animations
- better hover states
- better loading/transition feel

Do not create new dependencies.
Do not use external APIs.
Keep the current functionality working.

Modify only the necessary files and explain each change.

# PROMPT 5 
Analyze the ABTalks website as a first-time user.

The current design looks polished but the purpose and user journey are not immediately clear.

Improve the information hierarchy.

Landing page should communicate within 5 seconds:

1. What ABTalks is:
"A 60-day coding challenge where developers build daily, submit proof, and create a public record of consistency."

2. Who it is for:
"Students and developers who want practical coding discipline and visible progress."

3. What the user does:
Step 1: Choose a learning track
Step 2: Complete daily coding missions
Step 3: Submit GitHub + LinkedIn proof
Step 4: Build your developer identity

Redesign the landing page flow:

Section 1:
- Clear hero headline explaining the product.
- Strong CTA button.

Section 2:
- Explain the 60-day challenge journey visually.

Section 3:
- Simple 3-step or 4-step workflow.

Section 4:
- Show what users achieve (streak, portfolio, consistency).

Do not add unnecessary sections.
Keep mobile-first.
Keep the dark futuristic developer theme.
Keep existing routes and functionality.

# PROMPT 6 
Improve the DashboardPage UI/UX for the ABTalks 60-Day Coding Challenge.

Do not change:
- routes
- data structure
- existing state variants
- functionality

Goal:
Transform the dashboard from a simple stats page into a developer challenge command center.

Improve:

1. Developer Profile Section:
- Make it feel like a developer identity card.
- Show:
  - Name
  - Track
  - College
  - Current streak
  - Challenge day

2. Progress Visualization:
Replace the simple progress bar with a more engaging 60-day challenge tracker:
- completed days
- current day
- upcoming days
- clear visual progress

3. Today's Mission:
Make it the main focus of the page.
Include:
- Day number badge
- Difficulty
- Estimated time
- Mission title
- Clear "Continue Mission" CTA

4. Achievements:
Make badges feel more rewarding:
- locked/unlocked states
- better icons
- progress feeling

5. Mobile-first:
The page must look excellent at 390px width.

Design:
- premium developer platform
- dark theme
- cyan accent
- subtle Framer Motion animations
- avoid unnecessary decoration

Do not remove the State Mock testing buttons because evaluators need them.

# Prompt 7
The Dashboard UI is improved. Now make the experience more user-centered.

Do not change routing, state logic, or existing functionality.

Improve these areas:

1. Reduce excessive developer-console terminology.
Replace words like:
- Matrix
- Workspace
- Visualizer

with simpler product language.

2. Make Today's Mission the strongest action area.
A user should instantly know:
"What do I need to do today?"

Add a small checklist:
- Build today's task
- Commit code
- Share progress

3. Improve missed streak state UX.
When streak is reset:
- clearly explain what happened
- reassure progress is saved
- encourage restarting

4. Add a small "Developer Proof" section showing:
- GitHub commits
- LinkedIn posts
- Projects completed

Use mock data only.

Keep:
- mobile-first design
- dark theme
- cyan accent
- existing evaluator state switcher

Do not add unnecessary animations or redesign everything.

# PROMPT 8
Improve the ChallengeDayPage.jsx functionality and UX.

Goal:
Make the Day 12 page feel like the actual workspace where a developer completes today's challenge.

Requirements:

1. Keep the existing dark cyan ABTalks design system.
2. Keep the current task information:
   - Day number
   - Task title
   - Track
   - Difficulty
   - Estimated time
   - Description
   - Requirements checklist

3. Add a clear "Today's Mission Flow" section:
   Step 1: Build the task
   Step 2: Push code to GitHub
   Step 3: Share progress on LinkedIn
   Step 4: Submit proof

4. Improve the submission area:
   - Separate GitHub URL and LinkedIn URL inputs
   - Add labels explaining what each link is for
   - Add a strong "Submit Proof" button
   - Show submitted success state after submission

5. Connect submission with useStudentState:
   - When proof is submitted:
      * mark the current day as completed
      * increase completed days count
      * update streak
      * save progress to localStorage

6. After successful submission show:
   "Day 12 Completed 🎉"
   "Your streak continues"
   and a button:
   "Back to Dashboard"

7. Keep the component responsive for mobile.

Do not add unnecessary features. Focus on making the daily completion workflow clear and functional.