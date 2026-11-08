import {useEffect,useState} from 'react';
export function useTheme(){
  const [t,setT]=useState<string|null>(()=>{try{return localStorage.getItem('theme')}catch{return null}});
  useEffect(()=>{if(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch{}}},[t]);
  const toggle=()=>{const dark=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;setT(dark?'light':'dark')};
  return toggle;
}
export function useActive(ids:string[]){
  const [a,setA]=useState(ids[0]);
  useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setA(e.target.id)}),{rootMargin:'-45% 0px -50% 0px'});
    ids.forEach(i=>{const el=document.getElementById(i);if(el)io.observe(el)});return()=>io.disconnect()},[ids]);
  return a;
}
