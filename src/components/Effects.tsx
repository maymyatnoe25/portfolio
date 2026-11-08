import {useEffect,useMemo,useRef} from 'react';

export function Background(){
  const stars=useMemo(()=>Array.from({length:innerWidth<860?16:34},(_,i)=>({
    s:6+Math.random()*10,d:3+Math.random()*4,l:-Math.random()*6,x:Math.random()*100,y:Math.random()*100,c:i%3?'--rose':'--dusty'})),[]);
  return <div className="bg" aria-hidden="true"><i/><i/>
    {stars.map((a,i)=><b key={i} style={{['--s' as string]:a.s+'px',['--d' as string]:a.d+'s',['--l' as string]:a.l+'s',left:a.x+'%',top:a.y+'%',background:`var(${a.c})`}}/>)}</div>;
}

export function Cursor(){
  const ring=useRef<HTMLDivElement>(null),dot=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    const root=document.documentElement;root.classList.add('cc');
    let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y,dx=x,dy=y,s=1,t=1,raf=0;
    const move=(e:MouseEvent)=>{x=e.clientX;y=e.clientY;
      root.style.setProperty('--mx',x+'px');root.style.setProperty('--my',y+'px');
      t=(e.target as Element).closest('a,button,.card,.chips span')?1.5:1};
    const loop=()=>{rx+=(x-rx)*.18;ry+=(y-ry)*.18;dx+=(x-dx)*.35;dy+=(y-dy)*.35;s+=(t-s)*.12;
      ring.current!.style.transform=`translate(${rx}px,${ry}px) scale(${s})`;
      dot.current!.style.transform=`translate(${dx}px,${dy}px)`;raf=requestAnimationFrame(loop)};
    addEventListener('mousemove',move);loop();
    return()=>{removeEventListener('mousemove',move);cancelAnimationFrame(raf);root.classList.remove('cc')};
  },[]);
  return <><div id="cur" ref={ring} aria-hidden="true"/><div id="dot" ref={dot} aria-hidden="true"/></>;
}
