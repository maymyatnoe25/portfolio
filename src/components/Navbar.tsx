import {useState} from 'react';
const L=['home','about','expertise','projects','journey','contact'];
export default function Navbar({active,onTheme}:{active:string;onTheme:()=>void}){
  const [open,setOpen]=useState(false);
  return <nav aria-label="Main"><div className="brand"><b>MAY MYAT NOE LWIN</b><span>Data Science &amp; AI</span></div>
    <div className={'links'+(open?' show':'')}>
      {L.map(l=><a key={l} href={'#'+l} className={active===l?'on':''} onClick={()=>setOpen(false)}>{l[0].toUpperCase()+l.slice(1)}</a>)}
      <button className="icon" onClick={onTheme} aria-label="Toggle light and dark theme">◐</button></div>
    <button className="icon" id="menu" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button></nav>;
}
