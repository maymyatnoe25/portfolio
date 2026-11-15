import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {ACHIEVEMENTS,FACTS,PROJECTS,SKILLS,TIMELINE,type Project} from '../data';
const BASE=import.meta.env.BASE_URL;

export function About(){return <section id="about"><h2>A little about me.</h2><div className="split"><div>
  <p>I am a Computer Science student at Albukhary International University, specialising in Data Science. I enjoy exploring how data, machine learning and software engineering can be combined to solve practical problems.</p>
  <p>My work focuses on building and evaluating real-world systems, from computer vision inspection and retrieval-augmented generation to time-series forecasting and full-stack applications.</p>
  <p>I value rigorous experimentation, meaningful evaluation and building technology that is genuinely useful.</p></div>
  <dl className="facts">{FACTS.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></section>}

export function Expertise(){
  const keys=Object.keys(SKILLS),[k,setK]=useState(keys[0]);
  return <section id="expertise"><h2>Technical expertise</h2>
    <div className="tabs" role="tablist">{keys.map(x=><button key={x} role="tab" aria-selected={x===k} onClick={()=>setK(x)}>{x}</button>)}</div>
    <div className="chips" role="tabpanel">{SKILLS[k].map(s=><span key={k+s}>{s}</span>)}</div></section>;
}

function ProjectCard({p}:{p:Project}){
  const [open,setOpen]=useState(false);
  return <article className="card">{p.img?<img className="shot" src={BASE+p.img} alt={p.t+' screenshot'} loading="lazy" width={640} height={360}/>:<div className="shot"><span className="mono">Screenshot placeholder<br/>add img in src/data.ts</span></div>}
    <div className="body"><span className="mono">{p.c}</span><h3>{p.t}</h3><p style={{margin:0}}>{p.d}</p>
      <div className="stack">{p.s.map(s=><span key={s}>{s}</span>)}</div>
      <AnimatePresence initial={false}>{open&&<motion.ul initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} style={{overflow:'hidden',margin:0,paddingLeft:18,fontSize:'.92rem'}}>
        {p.h.map(x=><li key={x} style={{marginBottom:6}}>{x}</li>)}</motion.ul>}</AnimatePresence>
      <div className="row"><button className="btn s" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Hide details':'View details'}</button>
        {p.gh&&<a className="btn s" href={p.gh} target="_blank" rel="noopener">GitHub</a>}
        {p.demo&&<a className="btn p" href={p.demo} target="_blank" rel="noopener">Live demo</a>}</div></div></article>;
}
export const Projects=()=><section id="projects"><h2>Featured projects</h2><div className="grid">{PROJECTS.map(p=><ProjectCard key={p.t} p={p}/>)}</div></section>;

export const Journey=()=><section id="journey"><h2>Journey &amp; activities</h2><div className="tl">{TIMELINE.map(x=><div key={x.t}><h3>{x.t}</h3>{x.w&&<span className="mono">{x.w}</span>}<p>{x.p}</p></div>)}</div></section>;

export const Achievements=()=><section id="achievements"><h2>Achievements</h2><div className="ach">{ACHIEVEMENTS.map(a=><div className="card" key={a.t}><h3>{a.t}</h3><p>{a.href?<>Available on <a href={a.href} target="_blank" rel="noopener">LinkedIn</a>.</>:a.p}</p></div>)}</div></section>;

function CopyEmail(){
  const [done,setDone]=useState(false);
  const copy=async()=>{try{await navigator.clipboard.writeText('maymyatnoelwin9272@gmail.com')}catch{}setDone(true);setTimeout(()=>setDone(false),2000)};
  return <p><button className="btn s" onClick={copy}>{done?'Email copied':'Copy email'}</button></p>;
}
export const Contact=()=><section id="contact"><div className="contact"><h2>Let’s build something meaningful.</h2>
  <p style={{maxWidth:'56ch',margin:'0 auto 24px'}}>I’m currently looking for opportunities to contribute, learn and grow through practical experience in Data Science, Machine Learning and AI.</p>
  <p><a className="big" href="mailto:maymyatnoelwin9272@gmail.com">maymyatnoelwin9272@gmail.com</a></p>
  <CopyEmail/>
  <div className="btns" style={{justifyContent:'center'}}><a className="btn s" href="https://linkedin.com/in/may-myat-noe-lwin-928363343" target="_blank" rel="noopener">LinkedIn</a>
  <a className="btn s" href="https://github.com/maymyatnoe25" target="_blank" rel="noopener">GitHub</a></div></div></section>;
