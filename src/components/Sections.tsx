import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {PROJECTS,SKILLS,type Project} from '../data';

export function About(){return <section id="about"><h2>A little about me.</h2><div className="split"><div>
  <p>I am a Computer Science student at Albukhary International University, specialising in Data Science. I enjoy exploring how data, machine learning and software engineering can be combined to solve practical problems.</p>
  <p>My work focuses on building and evaluating real-world systems, from computer vision inspection and retrieval-augmented generation to time-series forecasting and full-stack applications.</p>
  <p>I value rigorous experimentation, meaningful evaluation and building technology that is genuinely useful.</p></div>
  <dl className="facts"><dt>University</dt><dd>Albukhary International University</dd><dt>Degree</dt><dd>Bachelor of Computer Science (Hons), Data Science</dd><dt>Expected graduation</dt><dd>2027</dd><dt>CGPA</dt><dd>3.89</dd><dt>Recognition</dt><dd>Dean’s List, multiple semesters</dd></dl></div></section>}

export function Expertise(){
  const keys=Object.keys(SKILLS),[k,setK]=useState(keys[0]);
  return <section id="expertise"><h2>Technical expertise</h2>
    <div className="tabs" role="tablist">{keys.map(x=><button key={x} role="tab" aria-selected={x===k} onClick={()=>setK(x)}>{x}</button>)}</div>
    <div className="chips" role="tabpanel">{SKILLS[k].map(s=><span key={k+s}>{s}</span>)}</div></section>;
}

function ProjectCard({p}:{p:Project}){
  const [open,setOpen]=useState(false);
  return <article className="card"><div className="shot"><span className="mono">Screenshot placeholder<br/>replace with project image</span></div>
    <div className="body"><span className="mono">{p.c}</span><h3>{p.t}</h3><p style={{margin:0}}>{p.d}</p>
      <div className="stack">{p.s.map(s=><span key={s}>{s}</span>)}</div>
      <AnimatePresence initial={false}>{open&&<motion.ul initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden',margin:0,paddingLeft:18,fontSize:'.92rem'}}>
        {p.h.map(x=><li key={x} style={{marginBottom:6}}>{x}</li>)}</motion.ul>}</AnimatePresence>
      <div className="row"><button className="btn s" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Hide details':'View details'}</button>
        {p.gh&&<a className="btn s" href={p.gh} target="_blank" rel="noopener">GitHub</a>}
        {p.demo&&<a className="btn p" href={p.demo} target="_blank" rel="noopener">Live demo</a>}</div></div></article>;
}
export const Projects=()=><section id="projects"><h2>Featured projects</h2><div className="grid">{PROJECTS.map(p=><ProjectCard key={p.t} p={p}/>)}</div></section>;

export const Journey=()=><section id="journey"><h2>Academic journey</h2><div className="tl">
  <div><h3>Bachelor of Computer Science (Hons)</h3><p>Albukhary International University, Alor Setar, Kedah · Specialisation: Data Science · Expected graduation 2027 · CGPA 3.89</p></div>
  <div><h3>Dean’s List</h3><p>Awarded across multiple semesters.</p></div>
  <div><h3>Relevant coursework</h3><p>Machine Learning, Data Analytics, Data Structures &amp; Algorithms, Software Engineering, Cloud Computing, IoT, Object-Oriented Computing, Vulnerability Assessment &amp; Penetration Testing.</p></div>
  <div><h3>Member, Horizon Club</h3><p>Albukhary International University.</p></div></div></section>;

export const Achievements=()=><section id="achievements"><h2>Achievements</h2><div className="ach">
  <div className="card"><h3>Dean’s List Award</h3><p>Multiple semesters, Albukhary International University.</p></div>
  <div className="card"><h3>Certificates</h3><p>Available on <a href="https://linkedin.com/in/may-myat-noe-lwin-928363343" target="_blank" rel="noopener">LinkedIn</a>.</p></div></div></section>;

export const Contact=()=><section id="contact"><div className="contact"><h2>Let’s build something meaningful.</h2>
  <p style={{maxWidth:'56ch',margin:'0 auto 24px'}}>I’m currently looking for opportunities to contribute, learn and grow through practical experience in Data Science, Machine Learning and AI.</p>
  <p><a className="big" href="mailto:maymyatnoelwin9272@gmail.com">maymyatnoelwin9272@gmail.com</a></p>
  <div className="btns" style={{justifyContent:'center'}}><a className="btn s" href="https://linkedin.com/in/may-myat-noe-lwin-928363343" target="_blank" rel="noopener">LinkedIn</a>
  <a className="btn s" href="https://github.com/maymyatnoe25" target="_blank" rel="noopener">GitHub</a></div></div></section>;
