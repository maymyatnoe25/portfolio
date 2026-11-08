import {motion} from 'framer-motion';
const B=import.meta.env.BASE_URL;
const item={hidden:{opacity:0,y:18},show:{opacity:1,y:0,transition:{duration:.7}}};
export default function Hero(){
  return <section id="home" className="hero">
    <motion.div className="intro" initial="hidden" animate="show" transition={{staggerChildren:.12}}>
      <motion.h1 variants={item}>Building intelligent solutions through code and creativity.</motion.h1>
      <motion.p variants={item}>Hi, I’m May Myat Noe Lwin — a Computer Science student specialising in Data Science, passionate about machine learning, computer vision and building practical intelligent systems.</motion.p>
      <motion.div variants={item} className="btns">
        <a className="btn p" href="#projects">View my projects</a>
        <a className="btn s" href={B+'May_Myat_Noe_Lwin_CV.pdf'} download>Download CV</a>
        <a className="btn s" href="https://github.com/maymyatnoe25" target="_blank" rel="noopener">GitHub</a>
        <a className="btn s" href="https://linkedin.com/in/may-myat-noe-lwin-928363343" target="_blank" rel="noopener">LinkedIn</a></motion.div>
    </motion.div>
    <div className="portrait">
      <svg viewBox="0 0 540 540" aria-hidden="true"><g className="e"><path d="M40 90L150 30 290 60"/><path d="M500 140L450 300 510 440"/><path d="M60 470L170 520 330 500"/><path d="M40 90L60 470"/></g>
        <g>{[[40,90],[150,30],[500,140],[450,300],[510,440],[60,470],[330,500]].map(([x,y],i)=><circle key={i} className="n" cx={x} cy={y} r={4+i%2} style={{animationDelay:i*.5+'s'}}/>)}</g>
        <text x="410" y="105" className="mono" fill="currentColor" fontSize="12">AUROC 0.989</text><text x="14" y="300" className="mono" fill="currentColor" fontSize="12">top-3 · 14/19</text></svg>
      <img src={B+'portrait.jpg'} alt="Portrait of May Myat Noe Lwin" width={420} height={525}/></div></section>;
}
