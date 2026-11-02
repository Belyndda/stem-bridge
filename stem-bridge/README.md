# STEM Bridge

A local, interactive React prototype for an eight-week interdisciplinary project matching program. All people and organizations are fictional; NovaTech Labs is a hypothetical large technology company. No real partnerships are represented.

## Run

From this directory (`stem-bridge/stem-bridge`):

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. Use `npm run build` for a production build and `npm run preview` to serve it. `npm run lint` checks the source.

React, Vite, Tailwind CSS, React Router, Lucide React, and Motion power the frontend. All assets are local CSS and vector icons; no remote fonts, backend, credentials, or external APIs are needed. Once the app is loaded it can be demonstrated without internet while the local server remains running. This is not an installable offline PWA.

## Seven-minute demo

1. Toggle **Demo mode** and load **Sample profile**. Visit **For students**.
2. **Explore** challenges. Search, filter, save, and express interest on a detail page.
3. **Submit** a fictional organization challenge. Plain-language descriptions are supported; expertise is optional.
4. **Match & approve**: choose a challenge and generate a team. The composition map shows coverage and contributions. Remove and replace students to inspect gaps. Approve a complete, eligible team.
5. Open **Workspace**. Complete tasks to update the eight-week timeline and progress. Completing all tasks unlocks portfolio content and meaningful achievement badges.
6. **Reset** restores the initial local data, including clearing submitted challenges and approvals.

Student onboarding has four validated steps. Saved projects, profiles, expressions of interest, custom challenges, approved teams, and task state persist in localStorage. They remain in this browser only. No actual applications, messages, or partner submissions are sent.

## Explainable matching

`src/lib/matching.js` uses deterministic greedy set cover. It first excludes students whose available hours are below the project's requirement. At each selection it scores each remaining student against the team's current uncovered skills: 40 points per newly covered required skill, 9 for a new discipline, 12 for a shared project interest, 5 per relevant learning goal, and 3 per helpful skill. Stable student IDs break ties. This builds a complementary team rather than taking the highest individually ranked students.

Team size is project-specific. The UI exposes missing skills, contributors, availability, discipline diversity, and learning goals. A coordinator can modify the proposal. Approval requires the requested number of unique students, complete required-skill coverage, and compatible availability. Coverage is illustrative, not a validated prediction. Greedy matching is not globally optimal and can leave gaps for unusual custom challenges; the coordinator can adjust the team or revise the brief.

## Structure

- `src/App.jsx`: application shell, routes, onboarding, partner forms, matching review, and workspace
- `src/components/ProjectCard.jsx`: shared challenge card
- `src/lib/data.js`: fictional seed challenges and students
- `src/lib/matching.js`: pure matching and coverage functions
- `src/index.css`: responsive design system and Tailwind entry point

## Verification

Production build and ESLint pass. Pure-algorithm assertions cover repeatability, unique team members, availability, full seed-project coverage, and an empty candidate pool. Browser automation was unavailable in the development environment; visual and end-to-end browser checks remain to be performed before the live pitch.
