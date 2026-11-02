import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, Users, Network, Sparkles } from 'lucide-react'
import { students } from '../lib/data'
import { recommendTeam } from '../lib/matching'
const milestones = [
 ['Discover','Agree on the problem statement','A shared brief, scope, and success criteria'],
 ['Connect','Meet your mentor and organization','Team charter and individual responsibilities'],
 ['Investigate','Audit the available data','Evidence inventory and baseline findings'],
 ['Listen','Interview project stakeholders','Interview insights and user needs'],
 ['Design','Sketch and test initial concepts','Concept sketches and feedback summary'],
 ['Build','Build the first working prototype','A working prototype for partner review'],
 ['Refine','Validate and refine the solution','Test findings and improved solution'],
 ['Share','Present the final deliverables','Partner handoff, demo, and portfolio reflection']
]
export default function CollaborationWorkspace({projects,approved,tasks,setTasks}) {
 const available=projects.filter(p=>approved[p.id])
 const [id,setId]=useState(available[0]?.id||'')
 const [preview,setPreview]=useState(false)
 const [demoTasks,setDemoTasks]=useState([0,1])
 const demo=preview||!available.length
 const p=demo?(projects.find(p=>p.id==='coffee')||projects[0]):(available.find(p=>p.id===id)||available[0])
 const team=(demo?recommendTeam(p,students):approved[p.id]).map(id=>students.find(s=>s.id===id)).filter(Boolean)
 const complete=demo?demoTasks:(tasks[p.id]||[]),pct=Math.round(complete.length/8*100)
 const current=milestones.findIndex((_,i)=>!complete.includes(i))
 function toggle(i){const next=complete.includes(i)?complete.filter(n=>n!==i):[...complete,i];if(demo)setDemoTasks(next);else setTasks(v=>({...v,[p.id]:next}))}
 return <section className="page collaboration-page"><div className="workspace-intro"><div><span className="eyebrow">THE 8-WEEK COLLABORATION EXPERIENCE</span><h1>Different perspectives.<br/><em>Progress, together.</em></h1></div><div className="workspace-mode">{demo?<span><Sparkles size={14}/> Interactive demo · fictional team</span>:<select aria-label="Active project" value={p.id} onChange={e=>setId(e.target.value)}>{available.map(p=><option key={p.id} value={p.id}>{p.org}</option>)}</select>}{available.length>0&&<button className="text-link" onClick={()=>setPreview(!preview)}>{demo?'Return to my team':'View pitch demo'}</button>}</div></div>
 <div className="workspace-banner"><div><span className="eyebrow">{p.org} / {p.category}</span><h2>{p.title}</h2><p>{p.description}</p></div><div className="workspace-progress"><strong>{pct}%</strong><span>{complete.length} of 8 milestones complete</span><div className="progress" role="progressbar" aria-label="Milestone progress" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><span style={{width:`${pct}%`}}/></div><small>{current<0?'Ready for partner handoff':`Next: Week ${current+1} · ${milestones[current][0]}`}</small></div></div>
 <div className="workspace-layout"><div><div className="workspace-section-heading"><h2>Your path from idea to impact</h2><span>8 weeks · {p.hours}h / week</span></div><div className="milestone-grid">{milestones.map(([phase,title,output],i)=><label className={`milestone-card ${complete.includes(i)?'done':''} ${i===current?'current':''}`} key={phase}><div className="milestone-top"><span>WEEK {String(i+1).padStart(2,'0')} · {phase}</span><input type="checkbox" aria-label={`Complete week ${i+1}: ${title}`} checked={complete.includes(i)} onChange={()=>toggle(i)}/></div><h3>{title}</h3><p>{output}</p><span className="milestone-state">{complete.includes(i)?'✓ Complete':i===current?'In focus':'Upcoming'}</span></label>)}</div></div>
 <aside className="workspace-sidebar"><div className="panel"><div className="eyebrow">COMPLEMENTARY MINDS</div><h3>One team. Shared ownership.</h3>{team.map(s=><div className="workspace-member" key={s.id}><img className="avatar portrait-avatar" src={s.portrait} alt={s.name}/><div><strong>{s.name}</strong><small>{s.major}</small><span className="responsibility">Owns: {s.skills.filter(k=>p.skills.includes(k)).join(' & ')||s.skills[0]}</span></div></div>)}</div><div className="panel mentor-panel"><span className="eyebrow">MENTORSHIP / EVERY WEEK</span><h3>Dr. Avery Brooks</h3><p>Applied research & product strategy</p><div className="mentor-session">Wednesdays · 4–5 pm<br/><small>Feedback, roadblocks, and next steps</small></div><p className="disclaimer">Fictional mentor and illustrative schedule.</p></div><div className="panel deliverable-panel"><span className="eyebrow">THE PARTNER HANDOFF</span><h3>What you’ll deliver</h3><p>{p.deliverables}</p>{p.constraints&&<p>Considerations: {p.constraints}</p>}<span className="deliverable-note"><CheckCircle2 size={15}/> Week 8 · Demo & portfolio reflection</span></div></aside></div>
 {pct===100&&<div className="completion"><CheckCircle2 size={25}/><h2>You built that.</h2><p>{demo?'Demo complete. An approved team’s completed project appears in its portfolio.':`Project added to your portfolio: ${p.title}`}</p><div className="tags"><span>First Project Completed</span><span>Interdisciplinary Collaborator</span><span>Research Contributor</span><span>Demo Day Presenter</span></div></div>}
 <div className="pilot-proposal"><div><span className="eyebrow">PROPOSED PILOT / START SMALL, LEARN TOGETHER</span><h2>20 students. Four teams.<br/>Two community partners.</h2><p>Run one eight-week cohort: four interdisciplinary teams of five students, with two teams working alongside each partner organization. Weekly mentorship supports a practical solution and a final partner showcase.</p><span className="pilot-status">Proposal · recruitment and partners to be confirmed</span></div><div className="pilot-numbers"><div><Users/><strong>20</strong><span>students · 5 per team</span></div><div><Network/><strong>4</strong><span>interdisciplinary teams</span></div><div><Sparkles/><strong>2</strong><span>partner organizations</span></div></div></div><div className="workspace-end"><p>Pilot learning goals: student completion, cross-disciplinary learning, and partner feedback on the final deliverables.</p><Link className="text-link" to="/matching">Explore team matching <ArrowUpRight size={16}/></Link></div>
 </section>
}
