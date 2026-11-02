// Greedy set cover: each choice is scored against the skills still missing.
export function recommendTeam(project, candidates) {
  const team = []
  const covered = new Set()
  while (team.length < project.size) {
    const ranked = candidates.filter(s => !team.some(t => t.id === s.id) && s.hours >= project.hours).map(s => {
      const added = project.skills.filter(k => !covered.has(k) && s.skills.includes(k)).length
      const diversity = team.some(t => t.major === s.major) ? 0 : 9
      const score = added * 40 + diversity + s.interests.filter(i => i === project.category).length * 12 + s.goals.filter(g => [...project.skills,...project.helpful].includes(g)).length * 5 + s.skills.filter(k => project.helpful.includes(k)).length * 3
      return {s,score}
    }).sort((a,b) => b.score-a.score || a.s.id.localeCompare(b.s.id))
    if (!ranked.length) break
    team.push(ranked[0].s)
    ranked[0].s.skills.forEach(k => covered.add(k))
  }
  return team.map(s=>s.id)
}
export function coverage(project, team) {
  return project.skills.filter(k=>team.some(s=>s.skills.includes(k)))
}
