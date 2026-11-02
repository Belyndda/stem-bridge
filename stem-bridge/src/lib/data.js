export const disciplines = ['Computer Science','Engineering','Biology and Life Sciences','Chemistry','Physics','Mathematics and Statistics','Environmental Science','Data Science','Health Sciences','Communication','Design','Business']
export const interests = ['Sustainability','Healthcare','Artificial Intelligence','Education','Robotics','Climate','Community Impact','Scientific Research','Entrepreneurship']
export const projects = [
{ id:'coffee', org:'River & Bean Coffee Co.', type:'Small Business', title:'Less waste. Better coffee.', category:'Sustainability', description:'Turn everyday café data into a practical waste reduction dashboard. Help a neighborhood coffee shop make a smaller footprint.', skills:['Data analysis','Web development','Research'], helpful:['Design','Communication'], disciplines:['Data Science','Computer Science','Environmental Science'], roles:['Data analyst','Frontend builder','Sustainability researcher'], hours:5, size:3, color:'mint', symbol:'↗', deliverables:'An interactive waste dashboard, a baseline waste audit, and actionable recommendations.' },
{ id:'ai', org:'NovaTech Labs', type:'Large Company', title:'Make AI a little more human.', category:'Artificial Intelligence', description:'Design accessible, hands-on AI learning tools for students who are just getting started.', skills:['Web development','Design','Research'], helpful:['Python','Communication'], disciplines:['Computer Science','Design','Health Sciences'], roles:['Developer','Accessibility designer','Learning researcher'], hours:6,size:3,color:'lavender',symbol:'✳',deliverables:'An accessible learning prototype, usability findings, and an educator guide.' },
{ id:'farm', org:'GreenRoots Community Farm',type:'Nonprofit',title:'Good food. Zero wasted potential.',category:'Community Impact',description:'Find the patterns behind food waste and help a community farm get more fresh food to local families.',skills:['Data analysis','Research','Communication'],helpful:['Python'],disciplines:['Data Science','Environmental Science','Business'],roles:['Analyst','Field researcher','Community liaison'],hours:4,size:3,color:'peach',symbol:'✺',deliverables:'A food waste analysis, collection toolkit, and community presentation.' },
{ id:'health',org:'City Health Initiative',type:'Nonprofit',title:'Better care starts with access.',category:'Healthcare',description:'Reimagine how neighbors find and understand public health resources.',skills:['Design','Research','Web development'],helpful:['Communication'],disciplines:['Design','Health Sciences','Computer Science'],roles:['Service designer','Health researcher','Developer'],hours:5,size:3,color:'blue',symbol:'＋',deliverables:'A resource finder prototype and an accessible community resource guide.' },
{ id:'research',org:'Horizon Research Center',type:'Research Institution',title:'Make climate data tell a story.',category:'Scientific Research',description:'Transform environmental sensor readings into clear visual stories for researchers and the public.',skills:['Python','Data analysis','Design'],helpful:['Research'],disciplines:['Physics','Data Science','Design'],roles:['Scientific programmer','Data analyst','Visual designer'],hours:6,size:3,color:'lavender',symbol:'⌁',deliverables:'A reproducible data pipeline and interactive environmental visualizations.' },
{ id:'energy',org:'Campus Sustainability Office',type:'University / Campus Partner',title:'A brighter campus. Less energy.',category:'Climate',description:'Investigate building energy use and propose practical ways to reduce campus emissions.',skills:['Engineering','Data analysis','Research'],helpful:['Communication'],disciplines:['Engineering','Data Science','Environmental Science'],roles:['Systems engineer','Energy analyst','Researcher'],hours:5,size:3,color:'mint',symbol:'ϟ',deliverables:'An energy audit, building comparison dashboard, and efficiency proposal.' }
]
export const students = [
{id:'maya',name:'Maya Chen',major:'Computer Science',skills:['Web development','Python'],interests:['Artificial Intelligence','Sustainability'],goals:['Design'],hours:6,color:'lavender'},
{id:'jordan',name:'Jordan Williams',major:'Data Science',skills:['Data analysis','Python'],interests:['Sustainability','Climate'],goals:['Communication'],hours:6,color:'mint'},
{id:'priya',name:'Priya Patel',major:'Environmental Science',skills:['Research','Communication'],interests:['Sustainability','Community Impact'],goals:['Data analysis'],hours:5,color:'peach'},
{id:'alex',name:'Alex Rivera',major:'Design',skills:['Design','Communication'],interests:['Healthcare','Artificial Intelligence'],goals:['Web development'],hours:6,color:'blue'},
{id:'sam',name:'Sam Okafor',major:'Engineering',skills:['Engineering','Python','Research'],interests:['Climate','Robotics'],goals:['Data analysis'],hours:6,color:'mint'},
{id:'em',name:'Em Taylor',major:'Health Sciences',skills:['Research','Design'],interests:['Healthcare','Education'],goals:['Communication'],hours:5,color:'peach'},
{id:'leo',name:'Leo Park',major:'Physics',skills:['Python','Data analysis'],interests:['Scientific Research'],goals:['Design'],hours:6,color:'lavender'},
{id:'noor',name:'Noor Hassan',major:'Business',skills:['Communication','Data analysis'],interests:['Community Impact','Entrepreneurship'],goals:['Research'],hours:4,color:'blue'}
]
const additionalStudents = [
['aisha','Aisha Ahmed','Biomedical Engineering',['Engineering','Research','Design'],['Healthcare','Robotics'],'mint'],
['daniel','Daniel Kim','Biology and Life Sciences',['Research','Laboratory techniques'],['Healthcare','Scientific Research'],'blue'],
['sofia','Sofia Martinez','Chemistry',['Laboratory techniques','Research'],['Sustainability','Scientific Research'],'peach'],
['ethan','Ethan Brooks','Mechanical Engineering',['Engineering','CAD','Python'],['Robotics','Climate'],'lavender'],
['amara','Amara Diallo','Mathematics and Statistics',['Data analysis','Statistical analysis','Python'],['Healthcare','Education'],'mint'],
['oliver','Oliver Nguyen','Computer Science',['Web development','JavaScript','Design'],['Education','Community Impact'],'blue'],
['isabella','Isabella Rossi','Environmental Science',['Research','Environmental modeling','Data analysis'],['Climate','Sustainability'],'peach'],
['lucas','Lucas Santos','Health Sciences',['Research','Communication'],['Healthcare','Community Impact'],'lavender'],
['zara','Zara Ali','Data Science',['Python','Data analysis','Data visualization'],['Healthcare','Artificial Intelligence'],'mint'],
['grace','Grace Mensah','Biology and Life Sciences',['Research','Laboratory techniques','Communication'],['Healthcare','Scientific Research'],'blue'],
['kai','Kai Nakamura','Mechanical Engineering',['CAD','Engineering','Design'],['Robotics','Sustainability'],'peach'],
['nina','Nina Desai','Mathematics and Statistics',['Statistical analysis','Data analysis','Research'],['Climate','Education'],'lavender'],
['elena','Elena Torres','Chemistry',['Research','Laboratory techniques','Data analysis'],['Sustainability','Healthcare'],'mint'],
['ben','Benjamin Wilson','Biomedical Engineering',['Engineering','Design','Communication'],['Healthcare','Robotics'],'blue']
]
students.push(...additionalStudents.map(([id,name,major,skills,interests,color])=>({id,name,major,skills,interests,color,goals:['Communication'],hours:6})))
students.forEach((s,i)=>{s.year=['Junior','Senior','Sophomore'][i%3];s.portrait=`/images/students/${s.id}.svg`;s.status='Open to projects'})
export const skillCategories = [
{title:'Software & Computing',color:'blue',skills:['Python','Web development','JavaScript']},
{title:'Biological & Health Sciences',color:'peach',skills:['Research','Laboratory techniques','Communication']},
{title:'Engineering & Design',color:'lavender',skills:['Engineering','CAD','Design']},
{title:'Mathematics & Data',color:'mint',skills:['Data analysis','Statistical analysis','Data visualization']},
{title:'Environmental & Physical Sciences',color:'yellow',skills:['Environmental modeling','Research']}
]

export const sampleProfile = {name:'Maya Chen',university:'Northbridge University',major:'Computer Science',year:'Junior',bio:'Curious builder looking to turn classroom ideas into community impact.',disciplines:['Computer Science'],skills:['Web development','Python'],interests:['Sustainability','Artificial Intelligence'],goals:['Design'],hours:6,preferred:'Community projects'}
